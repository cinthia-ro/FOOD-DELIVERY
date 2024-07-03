import React from "react";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  console.log(sideNav);
  return (
    <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setSideNav(!sideNav)}>
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2l sm:text-3xl lg:text-4xl px-2">
          yum<span className="font-bold">Eats</span>
        </h1>
        <div className="bg-gray-200 rounded-full p-1 text-[14px] items-center hidden lg:flex">
          <p className="bg-orange-700 text-white rounded-full p-2 text-bold ">
            Free
          </p>
          <p className="p-2 text-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none "
          type="text"
          placeholder="search meals"
        />
      </div>
      <button className="bg-orange-700 text-white rounded-full hidden md:flex items-center py-2  ">
        Cart
      </button>
      {sideNav ? (
        <div
          onClick={() => setSideNav(!sideNav)}
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0 "
        ></div>
      ) : (
        ""
      )}
      <div
        className={
          sideNav
            ? "h-screen bg-white z-10 duration-300 fixed top-0 left-0 w-[300px]"
            : "h-screen bg-black/60 z-10 fixed duration-300 top-0 left-[-100%] w-[300px]"
        }
      >
        <AiOutlineClose
          size={23}
          onClick={() => setSideNav(!sideNav)}
          className="absolute right-4 top-4 cuisor-pointer"
        />
        <h2 className="text-2xl p-4">
          Yum <span className=" text-orange-700 font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="flex text-xl py-4">
              <CgProfile
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My account
            </li>
            <li className="flex text-xl py-4">
              <TbTruckReturn
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              Delivery
            </li>
            <li className="flex text-xl py-4">
              <MdFavorite
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My favorite
            </li>
            <li className="flex text-xl py-4">
              <FaGoogleWallet
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              Wallet
            </li>
            <li className="flex text-xl py-4">
              <IoMdHelpCircle
                size={25}
                className="mr-4 text-black rounded-full"
              />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
