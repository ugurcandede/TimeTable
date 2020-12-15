import {combineReducers} from 'redux'

import meetListReducer from './meetListReducer'
import saveMeetReducer from "./saveMeetReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    meetList: meetListReducer,
    saveMeet: saveMeetReducer,
    theme: themeReducer
});

export default rootReducer;
