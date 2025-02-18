import './PianoKey.scss';
import note from './INote';

import Button from '@mui/material/Button';

// export default function PianoKey({ midiNumber, noteName }: note) {
export default function PianoKey({ midi, frequency, sharp, flat,  isBlackKey}: note) {
    return (
        <Button
            // className="pianoKey"
            variant="outlined">
            {String(midi)}
            <br />
            {sharp}
        </Button>
    );
}