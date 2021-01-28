import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
      <Footer name="Marcus" />
    </div>
  );
};

export default Layout;
