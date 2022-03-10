import React, { useContext } from "react";
import AcademicCalendar from "./AcademicCalendar";
import Attendance from "./Attendance";
import HomeWork from "./HomeWork";
import TimeTable from "./TimeTable";
import UpcomingTest from "./UpcomingTest";
import "./Home.css";
import "./StudentHome.css";
import MenuContext from "../../../context/Menu/MenuContext";
export default function StudentHome() {
  const mycontext = useContext(MenuContext);

  return (
    <div
      onClick={mycontext.offMenu}
      onScroll={mycontext.offMenu}
      style={{
        position: "relative",
        overflow: "auto",
        backgroundColor: "#F8F9FF",
        marginTop: "5px",
      }}
    >
      <div
        style={{
          width: "20%",
          height: "100%",
          textAlign: "left",
          padding: "10px",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <br />
        <span
          style={{
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          Hello,{" "}
          <span
            style={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "25px",
            }}
          >
            First Name
          </span>
          &nbsp;&nbsp;<span className="wave">👋</span>
        </span>
        <br />
        <br />
        <span
          style={{
            fontFamily: "sans-serif",
            fontStyle: "italic",
            fontWeight: "normal",
            fontSize: "16px",
          }}
        >
          Quote of the day
        </span>
        <br />
        <br />
        <span
          style={{
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#636363",
          }}
        >
          "Two to three lines of a quote will fit here perfectly along with the
          name of the author."
        </span>
        <br />
        <br />
        <span
          style={{
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
            color: "#636363",
            float: "right",
          }}
        >
          - Name of the Author
        </span>
        <br />
        <br />
        <TimeTable />
      </div>
      <div
        style={{
          width: "76.8%",
          display: "inline-flex",
          position: "absolute",
          top: "5px",
          right: 0,
        }}
      >
        <div
          style={{
            paddingTop: "45px",
            paddingLeft: "55px",
            paddingRight: "60px",
          }}
        >
          <div className="div1">
            <Attendance />
            <HomeWork />
          </div>
          <div className="div2">
            <AcademicCalendar />
            <UpcomingTest />
          </div>
        </div>
      </div>
    </div>
  );
}
