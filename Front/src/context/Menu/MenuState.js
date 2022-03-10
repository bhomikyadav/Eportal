import { useState } from "react";

import MenuContext from "./MenuContext";

const MenuState = (props) => {
  const [Menu, setMenu] = useState(false);
  const offMenu = () => {
    setMenu(false);
  };
  return (
    <MenuContext.Provider value={{ Menu, setMenu, offMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
};
export default MenuState;
