/* eslint-disable react-hooks/exhaustive-deps */

import {useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../../redux/actions/themeActions";
import {DARK, LIGHT} from "../../redux/reducers/initialState";
import {name} from "../../../package.json";

export default function ThemeDemo() {
    const theme = useSelector((state) => state.theme)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        if (theme.name === "DARK") {
            changeDark();
        } else if (theme.name !== "DARK") {
            changeLight();
        }
    }, [changeDark, changeLight, theme.name]);

    function changeDark() {
        return dispatch(changeTheme(DARK));
    }

    function changeLight() {
        return dispatch(changeTheme(LIGHT));
    }

    return (
        <>
            {/*TODO*/}
            <p style={{
                borderRadius: 10,
                padding: 15,
                color: theme.color,
                backgroundColor: theme.backgroundColor,
                fontSize: 55
            }}
            >{name} </p>
            <div style={{
                backgroundColor: theme.backgroundColor,
                padding: 20,
                cursor: 'pointer',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                outline: 'none'
            }}
                 onClick={() => theme.name === "LIGHT" ? changeDark() : changeLight()}
            ></div>
        </>
    )
}
