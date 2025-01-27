import './PianoKey.scss';
import note from './INote';

import Button from '@mui/material/Button';

export default function PianoKey({ midiNumber, noteName }: note) {
    return (
        <Button
            // className="pianoKey"
            variant="outlined">
            {String(midiNumber)}
            <br />
            {noteName}
        </Button>
    );
}