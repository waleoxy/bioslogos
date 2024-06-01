import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";

const Navbar = () => {
  return (
    <nav className="bg-biosprimary/25 w-full h-[72px]">
      <MaxWidthWrapper>
        <div>Hello</div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
