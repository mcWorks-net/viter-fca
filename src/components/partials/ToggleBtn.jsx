import React from "react";

const ToggleBtn = ({ handleClick }) => {
  return (
    <>
      <div className="toggleBtn lg:hidden" onClick={handleClick}>
        {console.log(handleClick)}
        <span className="w-10 h-1 bg-black block "></span>
        <span className="w-10 h-1 bg-black block my-1"></span>
        <span className="w-10 h-1 bg-black block"></span>
      </div>
    </>
  );
};

export default ToggleBtn;
