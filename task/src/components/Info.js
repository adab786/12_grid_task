import React from "react";
import Address from "../components/Address.png";
import image from "../components/image.png";

function Info() {
  return (
    <div className="flex absolute left-80 ">
      <div className="">
        <img
          style={{ width: 500, height: 370 }}
          className="relative left-9"
          src={Address}
          alt="company"
        ></img>
      </div>
      <div className="my-6">
        <img
          style={{ width: 500, height: 400 }}
          src={image}
          alt="address"
        ></img>
      </div>
    </div>
  );
}

export default Info;
