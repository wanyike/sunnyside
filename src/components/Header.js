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
        
                <div>
                    <MenuButton />
                </div>
      </header>
      </>
  );
};

export default Header;
