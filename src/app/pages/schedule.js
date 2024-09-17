"use client"
import React, {Fragment, useEffect, useState} from "react";

import Calendar from "./calendar";

export default function Schedule() {
    const [calendar_date, setCalendarDate] = useState(new Date())
    
    useEffect(() => {
        loadCalendar()
    }, [calendar_date])

    const setDateFromDatepicker = (date) => {
        var today = new Date(date)
        var utcDate = new Date(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(),  today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds());
        setCalendarDate(utcDate)
    }
    
    const formatDate = () => {
        var date = new Date(calendar_date).toISOString().substr(0, 10)
        return date
    }

    const loadCalendar = () => {
        return <Calendar calendar_date={calendar_date}/>
    }

    return (
        <Fragment>
        <div>Schedule</div>

        <input type="date" value={formatDate()} onChange={(e) => setDateFromDatepicker(e.target.value)}></input>
        
        {loadCalendar()}
        </Fragment>
    )
}