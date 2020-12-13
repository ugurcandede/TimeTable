import React from 'react'
import './style.scss'
import {edit, play, remove} from '../../assets/'
import moment from 'moment'
import {Link} from "react-router-dom";


export default function SingleMeet({
                                       id,
                                       name,
                                       meetStartDate,
                                       meetEndDate,
                                       meetWith,
                                       meetLocation,
                                       meetLink,
                                       deleteClick,
                                   }) {

    const parseDate = (date) => {
        return date.split("T")[1]
    }

    return (
        <div className="meet">
            <img src={play} className="joinMeet" alt="Join Meet"
                 onClick={() => window.open("https://" + meetLink, "_blank")}/>
            <div className="meetDetail">
                <h2>{name}</h2>
                <p>{moment(meetStartDate, 'YYYY-MM-DD hh:mm').fromNow()}</p>
                <p>{parseDate(meetStartDate)} - {parseDate(meetEndDate)} Saatleri Arası</p>
                <p>{meetWith}</p>
            </div>
            <div className="meetInfo">
                <p>{meetLocation}</p>
                <p>{meetLink}</p>
            </div>
            <div className="meetHover">
                <Link to={"/meet/" + id}>
                    <img src={edit} alt="Edit Meet"/>
                </Link>
                <img src={remove} alt="Remove Meet" onClick={() => deleteClick()}/>
            </div>
        </div>
    )
}
