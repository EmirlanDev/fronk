import React from "react";
import logo from "../../assets/img/logo.png";
import menu from "../../assets/img/Menu.png";
import { GrTwitter } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--socialNetwork">
            <p>{<GrTwitter />}</p>
            <p>{<BsInstagram />}</p>
            <p>{<FaDiscord />}</p>
          </div>
          <div className="header--logo">
            <img src={logo} alt="img" />
          </div>
          <div className="header--menu">
            <NavLink to="/">
              <h1>Home</h1>
            </NavLink>
            <NavLink to="/second">
              <h1>Land sale</h1>
            </NavLink>
            <h1>Faq</h1>
            <h1>Blog </h1>
          </div>
          <img className="header--burger" src={menu} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default Header;
