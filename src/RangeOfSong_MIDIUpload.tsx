import React, { useState } from 'react';
import { Midi } from '@tonejs/midi';
import * as Tone from "tone";
import RangeBoundary from './RangeBoundary';
import { Box, Card, Chip, Divider, FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


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

  // const [highestNote, setHighestNote] = useState<string | null>(null);
  // const [lowestNote, setLowestNote] = useState<string | null>(null);
  // const doesSongFitItPianoRange = pianoBoundaryLow <= boundaryLow && boundaryHigh >= pianoBoundaryHigh;
  const [highestNote, setHighestNote] = useState<string | null>(null);
  const [lowestNote, setLowestNote] = useState<string | null>(null);
  const doesSongFitItPianoRange = (lowestNote !== null && highestNote !== null) &&
    (parseInt(pianoBoundaryLow) <= parseInt(lowestNote) && parseInt(highestNote) <= parseInt(pianoBoundaryHigh));
debugger
  const [high, setHigh] = useState<string | null>(null);
  const [low, setLow] = useState<string | null>(null);

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

      // WORKS format is e.g. D1 G#7
      // setLowestNote(minNote !== Infinity ? Tone.Frequency(minNote, "midi").toNote() : null);
      // setHighestNote(maxNote !== -Infinity ? Tone.Frequency(maxNote, "midi").toNote() : null);
      setLowestNote("" + minNote);
      setHighestNote("" + maxNote);
      setLow(minNote !== Infinity ? Tone.Frequency(minNote, "midi").toNote() : null);
      setHigh(maxNote !== -Infinity ? Tone.Frequency(maxNote, "midi").toNote() : null);
      debugger;

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

          MIDI Upload
        </h2>
        {/* index: {index} */}
      </Box>

{/* still doesn't extend all the way to right, even if content is simplified so that Boxs are removed */}
{/* even if I replace with code example from documentation, still doesn't work */}
      <Divider
      variant="middle"
      />

      <Box sx={{ p: 2 }}>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center"
        >
          <input type="file" accept=".mid,.midi" onChange={handleFileChange} className="mb-4" />
          {/* TODO Currently if you upload by OS,the filename will be displayed by right of button.  Then if you upload by drag n drop, the filename will stay the same. */}
          <p>Click the button above to select a MIDI file from your computer, or drag & drop a MIDI file onto this area.</p>
          {highestNote && lowestNote && (
            <div className="mt-4">
              {/* BOOKMARK TODO make the lowest and highest look good */}

              <p>Lowest Note: {lowestNote} | Highest Note: {highestNote}</p>
            </div>
          )}
        </div>

        {lowestNote && highestNote && <span><Chip icon={<ArrowBackIcon />} label={low} />
        <Chip icon={<ArrowForwardIcon />} label={high} /></span>}


      </Box>


      {lowestNote && highestNote && <Divider />}


      {lowestNote && highestNote &&<Box sx={{ p: 2 }}>
        STATUS: Song {doesSongFitItPianoRange ? "fits" : "does not fit"} into the specified range.
      </Box>}
    </Card>
  );
}