import React from "react";
import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <>
      <header className="bg-blue-500 flex items-center justify-between">
          <div>
          <logo />
        </div>
                <div>
                    <MenuButton />
                </div>
      </header>
      </>
  );
};

export default Header;
