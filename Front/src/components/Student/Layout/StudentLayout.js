import React, { useContext } from "react";
import MenuContext from "../../../context/Menu/MenuContext";
import Routes from "../Sidebar/Routes";

export default function Student() {
  const mycontext = useContext(MenuContext);
  return (
    <div>
      <Routes />
    </div>
  );
}
