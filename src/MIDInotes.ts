const MIDInotes = [
    // {'midiNoteNumber': -1, 'frequency': -1, 'sharp': 'PICK A NOTE', 'flat': 'PICK A NOTE', 'isBlackKey': false},
    {'midiNoteNumber': 21, 'frequency': 27.5, 'sharp': 'A0', 'flat': 'A0', 'isBlackKey': false},
    {'midiNoteNumber': 22, 'frequency': 29.14, 'sharp': 'A#0', 'flat': 'Bb0', 'isBlackKey': true},
    {'midiNoteNumber': 23, 'frequency': 30.87, 'sharp': 'B0', 'flat': 'B0', 'isBlackKey': false},
    {'midiNoteNumber': 24, 'frequency': 32.7, 'sharp': 'C1', 'flat': 'C1', 'isBlackKey': false},
    {'midiNoteNumber': 25, 'frequency': 34.65, 'sharp': 'C#1', 'flat': 'Db1', 'isBlackKey': true},
    {'midiNoteNumber': 26, 'frequency': 36.71, 'sharp': 'D1', 'flat': 'D1', 'isBlackKey': false},
    {'midiNoteNumber': 27, 'frequency': 38.89, 'sharp': 'D#1', 'flat': 'Eb1', 'isBlackKey': true},
    {'midiNoteNumber': 28, 'frequency': 41.2, 'sharp': 'E1', 'flat': 'E1', 'isBlackKey': false},
    {'midiNoteNumber': 29, 'frequency': 43.65, 'sharp': 'F1', 'flat': 'F1', 'isBlackKey': false},
    {'midiNoteNumber': 30, 'frequency': 46.25, 'sharp': 'F#1', 'flat': 'Gb1', 'isBlackKey': true},
    {'midiNoteNumber': 31, 'frequency': 49.0, 'sharp': 'G1', 'flat': 'G1', 'isBlackKey': false},
    {'midiNoteNumber': 32, 'frequency': 51.91, 'sharp': 'G#1', 'flat': 'Ab1', 'isBlackKey': true},
    {'midiNoteNumber': 33, 'frequency': 55.0, 'sharp': 'A1', 'flat': 'A1', 'isBlackKey': false},
    {'midiNoteNumber': 34, 'frequency': 58.27, 'sharp': 'A#1', 'flat': 'Bb1', 'isBlackKey': true},
    {'midiNoteNumber': 35, 'frequency': 61.74, 'sharp': 'B1', 'flat': 'B1', 'isBlackKey': false},
    {'midiNoteNumber': 36, 'frequency': 65.41, 'sharp': 'C2', 'flat': 'C2', 'isBlackKey': false},
    {'midiNoteNumber': 37, 'frequency': 69.3, 'sharp': 'C#2', 'flat': 'Db2', 'isBlackKey': true},
    {'midiNoteNumber': 38, 'frequency': 73.42, 'sharp': 'D2', 'flat': 'D2', 'isBlackKey': false},
    {'midiNoteNumber': 39, 'frequency': 77.78, 'sharp': 'D#2', 'flat': 'Eb2', 'isBlackKey': true},
    {'midiNoteNumber': 40, 'frequency': 82.41, 'sharp': 'E2', 'flat': 'E2', 'isBlackKey': false},
    {'midiNoteNumber': 41, 'frequency': 87.31, 'sharp': 'F2', 'flat': 'F2', 'isBlackKey': false},
    {'midiNoteNumber': 42, 'frequency': 92.5, 'sharp': 'F#2', 'flat': 'Gb2', 'isBlackKey': true},
    {'midiNoteNumber': 43, 'frequency': 98.0, 'sharp': 'G2', 'flat': 'G2', 'isBlackKey': false},
    {'midiNoteNumber': 44, 'frequency': 103.83, 'sharp': 'G#2', 'flat': 'Ab2', 'isBlackKey': true},
    {'midiNoteNumber': 45, 'frequency': 110.0, 'sharp': 'A2', 'flat': 'A2', 'isBlackKey': false},
    {'midiNoteNumber': 46, 'frequency': 116.54, 'sharp': 'A#2', 'flat': 'Bb2', 'isBlackKey': true},
    {'midiNoteNumber': 47, 'frequency': 123.47, 'sharp': 'B2', 'flat': 'B2', 'isBlackKey': false},
    {'midiNoteNumber': 48, 'frequency': 130.81, 'sharp': 'C3', 'flat': 'C3', 'isBlackKey': false},
    {'midiNoteNumber': 49, 'frequency': 138.59, 'sharp': 'C#3', 'flat': 'Db3', 'isBlackKey': true},
    {'midiNoteNumber': 50, 'frequency': 146.83, 'sharp': 'D3', 'flat': 'D3', 'isBlackKey': false},
    {'midiNoteNumber': 51, 'frequency': 155.56, 'sharp': 'D#3', 'flat': 'Eb3', 'isBlackKey': true},
    {'midiNoteNumber': 52, 'frequency': 164.81, 'sharp': 'E3', 'flat': 'E3', 'isBlackKey': false},
    {'midiNoteNumber': 53, 'frequency': 174.61, 'sharp': 'F3', 'flat': 'F3', 'isBlackKey': false},
    {'midiNoteNumber': 54, 'frequency': 185.0, 'sharp': 'F#3', 'flat': 'Gb3', 'isBlackKey': true},
    {'midiNoteNumber': 55, 'frequency': 196.0, 'sharp': 'G3', 'flat': 'G3', 'isBlackKey': false},
    {'midiNoteNumber': 56, 'frequency': 207.65, 'sharp': 'G#3', 'flat': 'Ab3', 'isBlackKey': true},
    {'midiNoteNumber': 57, 'frequency': 220.0, 'sharp': 'A3', 'flat': 'A3', 'isBlackKey': false},
    {'midiNoteNumber': 58, 'frequency': 233.08, 'sharp': 'A#3', 'flat': 'Bb3', 'isBlackKey': true},
    {'midiNoteNumber': 59, 'frequency': 246.94, 'sharp': 'B3', 'flat': 'B3', 'isBlackKey': false},
    {'midiNoteNumber': 60, 'frequency': 261.63, 'sharp': 'C4', 'flat': 'C4', 'isBlackKey': false},
    {'midiNoteNumber': 61, 'frequency': 277.18, 'sharp': 'C#4', 'flat': 'Db4', 'isBlackKey': true},
    {'midiNoteNumber': 62, 'frequency': 293.66, 'sharp': 'D4', 'flat': 'D4', 'isBlackKey': false},
    {'midiNoteNumber': 63, 'frequency': 311.13, 'sharp': 'D#4', 'flat': 'Eb4', 'isBlackKey': true},
    {'midiNoteNumber': 64, 'frequency': 329.63, 'sharp': 'E4', 'flat': 'E4', 'isBlackKey': false},
    {'midiNoteNumber': 65, 'frequency': 349.23, 'sharp': 'F4', 'flat': 'F4', 'isBlackKey': false},
    {'midiNoteNumber': 66, 'frequency': 369.99, 'sharp': 'F#4', 'flat': 'Gb4', 'isBlackKey': true},
    {'midiNoteNumber': 67, 'frequency': 392.0, 'sharp': 'G4', 'flat': 'G4', 'isBlackKey': false},
    {'midiNoteNumber': 68, 'frequency': 415.3, 'sharp': 'G#4', 'flat': 'Ab4', 'isBlackKey': true},
    {'midiNoteNumber': 69, 'frequency': 440.0, 'sharp': 'A4', 'flat': 'A4', 'isBlackKey': false},
    {'midiNoteNumber': 70, 'frequency': 466.16, 'sharp': 'A#4', 'flat': 'Bb4', 'isBlackKey': true},
    {'midiNoteNumber': 71, 'frequency': 493.88, 'sharp': 'B4', 'flat': 'B4', 'isBlackKey': false},
    {'midiNoteNumber': 72, 'frequency': 523.25, 'sharp': 'C5', 'flat': 'C5', 'isBlackKey': false},
    {'midiNoteNumber': 73, 'frequency': 554.37, 'sharp': 'C#5', 'flat': 'Db5', 'isBlackKey': true},
    {'midiNoteNumber': 74, 'frequency': 587.33, 'sharp': 'D5', 'flat': 'D5', 'isBlackKey': false},
    {'midiNoteNumber': 75, 'frequency': 622.25, 'sharp': 'D#5', 'flat': 'Eb5', 'isBlackKey': true},
    {'midiNoteNumber': 76, 'frequency': 659.26, 'sharp': 'E5', 'flat': 'E5', 'isBlackKey': false},
    {'midiNoteNumber': 77, 'frequency': 698.46, 'sharp': 'F5', 'flat': 'F5', 'isBlackKey': false},
    {'midiNoteNumber': 78, 'frequency': 739.99, 'sharp': 'F#5', 'flat': 'Gb5', 'isBlackKey': true},
    {'midiNoteNumber': 79, 'frequency': 783.99, 'sharp': 'G5', 'flat': 'G5', 'isBlackKey': false},
    {'midiNoteNumber': 80, 'frequency': 830.61, 'sharp': 'G#5', 'flat': 'Ab5', 'isBlackKey': true},
    {'midiNoteNumber': 81, 'frequency': 880.0, 'sharp': 'A5', 'flat': 'A5', 'isBlackKey': false},
    {'midiNoteNumber': 82, 'frequency': 932.33, 'sharp': 'A#5', 'flat': 'Bb5', 'isBlackKey': true},
    {'midiNoteNumber': 83, 'frequency': 987.77, 'sharp': 'B5', 'flat': 'B5', 'isBlackKey': false},
    {'midiNoteNumber': 84, 'frequency': 1046.5, 'sharp': 'C6', 'flat': 'C6', 'isBlackKey': false},
    {'midiNoteNumber': 85, 'frequency': 1108.73, 'sharp': 'C#6', 'flat': 'Db6', 'isBlackKey': true},
    {'midiNoteNumber': 86, 'frequency': 1174.66, 'sharp': 'D6', 'flat': 'D6', 'isBlackKey': false},
    {'midiNoteNumber': 87, 'frequency': 1244.51, 'sharp': 'D#6', 'flat': 'Eb6', 'isBlackKey': true},
    {'midiNoteNumber': 88, 'frequency': 1318.51, 'sharp': 'E6', 'flat': 'E6', 'isBlackKey': false},
    {'midiNoteNumber': 89, 'frequency': 1396.91, 'sharp': 'F6', 'flat': 'F6', 'isBlackKey': false},
    {'midiNoteNumber': 90, 'frequency': 1479.98, 'sharp': 'F#6', 'flat': 'Gb6', 'isBlackKey': true},
    {'midiNoteNumber': 91, 'frequency': 1567.98, 'sharp': 'G6', 'flat': 'G6', 'isBlackKey': false},
    {'midiNoteNumber': 92, 'frequency': 1661.22, 'sharp': 'G#6', 'flat': 'Ab6', 'isBlackKey': true},
    {'midiNoteNumber': 93, 'frequency': 1760.0, 'sharp': 'A6', 'flat': 'A6', 'isBlackKey': false},
    {'midiNoteNumber': 94, 'frequency': 1864.66, 'sharp': 'A#6', 'flat': 'Bb6', 'isBlackKey': true},
    {'midiNoteNumber': 95, 'frequency': 1975.53, 'sharp': 'B6', 'flat': 'B6', 'isBlackKey': false},
    {'midiNoteNumber': 96, 'frequency': 2093.0, 'sharp': 'C7', 'flat': 'C7', 'isBlackKey': false},
    {'midiNoteNumber': 97, 'frequency': 2217.46, 'sharp': 'C#7', 'flat': 'Db7', 'isBlackKey': true},
    {'midiNoteNumber': 98, 'frequency': 2349.32, 'sharp': 'D7', 'flat': 'D7', 'isBlackKey': false},
    {'midiNoteNumber': 99, 'frequency': 2489.02, 'sharp': 'D#7', 'flat': 'Eb7', 'isBlackKey': true},
    {'midiNoteNumber': 100, 'frequency': 2637.02, 'sharp': 'E7', 'flat': 'E7', 'isBlackKey': false},
    {'midiNoteNumber': 101, 'frequency': 2793.83, 'sharp': 'F7', 'flat': 'F7', 'isBlackKey': false},
    {'midiNoteNumber': 102, 'frequency': 2959.96, 'sharp': 'F#7', 'flat': 'Gb7', 'isBlackKey': true},
    {'midiNoteNumber': 103, 'frequency': 3135.96, 'sharp': 'G7', 'flat': 'G7', 'isBlackKey': false},
    {'midiNoteNumber': 104, 'frequency': 3322.44, 'sharp': 'G#7', 'flat': 'Ab7', 'isBlackKey': true},
    {'midiNoteNumber': 105, 'frequency': 3520.0, 'sharp': 'A7', 'flat': 'A7', 'isBlackKey': false},
    {'midiNoteNumber': 106, 'frequency': 3729.31, 'sharp': 'A#7', 'flat': 'Bb7', 'isBlackKey': true},
    {'midiNoteNumber': 107, 'frequency': 3951.07, 'sharp': 'B7', 'flat': 'B7', 'isBlackKey': false},
    {'midiNoteNumber': 108, 'frequency': 4186.01, 'sharp': 'C8', 'flat': 'C8', 'isBlackKey': false},
    {'midiNoteNumber': 109, 'frequency': 4434.92, 'sharp': 'C#8', 'flat': 'Db8', 'isBlackKey': true},
    {'midiNoteNumber': 110, 'frequency': 4698.64, 'sharp': 'D8', 'flat': 'D8', 'isBlackKey': false},
    {'midiNoteNumber': 111, 'frequency': 4978.03, 'sharp': 'D#8', 'flat': 'Eb8', 'isBlackKey': true},
    {'midiNoteNumber': 112, 'frequency': 5274.04, 'sharp': 'E8', 'flat': 'E8', 'isBlackKey': false},
    {'midiNoteNumber': 113, 'frequency': 5587.65, 'sharp': 'F8', 'flat': 'F8', 'isBlackKey': false},
    {'midiNoteNumber': 114, 'frequency': 5919.91, 'sharp': 'F#8', 'flat': 'Gb8', 'isBlackKey': true},
    {'midiNoteNumber': 115, 'frequency': 6271.93, 'sharp': 'G8', 'flat': 'G8', 'isBlackKey': false},
    {'midiNoteNumber': 116, 'frequency': 6644.88, 'sharp': 'G#8', 'flat': 'Ab8', 'isBlackKey': true},
    {'midiNoteNumber': 117, 'frequency': 7040.0, 'sharp': 'A8', 'flat': 'A8', 'isBlackKey': false},
    {'midiNoteNumber': 118, 'frequency': 7458.62, 'sharp': 'A#8', 'flat': 'Bb8', 'isBlackKey': true},
    {'midiNoteNumber': 119, 'frequency': 7902.13, 'sharp': 'B8', 'flat': 'B8', 'isBlackKey': false},
    {'midiNoteNumber': 120, 'frequency': 8372.02, 'sharp': 'C9', 'flat': 'C9', 'isBlackKey': false},
    {'midiNoteNumber': 121, 'frequency': 8869.84, 'sharp': 'C#9', 'flat': 'Db9', 'isBlackKey': true},
    {'midiNoteNumber': 122, 'frequency': 9397.27, 'sharp': 'D9', 'flat': 'D9', 'isBlackKey': false},
    {'midiNoteNumber': 123, 'frequency': 9956.06, 'sharp': 'D#9', 'flat': 'Eb9', 'isBlackKey': true},
    {'midiNoteNumber': 124, 'frequency': 10548.08, 'sharp': 'E9', 'flat': 'E9', 'isBlackKey': false},
    {'midiNoteNumber': 125, 'frequency': 11175.3, 'sharp': 'F9', 'flat': 'F9', 'isBlackKey': false},
    {'midiNoteNumber': 126, 'frequency': 11839.82, 'sharp': 'F#9', 'flat': 'Gb9', 'isBlackKey': true},
    {'midiNoteNumber': 127, 'frequency': 12543.85, 'sharp': 'G9', 'flat': 'G9', 'isBlackKey': false},
];

export default MIDInotes;