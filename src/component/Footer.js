import React from "react";
import { COMPANY, Icons, PRODUCTS, RESOURCES, SUPPORT } from "./Menus";
const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className=" ">
      <div className="bg-slate-800 ">
        <div className=" pt-7 px-5 pb-5 flex flex-col gap-2.5 sm:flex-row sm:justify-between sm:h-[153px] sm:items-center ">
          <h1 className="text-white text-3xl">
            <span className="text-teal-400 pr-1 sm:block">Free</span>
            until you're ready to launch
          </h1>
          <form
            className="flex flex-col gap-2.5 sm:flex-row sm:items-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder="Enter Your ph.no"
              className="bg-white  text-slate-400  rounded p-2  outline-0"
            />
            <button className="bg-teal-400 text-white rounded p-2 ">
              Request Code
            </button>
          </form>
        </div>
      </div>
      <div className="bg-black">
        <div className=" pt-7 px-5 pb-5 sm:h-[359px] sm:flex sm:flex-col sm:justify-between ">
          <div className="sm:flex flex-row justify-between">
            <div className="mt-4">
              <h2 className="text-white">PRODUCTS</h2>
              <ul>
                {PRODUCTS.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-slate-400 hover:text-teal-400 cursor-pointer"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="text-white">RESOURCES</h2>
              <ul>
                {RESOURCES.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-slate-400 hover:text-teal-400 cursor-pointer"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="text-white">COMPANY</h2>
              <ul>
                {COMPANY.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-slate-400 hover:text-teal-400 cursor-pointer"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-4">
              <h2 className="text-white">SUPPORT</h2>
              <ul>
                {SUPPORT.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-slate-400 hover:text-teal-400  cursor-pointer"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* <div className="flex flex-col items-center sm:grid sm:items-center sm:grid-cols-3  "> */}
          <div className="flex flex-col items-center sm:grid sm:items-center sm:gridTemplateColumns-gtc ">
            <p className="text-slate-400 mt-8 mb-4 sm:flex sm:justify-center sm:items-center sm:mt-4">
              <span>&#169;</span> {new Date().getFullYear()} Appy All rights
              reserved.
            </p>
            <p className="text-slate-400 my-4  sm:flex sm:justify-center sm:items-center">
              Terms - Privacy Policy
            </p>
            <ul className="flex justify-around w-full my-4 sm:w-auto sm:justify-center ">
              {Icons.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`p-2 h-7 flex ${item.name} cursor-pointer text-teal-400 sm:mx-2 hover:text-white flex-col justify-center items-center hover:bg-teal-400 bg-slate-500 rounded-full `}
                  ></li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
