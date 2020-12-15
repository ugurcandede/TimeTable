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
            {meetLink
                ? (<img src={play}
                        className="joinMeet"
                        alt="Join Meet"
                        onClick={() => window.open("https://" + meetLink, "_blank")}/>)
                : null}

            <div className="meetDetail">
                <h2>{name}</h2>
                {meetStartDate
                    ? (<p>{moment(meetStartDate, 'YYYY-MM-DD hh:mm').fromNow()}</p>)
                    : null}
                {meetEndDate
                    ? (<p>{parseDate(meetStartDate)} - {parseDate(meetEndDate)} Saatleri Arası</p>)
                    : null}
                {meetWith
                    ? (<p>{meetWith}</p>)
                    : null}

            </div>
            <div className="meetInfo">
                {meetLocation ? (<p>{meetLocation}</p>) : null}
                {meetLink ? (<p>{meetLink}</p>) : null}
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
