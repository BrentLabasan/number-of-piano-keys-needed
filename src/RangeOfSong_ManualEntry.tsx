import React, { useState } from 'react';
import { Midi } from '@tonejs/midi';
import * as Tone from "tone";
import RangeBoundary from './RangeBoundary';
import { Autocomplete, Box, Card, Divider, FormControl, InputLabel, Select, SelectChangeEvent, TextField } from '@mui/material';
import './RangeOfSong_ManualEntry.scss';

import './RangeOfSong.scss';
import './RangeBoundary.scss'

import { renderMenuItems } from './RangeBoundary';

import SongChoices from './SongChoices';

type RangeOfSongProps = {
  key: number;
  index: number;
  // boundaryLow: string;
  boundaryLow: string;
  boundaryHigh: string;

  pianoBoundaryLow: string;
  pianoBoundaryHigh: string;
  // handlePianoBoundaryChangeLow: SelectChangeEvent;
  // handlePianoBoundaryChangeLow: SelectChangeEvent<HTMLInputElement>;
  // handlePianoBoundaryChangeLow: ChangeEvent<HTMLInputElement >;
  handleChangeTo_arrayRangeOfSongs: (
    event: SelectChangeEvent,
    indexOfComponentToChange: number,
    areModifyingLow: boolean) => void;
  // handlePianoBoundaryChangeHigh: Function;
  // handleSongBoundaryChangeHigh: (event: SelectChangeEvent, indexOfComponentToChange: number, areModifyingLow: boolean) => void;
}


export default function RangeOfSong({ key, index, boundaryLow, boundaryHigh, pianoBoundaryLow, pianoBoundaryHigh, handleChangeTo_arrayRangeOfSongs }: RangeOfSongProps) {

  const [value, setValue] = React.useState<string | null>(SongChoices[0].label);
  const [inputValue, setInputValue] = React.useState('');

  // const [mediaUrl, setMediaUrl] = React.useState('');
  const [mediaUrl, setMediaUrl] = React.useState(SongChoices[0].url);

  const doesSongFitItPianoRange = parseInt(pianoBoundaryLow) <= parseInt(boundaryLow) && parseInt(boundaryHigh) <= parseInt(pianoBoundaryHigh);

  const [highestNote, setHighestNote] = useState<string | null>(null);
  const [lowestNote, setLowestNote] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = async (e) => {
      if (!e.target?.result) return;
      const midi = new Midi(e.target.result as ArrayBuffer);

      let minNote = Infinity;
      let maxNote = -Infinity;

      midi.tracks.forEach((track) => {
        track.notes.forEach((note) => {
          if (note.midi < minNote) minNote = note.midi;
          if (note.midi > maxNote) maxNote = note.midi;
        });
      });

      // setLowestNote(minNote !== Infinity ? Midi.midiToNoteName(minNote) : null);
      // setHighestNote(maxNote !== -Infinity ? Midi.midiToNoteName(maxNote) : null);
      setLowestNote(minNote !== Infinity ? Tone.Frequency(minNote, "midi").toNote() : null);
      setHighestNote(maxNote !== -Infinity ? Tone.Frequency(maxNote, "midi").toNote() : null);
    };
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      handleFileUpload(event.target.files[0]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      handleFileUpload(event.dataTransfer.files[0]);
    }
  };

  const baz = ['ABBA - Dancing Queen - Paul W. Wells', 'Whitney Houston - I Wanna Dance With Somebody - Paul W. Wells'];

  const foo = {
    'Whitney Houston - I Wanna Dance With Somebody - Paul W. Wells': {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=p4GF_0GdCJQ'
    },
    'ABBA - Dancing Queen - Paul W. Wells': {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=OGRsryg7Ro0'
    },
  }


  return (
    // <section id="parentContainer">
    <Card
      variant="outlined"
    // sx={{ maxWidth: 360 }}
    >
      <Box sx={{ p: 2 }}>
        <h2>

          MANUAL ENTRY
        </h2>
        {/* index: {index} */}
      </Box>

      {/* TODO Why doesn't this divider extend all the way to the right? */}

      <Divider>
        Select Range
      </Divider>
      {/* TODO why does this cause an error? */}
      {/* <Divider variant="middle /> */}


      {/* TODO */}

      <Box sx={{ p: 2 }}>

        <div className="row">
          <div className="column">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Lowest Key of Song 🎼</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={boundaryLow}
                  label="Age"
                  onChange={(e) => handleChangeTo_arrayRangeOfSongs(e, index, true)}
                >
                  {renderMenuItems()}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="column">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Highest Key of Song 🎼</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={boundaryHigh}
                  label="Age"
                  onChange={(e) => handleChangeTo_arrayRangeOfSongs(e, index, false)}
                >
                  {renderMenuItems()}
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>

        <Divider>
          Notepad
        </Divider>

        <br />

        <TextField
          id="outlined-multiline-static"
          label="Write any notes here."
          multiline
          rows={4}
          // defaultValue="Default Value"
          fullWidth
        // placeholder="Write any notes here."
        />
        <br />
        <br />

        <Divider>
          Choose A Song
        </Divider>

        <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
        <div>{`inputValue: '${inputValue}'`}</div>



        <div className="row">
          <div className="column">
            <Box sx={{ minWidth: 120 }}>
              {/* BOOKMARK */}
              {/* Searchable pre-filled dropdown list of song compositions that can be used to fill in the Manual Entry widget https://mui.com/material-ui/react-autocomplete/ */}
              <Autocomplete
                disablePortal

                // options={SongChoices}
                options={baz}

                sx={{ width: 500 }}
                renderInput={(params) => <TextField {...params} label="Choose A Song" />}

                value={value}
                onChange={(event: any, newValue: string | null, details: any) => {
                  setValue(newValue);
                  setMediaUrl(SongChoices[event.target.value].url);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
              />
            </Box>
          </div>
          <div className="column">
            <Box sx={{ minWidth: 120 }}>
              Preview
              <br />

              {mediaUrl && <iframe width="420" height="315"
                src={mediaUrl}>
              </iframe>}

              <br />
              Download/Buy Link
            </Box>
          </div>
        </div>





        <br />

      </Box>




      <Divider>
        STATUS
      </Divider>

      <br />

      Number of Keys Needed: {parseInt(boundaryHigh) - parseInt(boundaryLow) + 1}


      <Box sx={{ p: 2 }}>
        {/* TODO put checkmark or x icon */}
        Song {doesSongFitItPianoRange ? "fits" : "does not fit"} into the specified range.

      </Box>
    </Card>

    // </section>
  );
}