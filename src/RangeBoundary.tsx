import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import React from 'react';
import MIDInotes from './MIDInotes';

import './RangeBoundary.scss'



export function renderMenuItems() {
  return MIDInotes.map((note, i) => {
    return <MenuItem value={note.midiNoteNumber} key={note.midiNoteNumber}>{getMenuItemValue(i)}</MenuItem>
  });
}

function getMenuItemValue(i: number) {
  return MIDInotes[i].sharp;
}

// enum Blah {
//   'Piano',
//   'Song'
// }
// enum Blah {
//   Piano,
//   Song
// }

// interface RangeBoundaryProps {
//   // RangeBoundaryType: Blah;
//   rangeBoundaryType: 'piano' | 'song';
//   boundaryLow: string;
//   boundaryHigh: string;
//   handleChangeLow: (event: SelectChangeEvent,
//     indexOfComponentToChange?: number | undefined,
//     areModifyingLow?: boolean) => void;
//   handleChangeHigh: (event: SelectChangeEvent) => void;
//   indexOfSongComponent?: number;
// }
type RangeBoundaryProps = {
  // RangeBoundaryType: Blah;
  rangeBoundaryType: 'piano' | 'song';
  boundaryLow: string;
  boundaryHigh: string;
  handleChangeLow: (event: SelectChangeEvent) => void;
  handleChangeHigh: (event: SelectChangeEvent) => void;
  indexOfSongComponent?: number;
}

export default function RangeBoundary({ rangeBoundaryType, boundaryLow, boundaryHigh, handleChangeLow, handleChangeHigh }: RangeBoundaryProps) {


  // TODO draw to Inputs side by side
  // TODO buttons for 25, 49, 61, 73, 76, 88 sizes
  // TODO default value is the -1?
  return (
    <section>

      <div className="row">
        <div className="column">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Lowest Key of {rangeBoundaryType === 'piano' ? 'Piano 🎹' : 'Song 🎼'}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={boundaryLow}
                label="Age"
                onChange={handleChangeLow}
              >
                {renderMenuItems()}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="column">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Highest Key of {rangeBoundaryType === 'piano' ? 'Piano 🎹' : 'Song 🎼'}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={boundaryHigh}
                label="Age"
                onChange={handleChangeHigh}
              >
                {renderMenuItems()}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>




    </section>

  );

}