/**
 * Created by sravankumarganji on 9/4/17.
 */
import { FETCH_WEATHER} from '../actions/actions'

export default function (state=[] , action) {
switch(action.type){
    case FETCH_WEATHER :
        // console.log('data : ',action.payload)
        return [action.payload.data,...state]
    }
    return state
    }