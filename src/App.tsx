import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PianoKey from './PianoKey';
import note from './INote';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import RangeBoundary from './RangeBoundary';
import RangeOfPiano from './RangeOfPiano';
import RangeOfSong from './RangeOfSong';

//  TODOs
// take pic of configuration

// BOOKMARK work on RangeSelector component
// React Hook "React.useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function

//  const arrNoteName_letter = new Array(7);
//  const arrNoteName_letter = ['C', 'D', 'E', 'F', 'G', 'A', 'B', ];
const arrNoteName_letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G',];



const arrNotes: note[] = new Array();




// BOOKMARK Replace my code with ChatGPT code

const midiNotes = [];

const noteNames = [
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

for (let i = 21; i <= 127; i++) {
  const octave = Math.floor(i / 12) - 1;
  const noteIndex = i % 12;
  const [sharp, flat, isBlackKey] = noteNames[noteIndex];
  const frequency = 440 * Math.pow(2, (i - 69) / 12);

  midiNotes.push({
    midi: i,
    frequency: parseFloat(frequency.toFixed(2)),
    sharp: `${sharp}${octave}`,
    flat: `${flat}${octave}`,
    isBlackKey
  });
}

console.log(midiNotes.toString());





/*
0 1 2 3 4 5 6 1 2 3 4 5 6  /// 
*/

// iterate through the MIDI numbers
let isCurrKeyWhite = true; // if starting on A0
// BM determine when isCurrKeyWhite true or false
let prevKey = 'G#';
for (let i = 21; i <= 108; i++) {
  const obj: note = new Object();
  obj.midiNumber = i;
  const formula = i % 7
  // console.log("iterator", i , i % 7)
  obj.noteName = arrNoteName_letter[formula];
  arrNotes.push(obj)
}

console.log('arrNotes', arrNotes);


// TODO draw white and black keys in differemt places
function renderPianoKeys() {
  return arrNotes.map((note, i) => {
    return <PianoKey key={i} {...note} />;
  });
}




// have a state for an array representing all RangeOfSong components that have been created
// for every pbkect om arrau, remder a RangeOfSong
const initialRangeOfSongsObject = {
  low: '21',
  high: '127',
};


function App() {

  const [pianoBoundaryLow, setPianoBoundaryLow] = React.useState('21');
  const [pianoBboundaryHigh, setPianoBoundaryHigh] = React.useState('127');

  const handlePianoBoundaryChangeLow = (event: SelectChangeEvent) => {
    setPianoBoundaryLow(event.target.value as string);
  };

  const handlePianoBoundaryChangeHigh = (event: SelectChangeEvent) => {
    setPianoBoundaryHigh(event.target.value as string);
  };

  const [arrayRangeOfSongs, modifyArrayRangeOfSongs] = useState(new Array(initialRangeOfSongsObject));

  // low or high, index of the component
  // BOOKMARK send this as a prop in renderAll_rangeOfSongComponents()
  const handleChangeTo_arrayRangeOfSongs = (event: SelectChangeEvent, indexOfComponentToChange: number, areModifyingLow: boolean) => {
    const copy = JSON.parse(JSON.stringify(arrayRangeOfSongs));
    if (areModifyingLow) {
      copy[indexOfComponentToChange].low = event.target.value as string
    } else {
      copy[indexOfComponentToChange].high = event.target.value as string
    }

    modifyArrayRangeOfSongs(copy);
  }

  function renderAll_rangeOfSongComponents() {
    return arrayRangeOfSongs.map((obj_rangeOfSong, i) => {
      return <RangeOfSong
        key={i}
        boundaryLow={obj_rangeOfSong.low}
        boundaryHigh={obj_rangeOfSong.high}
        handlePianoBoundaryChangeLow={handlePianoBoundaryChangeLow}
        handlePianoBoundaryChangeHigh={handlePianoBoundaryChangeHigh}
      />;
    });
  }






  return (
    <div className="App">
      {renderPianoKeys()}
      <br /><br />
      {/* TODO 2 columns */}
      <RangeOfPiano
        boundaryLow={pianoBoundaryLow}
        boundaryHigh={pianoBboundaryHigh}
        handlePianoBoundaryChangeLow={handlePianoBoundaryChangeLow}
        handlePianoBoundaryChangeHigh={handlePianoBoundaryChangeHigh}
      />
     

      {renderAll_rangeOfSongComponents()}
      
      {/* <RangeBoundary /> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
