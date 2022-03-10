import React, { useContext } from "react";
import MenuContext from "../../../context/Menu/MenuContext";
import AssignedDate from "./AssignedDropdown";
import DueDate from "./DueDateDropdown";
import WeeklyTable from "./StudentAssignmentWeekly";
import SubjectSelect from "./SubjectDropdown";

export default function StudentAssignment() {
  const mycontext = useContext(MenuContext);
  return (
    <div
      onClick={(event) => {
        mycontext.offMenu();
      }}
      onScroll={(event) => {
        mycontext.offMenu();
      }}
      style={{
        marginLeft: "51px",
        marginRight: "61px",
        marginTop: "28px",
        marginBottom: "250px",
      }}
    >
      <p
        style={{
          fontfamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "18px",
          lineHeight: "21px",
          color: "#4D4D4D",
        }}
      >
        Home{" "}
        <b>
          {" "}
          <u>Assignments</u>
        </b>
      </p>
      <div
        style={{
          marginTop: "50px",
          marginRight: "61px",
          marginBottom: "250px",
        }}
      >
        <div style={{ display: "flex" }}>
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#000000",
            }}
          >
            Filters:-
          </p>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <SubjectSelect />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <AssignedDate />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <DueDate />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a
            href="#"
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#FF7575",
              paddingTop: "20px",
            }}
          >
            Clear Filters
          </a>
        </div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <p
            style={{
              width: "107px",
              height: "35px",
              background: "#214DF9",
              borderRadius: "5px",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#FFFFFF",
              paddingTop: "10px",
              textAlign: "center",
            }}
          >
            Weekly
          </p>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#7E7E7E",
              paddingTop: "10px",
            }}
          >
            Monthly
          </p>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#7E7E7E",
              paddingTop: "10px",
            }}
          >
            Overview
          </p>
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              height: "75px",
              background:
                "linear-gradient(180deg, #FDFDFD 0%, rgba(245, 245, 245, 0.92) 100%)",
              border: "2px solid #A4A4A4",
              borderRadius: "5px",
              paddingLeft: "46px",
              paddingTop: "10px",
            }}
          >
            <p
              style={{
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "24px",
                lineHeight: "28px",
                color: "#474747",
              }}
            >
              Assignments
            </p>
          </div>
          <div
            style={{
              height: "auto",
              background: "#FFFFFF",
              border: "1px solid #A5A5A5",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            }}
          >
            <WeeklyTable />
          </div>
        </div>
      </div>
    </div>
  );
}
