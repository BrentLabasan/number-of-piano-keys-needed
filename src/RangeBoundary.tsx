import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import React from 'react';
import MIDInotes from './MIDInotes';

import './RangeBoundary.scss'



function renderMenuItems() {
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

interface RangeBoundaryProps {
  // RangeBoundaryType: Blah;
  rangeBoundaryType: 'piano' | 'song';
}

export default function RangeBoundary({ rangeBoundaryType }: RangeBoundaryProps) {
  // BOOKMARK make separate state for both lowest and highest
  const [boundaryLow, setBoundaryLow] = React.useState('21');

  const handleChange = (event: SelectChangeEvent) => {
    setBoundaryLow(event.target.value as string);
  };

  const [boundaryHigh, setBoundaryHigh] = React.useState('127');

  const handleChangeHigh = (event: SelectChangeEvent) => {
    setBoundaryHigh(event.target.value as string);
  };


  // TODO draw to Inputs side by side
  // TODO buttons for 25, 49, 61, 73, 76, 88 sizes
  // TODO default value is the -1?
  return (
    <section>

      <div className="row">
        <div className="column">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Lowest Key of {rangeBoundaryType === 'piano' ? 'Piano 🎹' : 'Song 🎼'}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={boundaryLow}
                label="Age"
                onChange={handleChange}
              >
                {renderMenuItems()}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="column">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Highest Key of {rangeBoundaryType === 'piano' ? 'Piano 🎹' : 'Song 🎼'}</InputLabel>
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