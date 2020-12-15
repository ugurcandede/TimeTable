import * as actionTypes from "./actionTypes";

const changeThemeSuccess = (theme) => {
    return {type: actionTypes.SWITCH_THEME_SUCCESS, payload: theme};
};

export const changeTheme = (theme) => {
    return (dispatch) => {
        dispatch(changeThemeSuccess(theme));
    };
}
