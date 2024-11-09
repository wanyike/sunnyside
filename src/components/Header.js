import React from "react";
import Logo from "./Logo"

import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <>
      <header className="bg-blue-500 flex items-center justify-between">
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
