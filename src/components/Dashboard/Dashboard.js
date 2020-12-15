/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {SingleMeet} from '../';
import {getMeetsApi, removeMeet} from "../../redux/actions/meetActions";

const Dashboard = () => {
    const meetListSelector = useSelector((state) => state.meetList)
    const dispatch = useDispatch()

    const getMeetList = async () => await dispatch(getMeetsApi())
    const removeMeetList = async (m) => await dispatch(removeMeet(m))

    useEffect(() => {
        getMeetList()
    }, [])

    const handleRemove = (meet) => {
        removeMeetList(meet).then(() => {
            getMeetList()
        })

    }
    return (
        <>
            {/*TODO*/}
            <div className="fragment">
                {
                    meetListSelector.map(t => {
                        return <SingleMeet
                            deleteClick={() => handleRemove(t)}
                            key={t.id}
                            id={t.id}
                            name={t.name}
                            meetStartDate={t.meetStartDate}
                            meetEndDate={t.meetEndDate}
                            meetWith={t.meetWith}
                            meetLocation={t.meetLocation}
                            meetLink={t.meetLink}
                            state={t}
                        />
                    })
                }
            </div>
        </>
    )
}
export default Dashboard
