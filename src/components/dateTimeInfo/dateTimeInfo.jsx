import React from 'react'
import ClockFunction from '../../classes/ClockFunction/ClockFunction'
import DateFunction from '../../classes/DateFunction/DateFunction'
import Quote from '../Quote/quote'

const dateTimeInfo = () => {
    return (
        <div className="DateTimeContainer">
            <ClockFunction className="clock"/>
            <DateFunction className="date"/>
            <Quote />
        </div>
    )
}

export default dateTimeInfo
