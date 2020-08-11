import React, { useState } from "react";
import HeaderNav from "./containers/HeaderNav";
import Sidebar from "./containers/sidebars/Sidebar";
import Backdrop from "./components/Backdrop";
import "./tailwind.css";
import SidebarRelative from "./containers/sidebars/SidebarRelative";

function App() {
  const [menuHidden, setMenuHidden] = useState(false);
  const toggleMenu = React.useCallback(() => setMenuHidden((state) => !state), [
    setMenuHidden,
  ]);
  return (
    <div className="App h-screen">
      <HeaderNav menuHidden={menuHidden} toggleMenu={toggleMenu} />
      <Sidebar menuHidden={menuHidden} toggleMenu={toggleMenu} />
      {menuHidden ? <Backdrop /> : null}
      <div className="bg-gray-200 w-full h-full z-40 pt-12 pl-56">Hello</div>
    </div>
  );
}

export default App;
