import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1>Life Canvas</h1>
        {/* <nav className="navigation">
          <a href="\home">Home</a>
          <a href="\about">About</a>
        </nav> */}
        <img className="img_id" src="shifa.jpg" alt="" />
      </div>
    </div>
  );
};

export default Header;
