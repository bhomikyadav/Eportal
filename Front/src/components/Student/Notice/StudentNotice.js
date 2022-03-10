import React, { useContext } from "react";
import MenuContext from "../../../context/Menu/MenuContext";

export default function StudentNotice() {
  const mycontext = useContext(MenuContext);
  return (
    <div
      onClick={mycontext.offMenu}
      onScroll={mycontext.offMenu}
      style={{
        marginLeft: "51px",
        marginRight: "256px",
        marginTop: "28px",
        marginBottom: "60px",
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
          <u>Notice</u>
        </b>
      </p>
      <div style={{ marginTop: "62px", display: "flex" }}>
        <div
          style={{
            height: "758px",
            width: "649px",
            background: "#FFFFFF",
            border: "1px solid #E7E7E7",
            boxShadow: "0px 2px 7px rgba(52, 52, 52, 0.35)",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              height: "64px",
              width: "100%",
              background: "#F9F9F9",
              borderRadius: "4px 4px 0px 0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                marginLeft: "17px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#000000",
              }}
            >
              Notice
            </p>
            <div style={{ float: "right", paddingRight: "46px" }}>
              <span
                style={{
                  width: "101px",
                  height: "40px",
                  background: "#1BBF9C",
                  borderRadius: "5px",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: "#FFFFFF",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginRight: "31px",
                  marginLeft: "340px",
                }}
              >
                Class
              </span>
              <span
                style={{
                  width: "101px",
                  height: "40px",
                  background: "#ECECEC",
                  borderRadius: "5px",
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: "#8E8A8A",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                Overall
              </span>
            </div>
          </div>
          <div
            style={{
              overflowY: "auto",
              paddingLeft: "28px",
              paddingTop: "46px",
              paddingRight: "43px",
              paddingBottom: "37px",
              height: "610px",
            }}
          >
            <div style={{ background: "#FDFDFD" }}>
              <p
                style={{
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: "#292929",
                }}
              >
                Date
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#6755D9",
                }}
              >
                Event
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#000000",
                }}
              >
                Description
              </p>
            </div>
            <br />
            <div style={{ background: "#FDFDFD" }}>
              <p
                style={{
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: "#292929",
                }}
              >
                Date
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#6755D9",
                }}
              >
                Event
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#000000",
                }}
              >
                Description
              </p>
            </div>
            <br />
            <div style={{ background: "#FDFDFD" }}>
              <p
                style={{
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: "#292929",
                }}
              >
                Date
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#6755D9",
                }}
              >
                Event
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#000000",
                }}
              >
                Description
              </p>
            </div>
            <br />
            <div style={{ background: "#FDFDFD" }}>
              <p
                style={{
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: "#292929",
                }}
              >
                Date
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#6755D9",
                }}
              >
                Event
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#000000",
                }}
              >
                Description
              </p>
            </div>
            <br />
            <div style={{ background: "#FDFDFD" }}>
              <p
                style={{
                  fontFamily: "Rubik",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "21px",
                  color: "#292929",
                }}
              >
                Date
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#6755D9",
                }}
              >
                Event
              </p>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "18px",
                  lineHeight: "25px",
                  color: "#000000",
                }}
              >
                Description
              </p>
            </div>
            <br />
          </div>
        </div>
        <div
          style={{
            height: "394px",
            width: "724px",
            background: "#FFFFFF",
            border: "1px solid #E7E7E7",
            boxShadow: "0px 2px 7px rgba(52, 52, 52, 0.35)",
            borderRadius: "5px",
            marginLeft: "78px",
          }}
        >
          <div
            style={{
              height: "57px",
              width: "100%",
              background: "#F9F9F9",
              borderRadius: "4px 4px 0px 0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                marginLeft: "17px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "30px",
                color: "#000000",
              }}
            >
              Principal Message
            </p>
          </div>
          <div style={{ padding: "25px", display: "flex" }}>
            <div style={{ maxHeight: "200px", textAlign: "center" }}>
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
                    width: "150px",
                    overflow: "hidden",
                    margin: "auto",
                    borderRadius: "50%",
                  }}
                  src="https://i.ibb.co/6mNnF3y/preview.jpg"
                  alt="logo"
                />
              </div>
            </div>
            <div
              style={{
                overflowY: "auto",
                paddingLeft: "10px",
                height: "300px",
              }}
            >
              <p
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "#000000",
                }}
              >
                Dear Students, Parents and Colleagues
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "#000000",
                }}
              >
                Dear Students, Parents and Colleagues Mothers Global School is
                not just a school but it is home away from home for our
                students, a place where they find a caring, stimulating
                environment where students are nurtured, challenged, educated
                and given every opportunity to reach their full potential. It’s
                a place where unwavering belief in your child’s potential allows
                them to build personally, socially and academically together
                with love, attention, respect, warmth, values and training for
                life. Their mentors and guides believe that every student is
                special and blessed, they require handholding and support as
                they walk alongside to ensure that the students become global
                citizens equipped with a vast set of life skills to pursue their
                passion and make this world a better place to live in. Jane Doe
                Principal Mothers Global School
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
