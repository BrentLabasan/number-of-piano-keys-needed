import React, { ChangeEvent } from 'react';
import RangeBoundary from './RangeBoundary';
import { Button, Divider, Grid2, SelectChangeEvent } from '@mui/material';
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
    handlePianoBoundaryChangeLow_fromButton: Function;
    handlePianoBoundaryChangeHigh_fromButton: Function;
}

export default function RangeOfPiano({ boundaryLow, boundaryHigh, handlePianoBoundaryChangeLow, handlePianoBoundaryChangeHigh, handlePianoBoundaryChangeLow_fromButton, handlePianoBoundaryChangeHigh_fromButton }: RangeOfPianoProps) {
    
    function handleBottomKeyChange(bottomKey: string) {
        // handlePianoBoundaryChangeLow(bottomKey);
    }
    
    return (
        <section className="parentContainer_rangeOfPiano">
            <h2>
                Range Of Piano
            </h2>

            <Divider>
                Select Range
            </Divider>

            <br />

            <RangeBoundary rangeBoundaryType={'piano'}
                boundaryLow={boundaryLow}
                boundaryHigh={boundaryHigh}
                handleChangeLow={handlePianoBoundaryChangeLow}
                handleChangeHigh={handlePianoBoundaryChangeHigh}
            />

            <br />

            Number of Keys: {parseInt(boundaryHigh) - parseInt(boundaryLow) + 1}

            <br />
            <br />

            <Divider>
                Shortcuts
            </Divider>

            <Grid2 container spacing={2}>
                <Grid2 size={6}>
                    <h3>
                        bottom key
                    </h3>
                    {/* TODO do a CSS transition on the STATUSes in the right side, as a visual affordance */}
                    <Button variant="outlined" onClick={() => handlePianoBoundaryChangeLow_fromButton('21')}>A0</Button>
                    <Button variant="outlined" onClick={() => handlePianoBoundaryChangeLow_fromButton('24')}>C1</Button>
                    <Button variant="outlined" onClick={() => handlePianoBoundaryChangeLow_fromButton('36')}>C2</Button>
                </Grid2>

                {/* // BOOKMARK continue wiring this up */}
                <Grid2 size={6}>
                    <h3>
                        top key
                    </h3>
                    <Button variant="outlined" onClick={() => handlePianoBoundaryChangeHigh_fromButton('72')}>C5</Button>
                    <Button variant="outlined" onClick={() => handlePianoBoundaryChangeHigh_fromButton('84')}>C6</Button>
                    <Button variant="outlined" onClick={() => handlePianoBoundaryChangeHigh_fromButton('96')}>C7</Button>
                </Grid2>
            </Grid2>


            {/* //TODO is this idea worth doing? */}
            {/* <div>
                TODO put tooltip here explaining that it adds from the bottom key 
                <h3>
                    keyboard length
                </h3>
                <Button variant="outlined">25</Button>
                <Button variant="outlined">61</Button>
                <Button variant="outlined">73</Button>
                <Button variant="outlined">76</Button>
                <Button variant="outlined">88</Button>
            </div> */}


        </section>
    );
}