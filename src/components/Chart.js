/**
 * Created by sravankumarganji on 9/5/17.
 */

import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine,SparklinesSpots} from 'react-sparklines';
import _ from 'lodash';

function avg(data) {
    return _.round(_.sum(data)/data.length)
}

function Chart(props) {
    return (
        <div>
            <Sparklines data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type={'avg'}/>
                <SparklinesSpots />
            </Sparklines>
            <div>
                {"avg:"+avg(props.data) + ",max:"+_.round(_.max(props.data)) +",min:"+_.round(_.min(props.data))}
            </div>
        </div>
    );
}
export default Chart;
