import * as actionTypes from "./actionTypes";

let URL = "https://5fd67902ea55c400160420ba.mockapi.io/meets/"
// let URL = "http://192.168.1.192:2500/meets/"

const createMeetSuccess = (meet) => {
    return {type: actionTypes.CREATE_MEET, payload: meet}
}

const updateMeetSuccess = (meet) => {
    return {type: actionTypes.UPDATE_MEET, payload: meet}
}

const removeMeetSuccess = (meet) => {
    return {type: actionTypes.REMOVE_MEET_SUCCESS, payload: meet}
}

const getMeetSuccess = (meets) => {
    return {type: actionTypes.GET_MEET_SUCCESS, payload: meets};
};


export const getMeetsApi = (meetDay) => {
    return async function (dispatch) {
        if (meetDay) {
            URL = URL + "?meetDay=" + meetDay;
        }
        try {
            const response = await fetch(URL);
            const result = await response.json();
            return dispatch(getMeetSuccess(result));
        } catch (e) {
            console.error(e)
        }
    };
}

function saveMeetApi(meet) {
    return fetch(URL + (meet.id || ""), {
        method: meet.id ? "PUT" : "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(meet)
    })
        .then(res => res.json())
        .catch(e => console.log(e));
}

export function saveOrUpdateMeet(meet) {
    return function (dispatch) {
        return saveMeetApi(meet)
            .then(savedProduct => {
                meet.id
                    ? dispatch(updateMeetSuccess(savedProduct))
                    : dispatch(createMeetSuccess(savedProduct));
            })
            .catch(error => {
                throw error;
            });
    };
}

export function removeMeet(meet) {
    return async function (dispatch) {
        const res = await fetch(URL + meet.id, {
            method: "DELETE",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(meet)
        });
        const rMeet = await res.json();
        dispatch(removeMeetSuccess(rMeet));
    }
}
