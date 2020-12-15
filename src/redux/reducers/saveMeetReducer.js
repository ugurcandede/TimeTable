import * as actionTypes from '../actions/actionTypes'
import initialState from "./initialState";

const saveMeetReducer = (state = initialState.savedProduct, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_MEET_SUCCESS:
            return action.payload;
        case actionTypes.CREATE_MEET_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

export default saveMeetReducer
