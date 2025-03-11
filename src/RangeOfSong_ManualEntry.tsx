import React, { useState } from 'react';
import { Midi } from '@tonejs/midi';
import * as Tone from "tone";
import RangeBoundary from './RangeBoundary';
import { Box, Card, Divider, FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';
import './RangeOfSong_ManualEntry.scss';

import './RangeOfSong.scss';
import './RangeBoundary.scss'

import { renderMenuItems } from './RangeBoundary';

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

  const doesSongFitItPianoRange = pianoBoundaryLow <= boundaryLow && boundaryHigh >= pianoBoundaryHigh;

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

  return (
    // <section id="parentContainer">
    <Card
      variant="outlined"
    // sx={{ maxWidth: 360 }}
    >
      <Box sx={{ p: 2 }}>
        <h2>

          Range Of Song - User Select
        </h2>
        {/* index: {index} */}
      </Box>

      {/* TODO Why doesn't this divider extend all the way to the right? */}

      <Divider />
      {/* TODO why does this cause an error? */}
      {/* <Divider variant="middle /> */}


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

      </Box>


      <Divider />


      <Box sx={{ p: 2 }}>

        STATUS: Song {doesSongFitItPianoRange ? "fits" : "does not fit"} into the specified range.

      </Box>
    </Card>

    // </section>
  );
}