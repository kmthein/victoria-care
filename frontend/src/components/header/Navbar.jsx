import React from "react";
import mainLogo from "../../assets/images/main-logo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { HiMenuAlt1 } from "react-icons/hi";
import { MenuDrawer } from "./MenuDrawer";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className=" sticky z-[1000] bg-white top-0">
      <div className=" py-4 w-[80%] mx-auto nav  ">
        <motion.div
          className=" flex items-center justify-between"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="/">
            <img src={mainLogo} alt="logo" className="w-[200px] md:w-[230px]" />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <motion.div className="flex gap-6 font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                    : ""
                }
              >
                <motion.li whileHover={{ scale: 1.03, color: "#051c44" }}>
                  Home
                </motion.li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                    : ""
                }
              >
                <motion.li whileHover={{ scale: 1.03, color: "#051c44" }}>
                  About
                </motion.li>
              </NavLink>
              <NavLink
                to="/doctor"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                    : ""
                }
              >
                <motion.li whileHover={{ scale: 1.03, color: "#051c44" }}>
                  Doctor
                </motion.li>
              </NavLink>
              <NavLink
                to="/specialty"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                    : ""
                }
              >
                <motion.li whileHover={{ scale: 1.03, color: "#051c44" }}>
                  Specialty
                </motion.li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                    : ""
                }
              >
                <motion.li
                  whileHover={{ scale: 1.03, color: "#051c44" }}
                  transition={{ duration: 0.5 }}
                >
                  Contact
                </motion.li>
              </NavLink>
            </motion.div>
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} className=' text-xl' /> */}
            <div>
              <motion.button
                className=" bg-[#416AB2] text-white py-2 px-6 rounded-md hover:bg-[#6b8ec9]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                Login
              </motion.button>
            </div>
          </div>
          <div className=" lg:hidden">
            <MenuDrawer className=" text-3xl text-[#061242]" />
          </div>
        </motion.div>
      </div>
      {/* <div className=" absolute bg-black/80 h-[500px] w-full z-[1000] top-0"></div> */}
    </div>
  );
};

export default Navbar;
