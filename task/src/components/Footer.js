import React from "react";
import svg from "../../src/svg.png";

const Footer = () => {
  return (
    <div className="relative top-[700px] w-fit p-2 m-1 left-3">
      <img style={{ width: 300, height: 30 }} alt="footer" src={svg}></img>
    </div>
  );
};

export default Footer;
