import React from "react";
import logo from "/images/fca-logo.webp";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPhoneAndroid } from "react-icons/md";
import Btn from "./Btn";
import Navigation from "./Navigation";
import HeaderDetails from "./HeaderDetails";
import ToggleBtn from "./ToggleBtn";

const Header = () => {
  const [navOpen, setNavOpen] = React.useState(true);
  const handleClick = () => setNavOpen(!navOpen);
  return (
    <>
      <header className="">
        <div className="container">
          <div className="headerWrapper flex items-center justify-between border-b border-b-black">
            <a href="https://fca.edu.ph/">
              <img src={logo} alt="" className="w-[200px] py-2" />
            </a>
            <HeaderDetails
              className="hidden lg:flex"
              ulStyle={"hidden lg:flex gap-4"}
            />
            <ToggleBtn handleClick={handleClick} />
          </div>
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;
