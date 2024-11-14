import React from "react";
import Logo from "./Logo"
import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <>
      <header className="absolute w-full flex items-center p-5 justify-between">
          <div>
          <Logo />
        </div>

       <div className="">
          <ul className="navbar-nav">
            <li className=""><a href="#about" className="nav-link">About</a> </li>
            <li className=""><a href="#services" className="nav-link">Services</a> </li>
            <li className=""><a href="#projects" className="nav-link">Projects</a> </li>
            <li className=""><button className="nav-yoggle-btn">Contact</button></li>
        </ul>
        </div>
                <div>
                    <MenuButton />
                </div>
      </header>
      </>
  );
};

export default Header;
