import React from 'react';
import logo from './logo.svg';
import './App.css';
import PianoKey from './PianoKey';
import note from './INote';

//  const arrNoteName_letter = new Array(7);
//  const arrNoteName_letter = ['C', 'D', 'E', 'F', 'G', 'A', 'B', ];
 const arrNoteName_letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', ];
 


const arrNotes: note[] = new Array();

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
