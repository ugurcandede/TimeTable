import {combineReducers} from 'redux'

import meetListReducer from './meetListReducer'
import saveMeetReducer from "./saveMeetReducer";

const rootReducer = combineReducers({
    meetList: meetListReducer,
    saveMeet: saveMeetReducer
});

export default rootReducer;
