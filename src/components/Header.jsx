import React, { useState } from "react";
import Menu from "@components/Menu";

import "@styles/Header.scss";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="Header">
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo-nav" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Objetivos</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            david.hilera@hotmail.com
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  );
};

export default Header;
