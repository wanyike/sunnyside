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
       <ul className="navbar-nav active flex">
            <li className=""><a href="#about" className="nav-link">About</a> </li>
            <li className=""><a href="#services" className="nav-link">Services</a> </li>
            <li className=""><a href="#projects" className="nav-link">Projects</a> </li>
            <li className=""><button className="nav-toggle-btn">Contact</button></li>
          </ul>
          
          <button className="nav-toggle-btn active">
            <span className="line one"></span>
            <span className="line two"></span>
            <span className="line three"></span>
          </button>

        </div>
                <div>
                    <MenuButton />
                </div>
      </header>
      </>
  );
};

export default Header;
