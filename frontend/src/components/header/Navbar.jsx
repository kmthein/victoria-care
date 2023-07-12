import React from "react";
import mainLogo from "../../assets/images/main-logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { HiMenuAlt1 } from "react-icons/hi";
import { MenuDrawer } from "./MenuDrawer";

const Navbar = () => {
  return (
    <div className=" sticky z-[1000] bg-white top-0">
      <div className=" py-4 w-[80%] mx-auto nav  ">
        <div className=" flex items-center justify-between">
          <img src={mainLogo} alt="logo" className="w-[200px] md:w-[230px]" />
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6 font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                    : ""
                }
              >
                About
              </NavLink>
              <NavLink
                to="/doctor"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                    : ""
                }
              >
                Doctor
              </NavLink>
              <NavLink
                to="/specialty"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                    : ""
                }
              >
                Specialty
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                    : ""
                }
              >
                Contact
              </NavLink>
            </div>
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} className=' text-xl' /> */}
            <div>
              <button className=" bg-[#416AB2] text-white py-2 px-6 rounded-md">
                Login
              </button>
            </div>
          </div>
          <div className=" lg:hidden">
            <MenuDrawer className=" text-3xl text-[#061242]" />
          </div>
          </div>
        </div>
      {/* <div className=" absolute bg-black/80 h-[500px] w-full z-[1000] top-0"></div> */}
    </div>
  );
};

export default Navbar;
