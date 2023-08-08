import React, { useState } from "react";
import whiteLogo from "../../../assets/images/white-logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  useToast,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/reducer/authReducer";
import { BeatLoader } from "react-spinners";

const Navbar = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      localStorage.removeItem("admin-token");
      dispatch(authActions.adminLogout([]));
      toast({
        title: "Your account has been logout.",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
      navigate("/admin/login");
      setIsSubmitting(false);
    }, [1000])
  };

  const currentAdmin = useSelector(state => state.auth.currentAdmin);

  return (
    <div className=" bg-[#273135] text-white py-7">
      <div className=" w-[95%] mx-auto flex items-center justify-between">
        <div className=" flex items-center">
          <img src={whiteLogo} alt="logo" className=" w-[220px]" />
          {/* <div className=" ml-8 flex items-center bg-white rounded-sm">
            <BiSearchAlt2 className="text-black/70 text-xl mt-1 mx-2" />
            <input
              type="text"
              className="py-1 bg-transparent focus:text-black w-[260px] "
              placeholder="Search..."
            />
          </div> */}
        </div>
        <div className=" flex gap-12">
          {/* <div className=" flex items-center relative">
            <BsFillBellFill className="text-xl" />
            <span className=" bg-red-500 text-xs w-4 rounded-full text-center absolute ml-3 mb-5">
              1
            </span>
          </div> */}
          <div className=" flex gap-4 items-center mr-8">
            {/* <img
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              className=" w-12 h-12 rounded-full object-cover mx-auto"
            /> */}
            <div>
              <Menu>
                <MenuButton>
                  <div className=" flex gap-2">
                    <div className=" text-left">
                      <p className="text-lg font-medium">{currentAdmin.name}</p>
                      <p className="text-sm text-gray-200">Admin</p>
                    </div>
                    <BiChevronDown className=" mt-[5px] text-xl" />
                  </div>
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={logoutHandler}><p className=" text-black">{isSubmitting ? (
                  <BeatLoader color="#fff" size={7} />
                ) : (
                  "Logout"
                )}</p></MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
