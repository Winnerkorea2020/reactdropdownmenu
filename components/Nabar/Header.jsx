import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bottom-0 w-full mx-auto px-1 h-16 z-50">
      <div className="flex ">
        <a href="/" className="block">
          Logo
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
