import React, { useContext } from "react";
import MenuContext from "../../../context/Menu/MenuContext";

export default function StudentTeacher() {
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
        marginRight: "263px",
        marginTop: "28px",
        marginBottom: "35px",
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
          <u>Teachers</u>
        </b>
      </p>
      <div style={{ marginTop: "79px", marginLeft: "100px", display: "flex" }}>
        <div
          style={{
            width: "252px",
            height: "357px",
            background: "#FDFDFD",
            boxShadow: "0px 2px 10px 5px rgba(161, 161, 161, 0.25)",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxHeight: "111px",
              textAlign: "center",
              paddingTop: "26px",
            }}
          >
            <div
              style={{
                margin: "auto",
                height: "auto",
                width: "auto",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  maxHeight: "100%",
                  width: "120px",
                  overflow: "hidden",
                  margin: "auto",
                  borderRadius: "50%",
                }}
                src="https://i.ibb.co/6mNnF3y/preview.jpg"
                alt="logo"
              />
            </div>
          </div>
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "25px",
              lineHeight: "37px",
              color: "#000000",
            }}
          >
            Jane Doe
          </p>
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#000000",
            }}
          >
            Science Dept.
          </p>
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "17px",
              color: "#000000",
              paddingLeft: "25px",
              paddingRight: "25px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a
            href="#"
            style={{
              width: "163px",
              height: "45px",
              background: "#ECECEC",
              borderRadius: "6px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "16px",
              color: "#8E8A8A",
              paddingTop: "13px",
              paddingBottom: "13px",
              paddingLeft: "26px",
              paddingRight: "26px",
              textDecoration: "none",
            }}
          >
            Submit Feedback
          </a>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div
          style={{
            width: "252px",
            height: "357px",
            background: "#FDFDFD",
            boxShadow: "0px 2px 10px 5px rgba(161, 161, 161, 0.25)",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxHeight: "111px",
              textAlign: "center",
              paddingTop: "26px",
            }}
          >
            <div
              style={{
                margin: "auto",
                height: "auto",
                width: "auto",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  maxHeight: "100%",
                  width: "120px",
                  overflow: "hidden",
                  margin: "auto",
                  borderRadius: "50%",
                }}
                src="https://i.ibb.co/6mNnF3y/preview.jpg"
                alt="logo"
              />
            </div>
          </div>
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "25px",
              lineHeight: "37px",
              color: "#000000",
            }}
          >
            Jane Doe
          </p>
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#000000",
            }}
          >
            Science Dept.
          </p>
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "17px",
              color: "#000000",
              paddingLeft: "25px",
              paddingRight: "25px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a
            href="#"
            style={{
              width: "163px",
              height: "45px",
              background: "#ECECEC",
              borderRadius: "6px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "16px",
              color: "#8E8A8A",
              paddingTop: "13px",
              paddingBottom: "13px",
              paddingLeft: "26px",
              paddingRight: "26px",
              textDecoration: "none",
            }}
          >
            Submit Feedback
          </a>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div
          style={{
            width: "252px",
            height: "357px",
            background: "#FDFDFD",
            boxShadow: "0px 2px 10px 5px rgba(161, 161, 161, 0.25)",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxHeight: "111px",
              textAlign: "center",
              paddingTop: "26px",
            }}
          >
            <div
              style={{
                margin: "auto",
                height: "auto",
                width: "auto",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  maxHeight: "100%",
                  width: "120px",
                  overflow: "hidden",
                  margin: "auto",
                  borderRadius: "50%",
                }}
                src="https://i.ibb.co/6mNnF3y/preview.jpg"
                alt="logo"
              />
            </div>
          </div>
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "25px",
              lineHeight: "37px",
              color: "#000000",
            }}
          >
            Jane Doe
          </p>
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#000000",
            }}
          >
            Science Dept.
          </p>
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "17px",
              color: "#000000",
              paddingLeft: "25px",
              paddingRight: "25px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a
            href="#"
            style={{
              width: "163px",
              height: "45px",
              background: "#ECECEC",
              borderRadius: "6px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "16px",
              color: "#8E8A8A",
              paddingTop: "13px",
              paddingBottom: "13px",
              paddingLeft: "26px",
              paddingRight: "26px",
              textDecoration: "none",
            }}
          >
            Submit Feedback
          </a>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div
          style={{
            width: "252px",
            height: "357px",
            background: "#FDFDFD",
            boxShadow: "0px 2px 10px 5px rgba(161, 161, 161, 0.25)",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxHeight: "111px",
              textAlign: "center",
              paddingTop: "26px",
            }}
          >
            <div
              style={{
                margin: "auto",
                height: "auto",
                width: "auto",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  maxHeight: "100%",
                  width: "120px",
                  overflow: "hidden",
                  margin: "auto",
                  borderRadius: "50%",
                }}
                src="https://i.ibb.co/6mNnF3y/preview.jpg"
                alt="logo"
              />
            </div>
          </div>
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "25px",
              lineHeight: "37px",
              color: "#000000",
            }}
          >
            Jane Doe
          </p>
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#000000",
            }}
          >
            Science Dept.
          </p>
          <p
            style={{
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "17px",
              color: "#000000",
              paddingLeft: "25px",
              paddingRight: "25px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a
            href="#"
            style={{
              width: "163px",
              height: "45px",
              background: "#ECECEC",
              borderRadius: "6px",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "16px",
              color: "#8E8A8A",
              paddingTop: "13px",
              paddingBottom: "13px",
              paddingLeft: "26px",
              paddingRight: "26px",
              textDecoration: "none",
            }}
          >
            Submit Feedback
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          width: "252px",
          height: "357px",
          background: "#FDFDFD",
          boxShadow: "0px 2px 10px 5px rgba(161, 161, 161, 0.25)",
          borderRadius: "10px",
          textAlign: "center",
          marginLeft: "100px",
        }}
      >
        <div
          style={{
            maxHeight: "111px",
            textAlign: "center",
            paddingTop: "26px",
          }}
        >
          <div
            style={{
              margin: "auto",
              height: "auto",
              width: "auto",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                maxHeight: "100%",
                width: "120px",
                overflow: "hidden",
                margin: "auto",
                borderRadius: "50%",
              }}
              src="https://i.ibb.co/6mNnF3y/preview.jpg"
              alt="logo"
            />
          </div>
        </div>
        <p
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "25px",
            lineHeight: "37px",
            color: "#000000",
          }}
        >
          Jane Doe
        </p>
        <p
          style={{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
            lineHeight: "21px",
            color: "#000000",
          }}
        >
          Science Dept.
        </p>
        <p
          style={{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "17px",
            color: "#000000",
            paddingLeft: "25px",
            paddingRight: "25px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <a
          href="#"
          style={{
            width: "163px",
            height: "45px",
            background: "#214DF9",
            borderRadius: "6px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "16px",
            color: "#FFFFFF",
            paddingTop: "13px",
            paddingBottom: "13px",
            paddingLeft: "26px",
            paddingRight: "26px",
            textDecoration: "none",
          }}
        >
          Submit Feedback
        </a>
      </div>
    </div>
  );
}
