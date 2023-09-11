import React from "react";
import { MdPhoneAndroid } from "react-icons/md";
import Btn from "./Btn";
import { BsFillTelephoneFill } from "react-icons/bs";

const HeaderDetails = ({ customStyle, ulStyle }) => {
  return (
    <>
      <div className={`headerDetails ${customStyle}`}>
        <ul className={`${ulStyle} [&>li]:mb-2 lg:[&>li]:mb-0`}>
          <li className="flex gap-2 items-center justify-center">
            <BsFillTelephoneFill />
            <p>(049) 521-0732</p>
          </li>
          <li className="flex gap-2 items-center justify-center">
            <MdPhoneAndroid />
            <p className="">(+63) 908-202-0749 | (+63) 926-363-9722</p>
          </li>
          <li className={ulStyle}>
            <Btn
              link={"https://www.facebook.com/frontlinechristianacademy"}
              customClass={
                "bg-[#3b5897] text-white px-6 py-2 rounded-md inline-block my-1 hover:bg-[#1573e5]"
              }
              text={"Facebook"}
            />
            <Btn
              link={"https://fca.edu.ph/faq"}
              customClass={
                "border border-[black] px-6 py-2 rounded-md inline-block my-1 hover:bg-[#28941e] hover:text-white"
              }
              text={"FAQ's"}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderDetails;
