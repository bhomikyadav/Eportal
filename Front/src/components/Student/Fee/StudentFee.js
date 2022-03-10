import React, { useContext } from "react";
import MenuContext from "../../../context/Menu/MenuContext";
import BasicTable from "./StudentAcademicFee";

export default function StudentTeacher() {
  const mycontext = useContext(MenuContext);
  return (
    <div
      onClick={mycontext.offMenu}
      onScroll={mycontext.offMenu}
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
          <u>Fees</u>
        </b>
      </p>
      <div
        style={{
          marginTop: "91px",
          marginRight: "61px",
          marginBottom: "250px",
        }}
      >
        <div style={{ display: "flex" }}>
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
            Academic
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
            Transport / Hostel
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
            Extracurricular
          </p>
        </div>
        <br />
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
              Academic
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
            <BasicTable />
          </div>
        </div>
      </div>
    </div>
  );
}
