import React, { useState } from "react";
import Logo from "../Image/job.png";
import { Link } from "react-router-dom";
import {
  MdHome,
  MdMenu,
  MdWork,
  MdOutlineDesignServices,
  MdLogout,
} from "react-icons/md";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="fixed z-50 w-screen p-3 px-14 bg-white">
      {/* desktop and tablets */}
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-x1 font-bold">RecruitersZone</p>
        </div>
        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Jobs
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Applications
          </li>
          <Link to={"/login"}>
            <button className="text-sm px-4 py-3 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              Login / Sign Up
            </button>
          </Link>
        </ul>
      </div>

      {/* mobile */}
      <div className="flex item-center justify-between md:hidden w-full">
        <div className="flex items-center justify-between "></div>
        <Link to={"/"} className="flex items-center gap-2 ">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-x1 font-bold">RecruitersZone</p>
        </Link>
        <div className="relative">
          <MdMenu onClick={() => setIsMenu(!isMenu)} />
          {isMenu && (
            <div className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-8 right-0">
              <ul className="flex flex-col">
                <li
                  className="flex text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 gap-3"
                  onClick={() => setIsMenu(false)}
                >
                  <div><Link to={"/login"}>
            <button className="text-xs px-4 w-full py-3 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              Login / Sign Up
            </button>
          </Link></div>
                </li>
                <li
                  className="flex text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 gap-3"
                  onClick={() => setIsMenu(false)}
                >
                  <div className="py-1">
                  <MdHome />
                  </div>
                  <div>Home</div>
                </li>
                <li
                  className="flex text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 gap-3"
                  onClick={() => setIsMenu(false)}
                >
                  <div className="py-1">
                    <MdWork />
                  </div>
                  <div>Job</div>
                </li>
                <li
                  className="flex text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2 gap-3"
                  onClick={() => setIsMenu(false)}
                >
                  <div className="py-1">
                    <MdOutlineDesignServices />
                  </div>
                  <div>Applications</div>
                </li>
                
              </ul>
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer bg-blue-300 hover:bg-blue-400 transition-all duration-100 ease-in-out text-textColor text-base">
                <MdLogout />
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
