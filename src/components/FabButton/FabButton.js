import React from "react";
import './style.scss'
import {add} from '../../assets'
import {Link} from 'react-router-dom'

export default function FabButton() {

    return (
        <Link to="/meet" className="fab">
            <img src={add} alt="Fab Button"/>
        </Link>
    )
}
