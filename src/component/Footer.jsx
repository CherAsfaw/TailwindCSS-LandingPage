import React from "react";
import style from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

function Footer () {
  return (
    <section className={`${style.flexCenter} ${style.paddingY} flex-col`}>
      <div className={`${style.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10 md:ml-0 ml-4">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${style.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 md:px-0 px-4">
          {footerLinks.map((footerLink, i) => (
            <div key={i}>
              <h4 className="font-poppins text-lg font-medium text-white mb-4">
                {footerLink.title}
              </h4>
              <ul>
                {footerLink.links.map((link, index) => (
                  <li
                    key={index}
                    className={`font-poppins text-base leading-6 text-dimWhite hover-text-secondary transition-colors duration-300 cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
       
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins text-lg  font-normal text-center text-white mb-4">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6 justify-center items-center">
          {socialMedia.map((social, i) => (
            <img
              key={i}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                i !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
