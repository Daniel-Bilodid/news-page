import { React, useState } from "react";
import "./nav.scss";
import logo from "../../assets/logo.svg";
import menu from "../../assets/icon-menu.svg";
import menuClose from "../../assets/icon-menu-close.svg";

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    console.log(show);
    setShow(true);
    console.log("yes");
    console.log(show);
  };

  const handleClose = () => {
    setShow(false);
  };

  const bodyElement = document.querySelector("body");

  if (show) {
    bodyElement.style.overflow = "hidden";
    bodyElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    bodyElement.style.transition = "background-color 0.3s ease-in-out";
  } else {
    bodyElement.style.overflow = "visible";
    bodyElement.style.backgroundColor = "";
  }

  return (
    <>
      <div className="nav">
        <div className="nav__wrapper">
          <div className="nav__wrapper-logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="nav__wrapper-list">
            <ul className="nav__list">
              <div className="nav__menu">
                <img onClick={handleClick} src={menu} alt="menu" />
              </div>
              <li className="nav__list-item">Home</li>
              <li className="nav__list-item">New</li>
              <li className="nav__list-item">Popular</li>
              <li className="nav__list-item">Trending</li>
              <li className="nav__list-item">Categories</li>
            </ul>
          </div>
        </div>

        {/* <div
        className={show ? "nav__burger nav__burger-active" : "nav__burger"}
      ></div> */}
      </div>

      <div className="nav__burger" style={show ? { opacity: 1, top: 0 } : {}}>
        <div className="nav__burger-btn" onClick={handleClose}>
          <img src={menuClose} alt="" />
        </div>
        <ul className="nav__burger-list">
          <li className="nav__burger-item">Home</li>
          <li className="nav__burger-item">New</li>
          <li className="nav__burger-item">Popular</li>
          <li className="nav__burger-item">Trending</li>
          <li className="nav__burger-item">Categories</li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
