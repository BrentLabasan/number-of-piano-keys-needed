import './PianoKey.scss';
import note from './INote';

import Button from '@mui/material/Button';

// BOOKMARK draw white and black keys
// space out black keys
// denote middle C

// export default function PianoKey({ midiNumber, noteName }: note) {

export default function PianoKey({ midi, frequency, sharp, flat,  isBlackKey}: note) {
    const cssColor = isBlackKey ? 'black' : 'white';
    
    return (
        <div
            className={"pianoKey " + cssColor}
            >
            {String(midi)}
            <br />
            {sharp}
        </div>
        // <Button
        //     className="pianoKey"
        //     variant="outlined">
        //     {String(midi)}
        //     <br />
        //     {sharp}
        // </Button>
    );
}