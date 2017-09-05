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
                <h6>Avg <span className="badge">{avg(props.data)}</span> Max <span className="badge">{_.round(_.max(props.data))}</span>Min <span className="badge">{_.round(_.min(props.data))}</span></h6>
            </div>
        </div>
    );
}
export default Chart;
