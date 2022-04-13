import React from "react";

import Header from "@components/Header";

import "@styles/Layout.scss";
import "@styles/_animations.scss";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;
