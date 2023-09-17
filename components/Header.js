// import React from "react";
import pic from "../src/assets/mob-icon.png";
import picture from "../src/assets/fb.png";


const Header = () => {
  return (
    <>
      <header className="bg-[#fffbe2] py-2 lg:hidden">
        <div className="flex justify-start items-center">
          <div className="ml-4 mr-2">
            <img className="w-[17px] h-8" src={pic} alt="" />
          </div>
          <div className="">
            <p className="text-[#3b5998] text-sm font-normal">
              Get Facebook for Android and browse faster.
            </p>
          </div>
        </div>
      </header>
      <img src={picture} class="py-2 w-28 d-block mx-auto lg:hidden" alt="" />
    </>
  );
};

export default Header;
