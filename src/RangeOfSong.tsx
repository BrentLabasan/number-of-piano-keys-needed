import React from 'react';
import RangeBoundary from './RangeBoundary';
import { SelectChangeEvent } from '@mui/material';

import './RangeOfSong.scss';

type RangeOfSongProps = {
    // boundaryLow: string;
    boundaryLow: string;
    boundaryHigh: string;
    // handlePianoBoundaryChangeLow: SelectChangeEvent;
    // handlePianoBoundaryChangeLow: SelectChangeEvent<HTMLInputElement>;
    // handlePianoBoundaryChangeLow: ChangeEvent<HTMLInputElement >;
    handlePianoBoundaryChangeLow: (event: SelectChangeEvent) => void;
    // handlePianoBoundaryChangeHigh: Function;
    handlePianoBoundaryChangeHigh: (event: SelectChangeEvent) => void;
}


export default function RangeOfSong({ boundaryLow, boundaryHigh, handlePianoBoundaryChangeLow, handlePianoBoundaryChangeHigh }: RangeOfSongProps) {
    return (
        <section>
            Select Range Of Song
            <br /><br />
            <RangeBoundary
                rangeBoundaryType={'song'}

                boundaryLow={boundaryLow}
                boundaryHigh={boundaryHigh}
                handleChangeLow={handlePianoBoundaryChangeLow}
                handleChangeHigh={handlePianoBoundaryChangeHigh}

            />
            <br />
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