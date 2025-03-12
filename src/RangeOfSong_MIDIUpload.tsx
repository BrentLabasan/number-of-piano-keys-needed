import React, { useState } from 'react';
import { Midi } from '@tonejs/midi';
import * as Tone from "tone";
import RangeBoundary from './RangeBoundary';
import { Box, Card, Divider, FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';


import './RangeOfSong.scss';
import './RangeBoundary.scss'
import './RangeOfSong_MIDIUpload.scss';

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

          Range Of Song - MIDI Upload
        </h2>
        {/* index: {index} */}
      </Box>

      <Divider />

      <Box sx={{ p: 2 }}>

        TODO show lowest and highest notes

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center"
        >
          <input type="file" accept=".mid,.midi" onChange={handleFileChange} className="mb-4" />
          <p>Click the button above to select a MIDI file from your computer, or drag & drop a MIDI file onto this area.</p>
          {highestNote && lowestNote && (
            <div className="mt-4">
              <p>Lowest Note: {lowestNote}</p>
              <p>Highest Note: {highestNote}</p>
            </div>
          )}
        </div>

      </Box>


      <Divider />


      <Box sx={{ p: 2 }}>

        STATUS: Song {doesSongFitItPianoRange ? "fits" : "does not fit"} into the specified range.
      </Box>
    </Card>
  );
}