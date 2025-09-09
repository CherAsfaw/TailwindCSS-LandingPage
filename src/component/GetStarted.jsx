import React from "react";
import style from "../style";
import { arrowUp } from "../assets";

function GetStarted() {
  return (
    <div
      className={`${style.flexCenter} w-[140px] h-[140px] rounded-full 
      bg-linear-to-r from-cyan-500 to-blue-500 p-2 cursor-pointer`}
    >
      <div className="flex flex-col justify-center items-center bg-[#00040f] hover:bg-[#1c2f66] duration-500 w-full h-full rounded-full">
        <div className={`${style.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className={`${style.bgGradient}`}>Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className={`${style.bgGradient}`}>Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
