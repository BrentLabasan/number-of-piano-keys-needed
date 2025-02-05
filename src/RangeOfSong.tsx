import React from 'react';

import RangeBoundary from './RangeBoundary';

export default function RangeOfSong() {
    return (
        <section>
            Select Range Of Song
            <br /><br />
            <RangeBoundary rangeBoundaryType={'piano'} />
        </section>
    );
}