import React, { useContext } from "react";
import MenuContext from "../../../context/Menu/MenuContext";

export default function StudentSubject() {
  const mycontext = useContext(MenuContext);
  return (
    <div onClick={mycontext.offMenu} onScroll={mycontext.offMenu}>
      <h1>Subject</h1>
    </div>
  );
}
