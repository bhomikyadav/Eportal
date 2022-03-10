import React, { useContext } from "react";
import "./HomeWork.css";

export default function HomeWork() {
  return (
    <div className="homework">
      <div
        style={{
          backgroundColor: "#F9F9F9",
          height: "60px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ padding: "15px", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "20px",
              float: "left",
            }}
          >
            Daily Homework
          </span>
          <div
            style={{
              float: "right",
              backgroundColor: "#E0DDDD",
              borderRadius: "5px",
              boxShadow: "0px 1px 5px rgba(33, 33, 33, 0.48)",
              height: "36px",
              width: "122px",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "auto",
              }}
            >
              Today's Date
            </span>
          </div>
        </div>
        <div style={{ padding: "5px 15px", marginTop: "15px" }}>
          <div
            style={{
              borderLeft: "9px solid #9EFF8E",
              padding: "4px 0px",
              width: "95%",
            }}
          >
            <h4 style={{ margin: "8px 10px" }}>Science</h4>
            <p
              style={{
                margin: "8px 10px",
                color: "#4F4F4F",
                font: "roboto",
                fontSize: "16px",
                fontWeight: "300",
              }}
            >
              Pracise all the question given at chapter end. Revise chapter 1
              till Rutherford Model.
            </p>
          </div>
          <hr style={{ margin: "0.5px", backgroundColor: "#d9d9d9" }} />
          <div
            style={{
              borderLeft: "9px solid #FFA7AB",
              padding: "4px 0px",
              width: "95%",
            }}
          >
            <h4 style={{ margin: "8px 10px" }}>Maths</h4>
            <p
              style={{
                margin: "8px 10px",
                color: "#4F4F4F",
                font: "roboto",
                fontSize: "16px",
                fontWeight: "300",
              }}
            >
              Pracise all the question given at chapter end. Revise chapter 1
              till Rutherford Model.
            </p>
          </div>
          <hr style={{ margin: "0.5px", backgroundColor: "#d9d9d9" }} />
          <div
            style={{
              borderLeft: "9px solid #9FB3FF",
              padding: "4px 0px",
              width: "95%",
            }}
          >
            <h4 style={{ margin: "8px 10px" }}>English</h4>
            <p
              style={{
                margin: "8px 10px",
                color: "#4F4F4F",
                font: "roboto",
                fontSize: "16px",
                fontWeight: "300",
              }}
            >
              Pracise all the question given at chapter end. Revise chapter 1
              till Rutherford Model.
            </p>
          </div>
          <hr style={{ margin: "0.5px", backgroundColor: "#d9d9d9" }} />
        </div>
      </div>
    </div>
  );
}
