import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

const meetListReducer = (state = initialState.meets, action) => {
    switch (action.type) {
        case actionTypes.GET_MEET_SUCCESS:
            return action.payload
        default:
            return state;
    }
}
export default meetListReducer
