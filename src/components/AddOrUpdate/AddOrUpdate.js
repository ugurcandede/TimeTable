import React, {useEffect, useState} from 'react'
import MeetDetail from "./MeetDetail";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {saveOrUpdateMeet} from "../../redux/actions/meetActions";

export default function AddOrUpdate({...props}) {
    const history = useHistory()
    const dispatch = useDispatch()
    const saveOrUpdate = async (m) => await dispatch(saveOrUpdateMeet(m))

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [link, setLink] = useState("")
    const [mWith, setmWith] = useState("")
    const [sDate, setsDate] = useState("")
    const [eDate, seteDate] = useState("")

    const regx = props.location.pathname.match(/\d+/g)
    const meetListSelector = useSelector((state) => state.meetList)
    const meet = getProductById(meetListSelector, regx);

    useEffect(() => {
        if (meet) {
            setId(meet.id);
            setName(meet.name);
            setsDate(meet.meetStartDate)
            seteDate(meet.meetEndDate)
            setLocation(meet.meetLocation)
            setLink(meet.meetLink)
            setmWith(meet.meetWith)
        }
    }, [meet])

    const handleSave = (e) => {
        e.preventDefault();
        saveOrUpdate({
            "id": id,
            "name": name,
            "meetLocation": location,
            "meetLink": link,
            "meetWith": mWith,
            "meetStartDate": sDate,
            "meetEndDate": eDate,

        }).then(() => history.push("/"))
    }

    return (
        <MeetDetail
            id={id}
            name={name}
            link={link}
            location={location}
            mWith={mWith}
            sDate={sDate}
            eDate={eDate}

            setName={setName}
            setLink={setLink}
            setLocation={setLocation}
            setmWith={setmWith}

            setsDate={setsDate}
            seteDate={seteDate}

            onSave={handleSave}
        />
    )
}

export function getProductById(meets, meetId) {
    // eslint-disable-next-line eqeqeq
    return meets.find(m => m.id == meetId) || null;
}

