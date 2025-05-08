import React, { ChangeEvent } from 'react';
import RangeBoundary from './RangeBoundary';
import { Button, SelectChangeEvent } from '@mui/material';
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
            <h2>
                Range Of Piano
            </h2>

            <RangeBoundary rangeBoundaryType={'piano'}
                boundaryLow={boundaryLow}
                boundaryHigh={boundaryHigh}
                handleChangeLow={handlePianoBoundaryChangeLow}
                handleChangeHigh={handlePianoBoundaryChangeHigh}
            />

            <div>
                <h3>
                    bottom note
                </h3>
                <Button variant="outlined">C1</Button>
                <Button variant="outlined">C2</Button>
                <Button variant="outlined">C3</Button>
                <Button variant="outlined">C4</Button>
                <Button variant="outlined">C5</Button>
            </div>

            <div>
                <h3>
                    keyboard length
                </h3>
                <Button variant="outlined">25</Button>
                <Button variant="outlined">61</Button>
                <Button variant="outlined">73</Button>
                <Button variant="outlined">76</Button>
                <Button variant="outlined">88</Button>
            </div>


        </section>
    );
}