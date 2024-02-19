import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useRouteLoaderData } from "react-router-dom";
import { authActions } from "../../store/reducer/authReducer";

export function MenuDrawer({ onLoginOpen }) {
  const isLoggedIn = useRouteLoaderData("root");

  const currentUser = useSelector((state) => state.auth.currentUser);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(authActions.logout([]));
    navigate("/");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  return (
    <div className="cursor-pointer">
      <HiMenuAlt1 className="text-3xl" onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <div className=" menu-drawer text-lg mt-10 w-full">
              <ul className=" flex flex-col justify-center items-center">
                <li>
                  <NavLink
                    to="/"
                    onClick={onClose}
                    className={({ isActive }) =>
                      isActive
                        ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onClick={onClose}
                    className={({ isActive }) =>
                      isActive
                        ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                        : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/doctor"
                    onClick={onClose}
                    className={({ isActive }) =>
                      isActive
                        ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                        : ""
                    }
                  >
                    Doctor
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/specialty"
                    onClick={onClose}
                    className={({ isActive }) =>
                      isActive
                        ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                        : ""
                    }
                  >
                    Specialty
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    onClick={onClose}
                    className={({ isActive }) =>
                      isActive
                        ? " border-b-2 font-semibold text-[#001C30] border-[#001C30]"
                        : ""
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  {!isLoggedIn ? (
                    <button
                      className=" bg-[#416AB2] text-white py-2 px-6 rounded-md"
                      onClick={() => {
                        onClose();
                        onLoginOpen();
                      }}
                    >
                      Login
                    </button>
                  ) : (
                    <Menu>
                      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                        {currentUser.name}
                      </MenuButton>
                      <MenuList>
                        <Link to="/user/profile">
                          <MenuItem>My Profile</MenuItem>
                        </Link>
                        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                      </MenuList>
                    </Menu>
                  )}
                </li>
              </ul>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
