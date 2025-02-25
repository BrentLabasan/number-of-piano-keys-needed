import React, { useState } from "react";
import { Midi } from "@tonejs/midi";

const MidiAnalyzer: React.FC = () => {
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
      
      setLowestNote(minNote !== Infinity ? Midi.midiToNoteName(minNote) : null);
      setHighestNote(maxNote !== -Infinity ? Midi.midiToNoteName(maxNote) : null);
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
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center"
    >
      <input type="file" accept=".mid" onChange={handleFileChange} className="mb-4" />
      <p>Drag & drop a MIDI file here or select one.</p>
      {highestNote && lowestNote && (
        <div className="mt-4">
          <p>Lowest Note: {lowestNote}</p>
          <p>Highest Note: {highestNote}</p>
        </div>
      )}
    </div>
  );
};

export default MidiAnalyzer;
