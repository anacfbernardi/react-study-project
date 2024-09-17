"use client"
import React, { Fragment, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './style.css';


export default function Calendar({calendar_date, schedule}) {
    const array_of_weekdays = [
        "Sun",
        "Mon", 
        "Tus", 
        "Wed",
        "Thu", 
        "Fri", 
        "Sat"
    ]
    const [numberOfLines, setNumberOfLines] = useState(0);
    const [firstDayweekOfMonth, setFirstDayweekOfMonth] = useState(0);

    useEffect(() => {
        getNumberOfLines()
        printLines()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [calendar_date]);

    const getNumberOfLines = () => {
        const first_day_of_month = new Date(calendar_date.getFullYear(), calendar_date.getMonth(), 1)
        const last_day_of_month = new Date(calendar_date.getFullYear(), calendar_date.getMonth()+1, 0)

        const first_dayweek_of_month = first_day_of_month.getDay()
        const number_of_days_month = last_day_of_month.getDate()

        var numberOfL = (number_of_days_month + first_dayweek_of_month) / 7
        setNumberOfLines(numberOfL)
        setFirstDayweekOfMonth(first_dayweek_of_month)
    }

    const printLines = () => {
        
        return (
            Array.from({length: numberOfLines+1}, (_, index) => index).map((i) => {
                return (<tr key={i}>{printLine(i)}</tr>)
            })
        )
    }

    const printLine = (line) => {
        var currentDay
        if (line == 0) {
            currentDay = 1
        } else if (firstDayweekOfMonth == 0) {
                currentDay = (line*7) + 1
        } else {
            currentDay = (line * 7) - (firstDayweekOfMonth - 1)
        }

        return (array_of_weekdays.map((_, index) => {
            var currentDayNow = new Date(calendar_date.getFullYear(), calendar_date.getMonth(), currentDay)
            
            if (currentDayNow.getDay() == index && currentDayNow.getMonth() == calendar_date.getMonth()) {
                currentDay = currentDay + 1
                return (<td key={index}>{array_of_weekdays[currentDayNow.getDay()]} - {currentDayNow.getDate()}</td>)
            }

            return (<td key={index}></td>)
        }))
    }
    
    return (
        <Fragment>
            <div>
                Calendar
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>     
                            <th>Tus</th>     
                            <th>Wed</th>    
                            <th>Thu</th>     
                            <th>Fri</th>     
                            <th>Sat</th>   
                        </tr> 
                    </thead>
                    <tbody>
                        {printLines()}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}


Calendar.propTypes = {
    calendar_date: PropTypes.Date,
    schedule: PropTypes.array,
};