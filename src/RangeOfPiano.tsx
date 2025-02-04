import React from 'react';
import RangeBoundary from './RangeBoundary';

export default function RangeOfPiano() {
    return (
        <section>
            RangeOfPiano
            <br /><br />
            <RangeBoundary rangeBoundaryType={'song'}/>
        </section>
    );
}