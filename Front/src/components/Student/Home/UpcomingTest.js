import React from 'react';
import './UpcomingTest.css';

export default function UpcomingTest() {
    return (
        <div className="upcoming" style = {{}}>
            <div style = {{ backgroundColor: "#F9F9F9", height: "60px", alignItems: "center", width: "100%" }}>
                <div style = {{ padding: "15px", alignItems: "center" }}>
                    <span style = {{ fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "20px", float: "left" }}>Upcoming Test</span>
                </div>
                <div style = {{ padding: "15px"}}>
                    <div style={{border:'1px solid grey',borderRadius:'2px', margin:'10px 0px',marginRight:'5px'}}>
                        <h4 style={{margin:'10px 10px 5px 10px'}}>Class Test 2</h4>
                        <p style={{margin:'5px 10px'}}>Lorem ipsum</p>
                    </div>
                    <div style={{border:'1px solid grey',borderRadius:'2px',margin:'10px 0px',marginRight:'5px'}}>
                        <h4 style={{margin:'10px 10px 5px 10px'}}>Test 1</h4>
                        <p style={{margin:'5px 10px'}}>Lorem ipsum this is a dummy text to check.</p>
                    </div>
                    <div style={{border:'1px solid grey',borderRadius:'2px',margin:'10px 0px',marginRight:'5px'}}>
                        <h4 style={{margin:'10px 10px 5px 10px'}}>Test 2</h4>
                        <p style={{margin:'5px 10px'}}>Lorem ipsum this is a dummy text to check.</p>
                    </div>
                    <div style={{border:'1px solid grey',borderRadius:'2px',margin:'10px 0px',marginRight:'5px'}}>
                        <h4 style={{margin:'10px 10px 5px 10px'}}>Test 3</h4>
                        <p style={{margin:'5px 10px'}}>Lorem ipsum this is a dummy text to check.</p>
                    </div>
                    <div style={{border:'1px solid grey',borderRadius:'2px',margin:'10px 0px',marginRight:'5px'}}>
                        <h4 style={{margin:'10px 10px 5px 10px'}}>Test 4</h4>
                        <p style={{margin:'5px 10px'}}>Lorem ipsum this is a dummy text to check.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}