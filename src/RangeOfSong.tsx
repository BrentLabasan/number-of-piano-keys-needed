import React from 'react';

import RangeBoundary from './RangeBoundary';

import './RangeOfSong.scss';

export default function RangeOfSong() {
    return (
        <section>
            Select Range Of Song
            <br /><br />
            <RangeBoundary rangeBoundaryType={'song'} />
            <br/>
            -OR-
            Upload a MIDI file.
            {/* BOOKMARK button or space to upload MIDI file
                code to find lowest and highest notes in MID file
            */}
            <br />
            <br />
            <hr />
            STATUS: Song fits into current piano range.
        </section>
    );
}