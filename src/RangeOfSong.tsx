import React from 'react';
import RangeBoundary from './RangeBoundary';
import { Box, FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';

import './RangeOfSong.scss';
import './RangeBoundary.scss'

import { renderMenuItems } from './RangeBoundary';

type RangeOfSongProps = {
    key: number;
    index: number;
    // boundaryLow: string;
    boundaryLow: string;
    boundaryHigh: string;
    // handlePianoBoundaryChangeLow: SelectChangeEvent;
    // handlePianoBoundaryChangeLow: SelectChangeEvent<HTMLInputElement>;
    // handlePianoBoundaryChangeLow: ChangeEvent<HTMLInputElement >;
    handleChangeTo_arrayRangeOfSongs: (
        event: SelectChangeEvent,
        indexOfComponentToChange: number,
        areModifyingLow: boolean) => void;
    // handlePianoBoundaryChangeHigh: Function;
    // handleSongBoundaryChangeHigh: (event: SelectChangeEvent, indexOfComponentToChange: number, areModifyingLow: boolean) => void;
}


export default function RangeOfSong({ key, index, boundaryLow, boundaryHigh, handleChangeTo_arrayRangeOfSongs }: RangeOfSongProps) {
    return (
        <section>
            Select Range Of Song {index} a {boundaryLow} b
            <br /><br />


            <div className="row">
                <div className="column">
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Lowest Key of Song 🎼</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={boundaryLow}
                                label="Age"
                                onChange={(e) => handleChangeTo_arrayRangeOfSongs(e, index, true)}
                            >
                                {renderMenuItems()}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="column">
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Highest Key of Song 🎼</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={boundaryHigh}
                                label="Age"
                                onChange={(e) => handleChangeTo_arrayRangeOfSongs(e, index, false)}
                            >
                                {renderMenuItems()}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>

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