const fs = require('fs');
const MidiParser = require('midi-parser-js');

function getHighestAndLowestNotes(midiFile) {
  const midiData = fs.readFileSync(midiFile);
  const parser = new MidiParser();
  const parsedMidi = parser.parse(midiData);

  let lowestNote = 127; // Highest possible MIDI note number
  let highestNote = 0;

  parsedMidi.track.forEach(track => {
    track.forEach(event => {
      if (event.type === 'noteOn') {
        const noteNumber = event.data[0];
        if (noteNumber < lowestNote) {
          lowestNote = noteNumber;
        }
        if (noteNumber > highestNote) {
          highestNote = noteNumber;
        }
      }
    });
  });

  return { lowest: lowestNote, highest: highestNote };
}

// Example usage:
const midiFilePath = 'your_midi_file.mid'; 
const { lowest, highest } = getHighestAndLowestNotes(midiFilePath);

console.log('Lowest note:', lowest);
console.log('Highest note:', highest);