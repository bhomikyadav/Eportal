import React from 'react';
import './AcademicCalendar.css';
import {MyMonthlyCalendar} from './Calendar'
import MonthSelect from './MonthDropdown'
import YearSelect from './YearDropdown'

export default function AcademicCalendar() {
    return (
        <div className="acdClndr">
            <div style = {{ backgroundColor: "#F9F9F9", height: "60px", alignItems: "center", width: "100%" }}>
                <div style = {{ padding: "15px", alignItems: "center" }}>
                    <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "20px", float: "left" }}>Academic Calendar</span>
                    <div style = {{ float: "right", display: 'inline-flex' }}>
                        <MonthSelect/>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <YearSelect/>
                    </div>
                </div>
            </div>
            <div style = {{ padding: "15px" }}>
                
            </div>
        </div>
    )
}