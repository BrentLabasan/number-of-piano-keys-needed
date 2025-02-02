import React from 'react';
import logo from './logo.svg';
import './App.css';
import PianoKey from './PianoKey';
import note from './INote';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


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

function renderPianoKeys() {
  return arrNotes.map((note, i) => {
    return <PianoKey key={i} {...note} />;
  });
}

function App() {
  return (
    <div className="App">
      {renderPianoKeys()}
      <br /><br />

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
