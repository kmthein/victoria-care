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
import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
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
                  <button className=" bg-[#416AB2] text-white py-2 px-6 rounded-md" onClick={onClose}>
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
