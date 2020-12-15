import React from "react";
import {useHistory} from 'react-router-dom'
import {leftarrow} from '../../assets/'
import './style.scss'

export default function MeetDetail({
                                       name, location, link, mWith, sDate, eDate,
                                       setName, setLocation, setLink, setmWith, setsDate, seteDate,
                                       onSave, id, ...props
                                   }) {

    const history = useHistory();
    const handleGoBack = () => {
        history.push("/")
    }

    return (
        <div className="addorupdate">
            <div className="head">
                <div onClick={handleGoBack} className="backArrow">
                    <img src={leftarrow} alt="Go Back"/>
                </div>
                <p>{id ? "Update a Meeting" : "Create a Meeting"}</p>
            </div>
            <form
                onSubmit={onSave}
                className="body">
                <input value={name} onChange={(e) => setName(e.target.value)} className="name" type="text"
                       placeholder="Meet Name" required/>
                <div className="labels">
                    <label>Meet Start</label>
                    <label>Meet End</label>
                </div>
                <div className="datepickers">
                    <input value={sDate} onChange={e => setsDate(e.target.value)} type="datetime-local"/>
                    <input value={eDate} onChange={e => seteDate(e.target.value)} type="datetime-local"/>
                </div>
                <div className="details">
                    <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Meet Location"
                           type="text"/>
                    <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Meet Link" type="text"/>
                    <input value={mWith} onChange={(e) => setmWith(e.target.value)} placeholder="Meet With?"
                           type="text"/>
                </div>
                <div className="buttons">
                    <button type="reset" onClick={() => {
                        setName("");
                        setLocation("");
                        setLink("");
                        setmWith("");
                        setsDate("");
                        seteDate("");

                    }}>Reset
                    </button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}
