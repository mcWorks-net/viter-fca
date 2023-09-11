import React from "react";

const Btn = ({ link, customClass, text }) => {
  return (
    <div>
      <a href={link} className={customClass}>
        {text}
      </a>
    </div>
  );
};

export default Btn;
