/**
 * Created by sravankumarganji on 9/5/17.
 */

import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


function Chart(props) {
    return (
        <Sparklines height={50} width={100} data={props.data}>
            <SparklinesLine color={props.color} />
        </Sparklines>
    );
}


export default Chart;
