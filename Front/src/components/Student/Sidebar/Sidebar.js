import React, { useEffect, useState, useContext } from "react";
import "./Sidebar.css";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";
import { Link } from "react-router-dom";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuIcon from "@mui/icons-material/Menu";
import MenuContext from "../../../context/Menu/MenuContext";
function Sidebar(props, { defaultActive }) {
  const mycontext = useContext(MenuContext);
  const location = props.history.location;
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(
    lastActiveIndex || defaultActive
  );

  const icons = [
    DashboardRoundedIcon,
    MenuBookRoundedIcon,
    FeedOutlinedIcon,
    PeopleAltTwoToneIcon,
    LocalAtmRoundedIcon,
    EventNoteRoundedIcon,
    NotificationsRoundedIcon,
  ];

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }

  function getPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  useEffect(() => {
    const activeItem = SidebarItems.findIndex(
      (item) => getPath(item.route) === getPath(location.pathname)
    );
    changeActiveIndex(activeItem);
  }, [location]);

  const toggleNav = () => {
    mycontext.setMenu(true);
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const offMenu = () => {
    mycontext.setMenu(false);
  };
  return (
    <div className="sidebar">
      {(mycontext.Menu || screenWidth > 720) && (
        <>
          <SidebarParent className="sbp">
            <div className="sidebardiv">
              <div style={{ maxHeight: "150px", textAlign: "center" }}>
                <div
                  style={{
                    margin: "auto",
                    height: "auto",
                    width: "auto",
                    overflow: "hidden",
                    paddingTop: "29px",
                  }}
                >
                  <img
                    style={{
                      maxHeight: "100%",
                      width: "91px",
                      overflow: "hidden",
                      margin: "auto",
                      borderRadius: "50%",
                    }}
                    src="https://i.ibb.co/6mNnF3y/preview.jpg"
                    alt="logo"
                  />
                </div>
                <p
                  style={{
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "21px",
                    color: "#FFFFFF",
                  }}
                >
                  Company
                </p>
              </div>
              {SidebarItems.map((item, index) => {
                const Icon = icons[index];
                return (
                  <Link to={item.route}>
                    <SidebarItem
                      key={item.name}
                      active={index === activeIndex}
                      className="sidebaritem"
                      onClick={offMenu}
                    >
                      <p>
                        <Icon />
                      </p>
                      &nbsp;
                      <p>{item.name}</p>
                    </SidebarItem>
                  </Link>
                );
              })}
            </div>

            <div
              style={{
                backgroundColor: "#FF2934",
                height: "5vh",
                display: "flex",
                alignItems: "center",
                position: "fixed",
                bottom: 0,
              }}
            >
              <a href="#">Logout</a>&nbsp;
              <p style={{ color: "white" }}>
                <LogoutRoundedIcon />
              </p>
            </div>
          </SidebarParent>
        </>
      )}
      {!mycontext.Menu ? (
        <button onClick={toggleNav} className="sidebarbtn">
          <MenuIcon style={{ verticalAlign: "middle", color: "#035473" }} />
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Sidebar;

const SidebarParent = styled.div`
  background: linear-gradient(
    179.21deg,
    rgba(4, 5, 19, 0.85) 6.55%,
    rgba(4, 5, 19, 0.8) 35.17%,
    rgba(4, 5, 19, 0.77) 64.84%,
    rgba(4, 5, 19, 0.85) 99.32%
  );
  z-index: 4;
  a {
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    padding-left: 16px;
  }

  & > div {
    width: 160px;
    height: 150vh;
  }
`;

const SidebarItem = styled.div`
  transition: all 1s ease-in-out;
  background: ${(props) =>
    props.active
      ? "linear-gradient(180deg, #585961 0%, rgba(88, 89, 97, 0.37) 100%)"
      : ""};
  boxshadow: 0px 4px 4px rgba(0, 0, 0, 0.33);
  height: 42px;
  text-align: left;
  padding-left: 16px;
  display: flex;
  align-items: center;
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    display: inline-block;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:not(:first-child) {
    background: linear-gradient(
      180deg,
      #585961 0%,
      rgba(88, 89, 97, 0.37) 100%
    );
  }
`;
