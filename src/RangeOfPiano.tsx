import React from 'react';
import RangeBoundary from './RangeBoundary';

export default function RangeOfPiano() {
    return (
        <section>
            Select Range Of Piano
            <br /><br />
            <RangeBoundary rangeBoundaryType={'piano'}/>
        </section>
    );
}