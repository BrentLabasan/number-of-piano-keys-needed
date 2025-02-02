import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import React from 'react';
import MIDInotes from './MIDInotes';





function renderMenuItems() {
  return MIDInotes.map((note, i) => {
    return <MenuItem value={note.midiNoteNumber} key={note.midiNoteNumber}>{getMenuItemValue(i)}</MenuItem>
  });
}

function getMenuItemValue(i: number) {
  return MIDInotes[i].sharp;
}

export default function RangeBoundary() {
  // BOOKMARK make separate state for both lowest and highest
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <section>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Lowest Key</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {renderMenuItems()}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Highest Key</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {renderMenuItems()}
          </Select>
        </FormControl>
      </Box>
    </section>

  );

}