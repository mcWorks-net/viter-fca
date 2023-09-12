import React from "react";
import Btn from "./Btn";
import HeaderDetails from "./HeaderDetails";
import Header from "./Header";

const Navigation = ({ navOpen }) => {
  return (
    <>
      <nav
        className={`absolute -right-[100%] lg:static bg-white w-full transition-all ease-in duration-500 ${
          navOpen ? "active" : ""
        }`}
      >
        <ul className="lg:flex justify-between text-center [&>li]:w-full [&>li>a]:block [&>li>a]:uppercase lg:[&>li>a]:p-2 [&>li]:my-6 lg:[&>*:last-child>a]:border-r-0 lg:[&>li>a]:border-r-2 [&>li>a]:border-r-[#d1d5db]">
          <li>
            <a href="https://fca.edu.ph/">home</a>
          </li>
          <li>
            <a href="https://fca.edu.ph/about/">about</a>
          </li>
          <li>
            <a href="https://fca.edu.ph/admission/">admission</a>
          </li>
          <li>
            <a href="https://fca.edu.ph/services/">services</a>
          </li>
          <li>
            <a href="https://fca.edu.ph/gallery/">gallery</a>
          </li>
          <li>
            <a href="https://fca.edu.ph/contact/">contact</a>
          </li>
          <li>
            <Btn
              link={"https://fca.edu.ph/donate/"}
              customClass={
                "bg-[#daa625] text-white inline-block w-[112px] py-2 rounded-md hover:bg-[#ffd02b]"
              }
              text={"GIVE"}
            />
          </li>
        </ul>
        <HeaderDetails
          customStyle={"block lg:hidden text-center"}
          ulStyle={" block lg:hidden gap-2 text-center"}
        />
      </nav>
    </>
  );
};

export default Navigation;
