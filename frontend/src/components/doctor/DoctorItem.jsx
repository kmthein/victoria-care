import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useDisclosure,
  Button,
  Box,
  ButtonGroup,
  Portal,
} from "@chakra-ui/react";
import AuthForm from "../auth/AuthForm";
import { appointActions } from "../../store/reducer/appointReducer";

const DoctorItem = ({
  id,
  name,
  qualification,
  fees,
  schedules_day,
  schedules_time,
  specialty_id
}) => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const initialFocusRef = React.useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isRegOpen,
    onOpen: onRegOpen,
    onClose: onRegClose,
  } = useDisclosure();
  const cancelRef = React.useRef();

  const dispatch = useDispatch();

  const makeAppointment = (id, name, schedules_day, schedules_time, specialty_id) => {
    const selectDoctor = {
      id,
      name,
      schedules_day,
      schedules_time,
      fees,
      specialty_id
    }
    dispatch(appointActions.makeAppointment(selectDoctor))
  }

  return (
    <div className=" bg-[#F6F4F4] py-6 px-8 my-4">
      <div className="flex justify-between">
        <div className="w-[50%]">
          <h6 className="font-medium">{name}</h6>
          <p className=" text-[14px]">{qualification}</p>
        </div>
        <div className="text-[14px]">
          <p className="text-right">
            {schedules_day.length > 0 &&
              schedules_day.map((day, i) => <span key={i}>{day}{" "} </span>)}
          </p>
          <p className="text-right">
            {schedules_time.length > 0 &&
              schedules_time.map((time, i) => <p key={i}>{time}</p>)}
          </p>
          <div className=" mt-2 text-sm flex justify-end">
            {isLoggedIn ? (
              <Link to="/appointment" onClick={() => makeAppointment(id, name, schedules_day, schedules_time, specialty_id)}>
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
                  className="bg-[#19376D] text-white py-2 px-2 rounded-sm"
                >
                  Make Appointment
                </motion.button>
              </Link>
            ) : (
              <>
                <Popover>
                  <PopoverTrigger>
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                      }}
                      className="bg-[#19376D] text-white py-2 px-2 rounded-sm"
                    >
                      Make Appointment
                    </motion.button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>
                        <h5 className=" font-medium">Login now</h5>
                      </PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <p className=" mb-2">
                          You need to log in account to make an appoinment.
                        </p>
                        <div className=" flex justify-end gap-2">
                          <button
                            className=" my-2 bg-blue-600 text-white rounded-sm px-3 py-1"
                            onClick={onOpen}
                          >
                            Login now
                          </button>
                        </div>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
                <AuthForm
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                  isRegOpen={isRegOpen}
                  onRegOpen={onRegOpen}
                  onRegClose={onRegClose}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorItem;
