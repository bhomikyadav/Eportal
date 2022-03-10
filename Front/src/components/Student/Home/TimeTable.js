import React from 'react';
import './TimeTable.css';
import SyncRoundedIcon from '@mui/icons-material/SyncRounded';
import './Home.css';

export default function TimeTable() {
    return (
        <div className="timetable" >
            <div style = {{ backgroundColor: "#F9F9F9", height: "60px", alignItems: "center", width: "100%" }}>
                <div style = {{ padding: "15px", alignItems: "center" }}>
                    <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "20px" }}>Timetable</span>
                    <div style = {{ float: "right", backgroundColor: "#E0DDDD", borderRadius: "5px", boxShadow: "0px 1px 5px rgba(33, 33, 33, 0.48)", height: "30px", width: "122px", alignItems: "center", display: "inline-flex" }}>
                        <span style = {{ display: "inline-flex", alignItems: "center", margin: "auto" }}>Today's Date</span>
                    </div>
                </div>
            </div>
            <div style = {{ padding: "15px" }}>
                <div style = {{display:'flex', border: "1px solid #DBDBDB", backgroundColor: "#FCFCFC", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(219, 210, 210, 0.18)", boxSizing: "border-box", height: "40px", padding: "10px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "18px" }}>
                    <span>Lecture 1</span>
                    <span style = {{ marginRight:'5px',marginLeft:'auto', alignItems: "center", paddingLeft: "5px",borderRadius: "50%", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.34)", height: "20px", width: "20px" }}>&#10003;</span>
                </div>
                <br/>
                <div style = {{display:'flex', border: "1px solid #DBDBDB", backgroundColor: "#FCFCFC", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(219, 210, 210, 0.18)", boxSizing: "border-box", height: "40px", padding: "10px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "18px" }}>
                    <span>Lecture 2</span>
                    <span style = {{ marginRight:'5px',marginLeft:'auto', alignItems: "center", paddingLeft: "5px",borderRadius: "50%", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.34)", height: "20px", width: "20px" }}>&#10003;</span>
                </div>
                <br/>
                <div style = {{display:'flex', border: "1px solid #DBDBDB", backgroundColor: "#FCFCFC", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(219, 210, 210, 0.18)", boxSizing: "border-box", height: "40px", padding: "10px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "18px" }}>
                    <span>Lecture 3</span>
                    <span style = {{ marginRight:'5px',marginLeft:'auto', alignItems: "center", paddingLeft: "5px",borderRadius: "50%", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.34)", height: "20px", width: "20px" }}>&#10003;</span>
                </div>
                <br/>
                <div style = {{display:'flex', border: "1px solid #DBDBDB", backgroundColor: "#FCFCFC", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(219, 210, 210, 0.18)", boxSizing: "border-box", height: "40px", padding: "10px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "18px" }}>
                    <span>Lecture 4</span>
                    <span style = {{ marginRight:'5px',marginLeft:'auto', alignItems: "center", paddingLeft: "5px",borderRadius: "50%", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.34)", height: "20px", width: "20px" }}>&#10003;</span>
                </div>
                <br/>
                <div style = {{ border: "1px solid #DBDBDB",textAlign:'center', backgroundColor: "#FCFCFC", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(219, 210, 210, 0.18)", boxSizing: "border-box", height: "40px", padding: "10px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "18px" }}>
                    <span>Lunch Break</span>
                </div>
                <br/>
                <div style = {{display:'flex', border: "1px solid #DBDBDB", backgroundColor: "#214DF9", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(219, 210, 210, 0.18)", boxSizing: "border-box", height: "40px", padding: "10px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "18px", color: "white" }}>
                    <span>Lecture 5</span>
                    <span style = {{marginRight:'5px',marginLeft:'auto', display: "inline-flex", alignItems: "center" }}>Ongoing</span>
                    &nbsp;
                    <SyncRoundedIcon className = "rotate"/>            
                </div>
                <br/>
                <div style = {{ border: "1px solid #DBDBDB", backgroundColor: "#FCFCFC", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(219, 210, 210, 0.18)", boxSizing: "border-box", height: "40px", padding: "10px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "18px" }}>
                    <span>Lecture 6</span>
                </div>
                <br/>
                <div style = {{ border: "1px solid #DBDBDB", backgroundColor: "#FCFCFC", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(219, 210, 210, 0.18)", boxSizing: "border-box", height: "40px", padding: "10px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "18px" }}>
                    <span>Lecture 7</span>
                </div>
                <br/>
                <div style = {{ border: "1px solid #DBDBDB", backgroundColor: "#FCFCFC", borderRadius: "5px", boxShadow: "0px 2px 4px rgba(219, 210, 210, 0.18)", boxSizing: "border-box", height: "40px", padding: "10px", fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "18px" }}>
                    <span>Lecture 8</span>
                </div>
            </div>
        </div>
    )
}