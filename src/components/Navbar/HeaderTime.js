import React from 'react'
import 'moment/locale/tr';
import moment from 'moment';
import './style.scss'

moment.locale('tr')

export default function HeaderTime() {

    return (
        <div className="infos">

            <span id="time" className="time">{moment().format('HH:mm')}</span>
            <span className="dot">•</span>
            <span id="date" className="date">{moment().format('ddd, D MMMM ')}</span>
            {/* <span className="date">Per, 8 Ekim</span> */}
        </div>
    )
}
