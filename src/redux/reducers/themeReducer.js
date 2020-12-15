import initialState from "./initialState";
import {SWITCH_THEME_SUCCESS} from "../actions/actionTypes";

const themeReducer = (state = initialState.theme, action) => {
    switch (action.type) {
        case SWITCH_THEME_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default themeReducer
