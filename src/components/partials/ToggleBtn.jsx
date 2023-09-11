import React from "react";

const ToggleBtn = ({ navOpen, handleClick }) => {
  return (
    <>
      <div
        className={`toggleBtn lg:hidden ${navOpen ? "active" : ""}`}
        onClick={handleClick}
      >
        {console.log(navOpen)}
        <span className="w-10 h-1 bg-black block "></span>
        <span className="w-10 h-1 bg-black block my-1"></span>
        <span className="w-10 h-1 bg-black block"></span>
      </div>
    </>
  );
};

export default ToggleBtn;
