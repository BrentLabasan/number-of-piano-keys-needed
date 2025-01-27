import './PianoKey.scss';
import note from './INote';

export default function PianoKey({midiNumber, noteName}: note) {
    return(
        <div className="pianoKey">
            {String(midiNumber)}
            <br />
            {noteName}
        </div>
    );
}