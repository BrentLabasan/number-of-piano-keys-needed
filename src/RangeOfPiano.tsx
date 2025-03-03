import React, { ChangeEvent } from 'react';
import RangeBoundary from './RangeBoundary';
import { SelectChangeEvent } from '@mui/material';
import './RangeOfPiano.scss';

type RangeOfPianoProps = {
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

export default function RangeOfPiano({ boundaryLow, boundaryHigh, handlePianoBoundaryChangeLow, handlePianoBoundaryChangeHigh }: RangeOfPianoProps) {
    return (
        <section className="parentContainer_rangeOfPiano">
            Select Range Of Piano
            <br /><br />
            <RangeBoundary rangeBoundaryType={'piano'}
                boundaryLow={boundaryLow}
                boundaryHigh={boundaryHigh}
                handleChangeLow={handlePianoBoundaryChangeLow}
                handleChangeHigh={handlePianoBoundaryChangeHigh}
            />
        </section>
    );
}