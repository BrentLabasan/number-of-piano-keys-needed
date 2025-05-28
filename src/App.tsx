import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import PianoKey from './PianoKey';
import note from './INote';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import RangeBoundary from './RangeBoundary';
import RangeOfPiano from './RangeOfPiano';
import RangeOfSong_ManualEntry from './RangeOfSong_ManualEntry';
import RangeOfSong_MIDIUpload from './RangeOfSong_MIDIUpload';
import { Button } from '@mui/material';

import TouchAppIcon from '@mui/icons-material/TouchApp';
import UploadFileIcon from '@mui/icons-material/UploadFile';
//  TODOs
// when you click on key, you hear the sound of it
// take pic of configuration

//  const arrNoteName_letter = new Array(7);
//  const arrNoteName_letter = ['C', 'D', 'E', 'F', 'G', 'A', 'B', ];
const arrNoteName_letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G',];

const midiNotes: note[] = [];

const noteNames: ([string, string, boolean])[] = [
  ["C", "C", false],
  ["C#", "Db", true],
  ["D", "D", false],
  ["D#", "Eb", true],
  ["E", "E", false],
  ["F", "F", false],
  ["F#", "Gb", true],
  ["G", "G", false],
  ["G#", "Ab", true],
  ["A", "A", false],
  ["A#", "Bb", true],
  ["B", "B", false]
];

// for (let i = 21; i <= 127; i++) {
for (let i = 21; i <= 108; i++) {
  const octave = Math.floor(i / 12) - 1;
  const noteIndex = i % 12;

  // const [sharp, flat, isBlackKey] = noteNames[noteIndex];
  const [sharp, flat] = noteNames[noteIndex];
  const isBlackKey: boolean = noteNames[noteIndex][2];


  const frequency = 440 * Math.pow(2, (i - 69) / 12);

  midiNotes.push({
    midi: i,
    frequency: parseFloat(frequency.toFixed(2)),
    sharp: `${sharp}${octave}`,
    flat: `${flat}${octave}`,
    isBlackKey: isBlackKey
  });
}

// TODO mark middle C

console.log(midiNotes.toString());


function renderBlackPianoKeys() {
  return midiNotes.filter((note) => note.isBlackKey).map((note, i) => {
    return <PianoKey key={i} {...note} />;
  });
}
function renderWhitePianoKeys() {
  return midiNotes.filter((note) => !note.isBlackKey).map((note, i) => {
    return <PianoKey key={i} {...note} />;
  });
}

const defaultUserSelect = {
  type: 'userSelect',
  low: '21',
  high: '127',
};

const defaultMIDIUpload = {
  type: 'midiUpload',
  low: '1',
  high: '1',
};


const arrRangeOfSongComponents_initial = [
  defaultUserSelect,
  defaultMIDIUpload
];


function App() {

  const [pianoBoundaryLow, setPianoBoundaryLow] = React.useState('21');
  const [pianoBoundaryHigh, setPianoBoundaryHigh] = React.useState('127');

  const handlePianoBoundaryChangeLow = (event: SelectChangeEvent) => {
    // alert(event.target.value);
    setPianoBoundaryLow(event.target.value as string);
  };

  const handlePianoBoundaryChangeHigh = (event: SelectChangeEvent) => {
    setPianoBoundaryHigh(event.target.value as string);
  };


  
  const handleBoundaryChangeLow_fromButton = (key: string) => {
    // alert(key)
    setPianoBoundaryLow(key);
  };
  const handleBoundaryChangeHigh_fromButton = (key: string) => {
    setPianoBoundaryHigh(key);
  };






  const [arrayRangeOfSongs_state, modifyArrayRangeOfSongs] = useState(arrRangeOfSongComponents_initial);

  // low or high, index of the component
  const handleChangeTo_arrayRangeOfSongs = (event: SelectChangeEvent, indexOfComponentToChange: number, areModifyingLow: boolean) => {
    // alert (typeof indexOfComponentToChange)
    const copy = JSON.parse(JSON.stringify(arrayRangeOfSongs_state));
    if (areModifyingLow) {
      copy[indexOfComponentToChange].low = event.target.value as string
    } else {
      copy[indexOfComponentToChange].high = event.target.value as string
    }

    modifyArrayRangeOfSongs(copy);
  }

  function renderAll_rangeOfSongComponents() {
    return arrayRangeOfSongs_state.map((obj_rangeOfSong, i) => {
      if (obj_rangeOfSong.type === 'userSelect') {
        return <RangeOfSong_ManualEntry
          key={i}
          index={i}

          pianoBoundaryLow={pianoBoundaryLow}
          pianoBoundaryHigh={pianoBoundaryHigh}

          boundaryLow={obj_rangeOfSong.low}
          boundaryHigh={obj_rangeOfSong.high}
          handleChangeTo_arrayRangeOfSongs={handleChangeTo_arrayRangeOfSongs}
        // handleSongBoundaryChangeHigh={handleChangeTo_arrayRangeOfSongs}
        />;
      } else {
        return <RangeOfSong_MIDIUpload
          key={i}
          index={i}

          pianoBoundaryLow={pianoBoundaryLow}
          pianoBoundaryHigh={pianoBoundaryHigh}

          boundaryLow={obj_rangeOfSong.low}
          boundaryHigh={obj_rangeOfSong.high}
          handleChangeTo_arrayRangeOfSongs={handleChangeTo_arrayRangeOfSongs}
        // handleSongBoundaryChangeHigh={handleChangeTo_arrayRangeOfSongs}
        />;

      }

    });
  }


  function addManualEntry() {
    // alert();
    const clone = structuredClone(arrayRangeOfSongs_state);
    clone.push(defaultUserSelect);
    modifyArrayRangeOfSongs(clone);
  }
  function addMIDIUpload() {
    // alert();
    const clone = structuredClone(arrayRangeOfSongs_state);
    clone.push(defaultMIDIUpload);
    modifyArrayRangeOfSongs(clone);
  }



  return (
    <div className="App">
      <h1>
        Does My Piano Have Enough Keys For This Song?
        {/* Can My Song Be Played On This Size Piano? */}

        {/* <div>made by Fabricator</div> */}
      </h1>

      <p>A Fun Little Project by Fabricator</p>

      {/* PIANO ROLL */}
      {/* <div id="containerBlackKeys">
        <span id="span1">

          {renderBlackPianoKeys()}
        </span>
      </div>
      <div id="containerWhiteKeys">
        {renderWhitePianoKeys()}
      </div> */}

      <br />
      <br />
      <br />


      {/* TODO 2 columns */}

      <div className="container">

        <div id="leftSide">
          <RangeOfPiano
            boundaryLow={pianoBoundaryLow}
            boundaryHigh={pianoBoundaryHigh}
            handlePianoBoundaryChangeLow={handlePianoBoundaryChangeLow}
            handlePianoBoundaryChangeHigh={handlePianoBoundaryChangeHigh}
            handlePianoBoundaryChangeLow_fromButton={handleBoundaryChangeLow_fromButton}
            handlePianoBoundaryChangeHigh_fromButton={handleBoundaryChangeHigh_fromButton}
          />

        </div>

        <div id="rightSide">
          {renderAll_rangeOfSongComponents()}
          <br />
          <h3>

            + ADD ANOTHER NOTE RANGE
          </h3>
          <Button onClick={addManualEntry} variant="contained" size="large" startIcon={<TouchAppIcon />}>MANUAL ENTRY</Button>
          &nbsp;
          or
          &nbsp;
          <Button onClick={addMIDIUpload} variant="contained" size="large" endIcon={<UploadFileIcon />}>MIDI UPLOAD</Button>
        </div>

      </div>

      {/* <RangeBoundary /> */}

    </div>
  );
}

export default App;
