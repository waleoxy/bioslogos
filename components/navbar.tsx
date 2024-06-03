import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed z-50 bg-white/25 backdrop-blur-lg w-full h-[72px] border-b border-biosprimary border-opacity-15">
      <MaxWidthWrapper>
        <div className="h-full flex items-center">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-3xl tracking-tighter font-semibold text-bioslogo italic font-sans cursor-pointer">
              Bios
              <Badge className="not-italic pointer-events-none  text-3xl pl-0.5 font-semibold text-white bg-biosprimary pb-0.5 border-2 pr-2 font-sans leading-9 opacity-75 rounded-md text-center py-0">
                Checkpoint
              </Badge>
            </h3>
            <div className="flex space-x-3 ">
              <Button
                variant={"ghost"}
                className="border-biosprimary border text-white hover:text-biosprimary"
              >
                Login
              </Button>
              <Button className="bg-biosprimary hover:bg-bioslogo hover:text-biosprimary">
                SIgn up
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
