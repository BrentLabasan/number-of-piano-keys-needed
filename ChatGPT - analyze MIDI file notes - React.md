Certainly! Here's how you can refactor the code into a React component. The overall functionality remains the same: handling file uploads or drag-and-drop for MIDI files, parsing them, and displaying the lowest and highest notes.

### 1. Install Dependencies
In a React app, you would need to install `@tonejs/midi` to handle MIDI parsing.

```bash
npm install @tonejs/midi
```

### 2. React Component for Uploading and Analyzing MIDI File

```jsx
import React, { useState } from 'react';
import { Midi } from '@tonejs/midi';

const MidiAnalyzer = () => {
  const [lowestNote, setLowestNote] = useState('N/A');
  const [highestNote, setHighestNote] = useState('N/A');
  const [dragging, setDragging] = useState(false);

  // Convert MIDI note number to note name (e.g., 60 -> C4)
  const noteToName = (midiNote) => {
    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const octave = Math.floor(midiNote / 12) - 1; // Calculate the octave
    const note = noteNames[midiNote % 12];
    return `${note}${octave}`;
  };

  // Helper function to handle file reading
  const readMidiFile = (file) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const midiData = event.target.result;
      try {
        const midi = new Midi(midiData); // Parse MIDI data using Tone.js MIDI
        let lowest = Infinity;
        let highest = -Infinity;

        // Loop through all tracks and their notes
        midi.tracks.forEach((track) => {
          track.notes.forEach((note) => {
            if (note.midi < lowest) lowest = note.midi;
            if (note.midi > highest) highest = note.midi;
          });
        });

        // Update the results in the state
        setLowestNote(lowest === Infinity ? 'N/A' : noteToName(lowest));
        setHighestNote(highest === -Infinity ? 'N/A' : noteToName(highest));
      } catch (error) {
        alert('Error parsing MIDI file.');
        console.error(error);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  // Handle file input change
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      readMidiFile(file);
    }
  };

  // Handle drag and drop
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      readMidiFile(file);
    }
  };

  return (
    <div>
      <h1>MIDI Note Analyzer</h1>
      <p>Select a MIDI file to upload:</p>
      <input type="file" accept=".mid,.midi" onChange={handleFileInputChange} />

      <div
        id="drop-area"
        style={{
          width: '100%',
          height: '300px',
          border: '2px dashed #007BFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          backgroundColor: dragging ? 'rgba(0, 123, 255, 0.1)' : 'transparent',
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Drag and drop a MIDI file here</p>
      </div>

      <h2>Results:</h2>
      <p>Lowest Note: <span>{lowestNote}</span></p>
      <p>Highest Note: <span>{highestNote}</span></p>
    </div>
  );
};

export default MidiAnalyzer;
```

### Explanation:

1. **State Management**:
   - `lowestNote` and `highestNote` are React states to store the lowest and highest note names respectively.
   - `dragging` is a state to manage whether the user is currently dragging a file over the drop area (for changing its background style).

2. **`noteToName` Function**:
   - Converts the MIDI note number to a readable note name (e.g., `60` → `C4`).

3. **`readMidiFile` Function**:
   - Reads the MIDI file using `FileReader`, then parses the content using `Midi` from the `@tonejs/midi` library to extract the notes. It determines the lowest and highest notes and updates the state accordingly.

4. **File Input and Drag-and-Drop**:
   - The file input triggers the `handleFileInputChange` function when the user selects a file.
   - The drag-and-drop area listens for drag-over, drag-leave, and drop events to allow the user to either drag and drop the MIDI file or select it from the file explorer.
   - When the file is dropped or selected, the `readMidiFile` function is called to process the file.

5. **UI Rendering**:
   - The component renders a file input, a drag-and-drop area, and the lowest and highest note results.
   - When dragging a file over the drop area, the background color changes to provide visual feedback.

### Usage:

1. Add the component to your app (e.g., `App.js`):

```jsx
import React from 'react';
import MidiAnalyzer from './MidiAnalyzer';

function App() {
  return (
    <div className="App">
      <MidiAnalyzer />
    </div>
  );
}

export default App;
```

2. Install the required dependencies (if you haven't already):

```bash
npm install @tonejs/midi
```

### Conclusion:
This React component allows users to upload or drag-and-drop a MIDI file, and it will analyze the lowest and highest notes in that file. The use of state hooks makes it easy to manage and update the UI in response to file uploads.