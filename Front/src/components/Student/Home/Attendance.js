import React from 'react';
import './Attendance.css';
import Paper from '@material-ui/core/Paper';

import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';

export default function Attendance() {
    const data = [
        { argument:'Present', value:4 },
        { argument:'Absent', value:2 }
      ];
   
    return (
        <div className="attendance">
           <div style = {{ backgroundColor: "#F9F9F9", height: "60px", alignItems: "center", width: "100%" }}>
                <div style = {{ padding: "10px", alignItems: "center",display:'flex' }}>
                    <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "20px", float: "left",marginRight:'30px' }}>Attendance</span>
                    <div style = {{ float: "right", alignItems: "center", display: "inline-flex" }}>
                        <button className="weekly" style = {{ display: "inline-flex", alignItems: "center"}}>Weekly</button>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <button className="weekly">Monthly</button>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <button className="weekly">Overview</button>
                    </div>
                </div>
            </div>
            <div style = {{ padding: "15px" }}>
                <Chart
                data={data}
                height={280}
                >
                <PieSeries valueField="value" 
                    argumentField="argument" 
                    innerRadius={0.6} />
                </Chart>
            </div>
        </div>
    )
}