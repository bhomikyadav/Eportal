import React, { useContext } from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import MenuContext from "../../../context/Menu/MenuContext";
export default function StudentExam() {
  const mycontext = useContext(MenuContext);
  return (
    <div
      onClick={mycontext.offMenu}
      onScroll={mycontext.offMenu}
      style={{
        marginLeft: "51px",
        marginRight: "127px",
        marginTop: "28px",
        marginBottom: "71px",
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
          <u>Exam</u>
        </b>
      </p>
      <div style={{ marginTop: "81px" }}>
        <div
          style={{
            height: "102px",
            width: "100%",
            background: "#FDFDFD",
            border: "2px solid #A4A4A4",
            borderRadius: "5px",
            display: "flex",
          }}
        >
          <p
            style={{
              paddingLeft: "64px",
              paddingTop: "15px",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "28px",
              color: "#646464",
            }}
          >
            Exam
          </p>
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "28px",
              color: "#646464",
              paddingTop: "15px",
              paddingLeft: "1320px",
            }}
          >
            <ArrowForwardIosRoundedIcon />
          </p>
        </div>
        <br />
        <br />
        <div
          style={{
            height: "102px",
            width: "100%",
            background: "#FDFDFD",
            border: "2px solid #A4A4A4",
            borderRadius: "5px",
          }}
        >
          <p
            style={{
              paddingLeft: "64px",
              paddingTop: "15px",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "28px",
              color: "#646464",
            }}
          >
            Class Test
          </p>
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "28px",
              color: "#646464",
              paddingTop: "15px",
              paddingLeft: "1320px",
            }}
          >
            <ArrowForwardIosRoundedIcon />
          </p>
        </div>
      </div>
    </div>
  );
}
