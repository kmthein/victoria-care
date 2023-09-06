import React, { useEffect, useState } from "react";
import TableForm from "../../components/admin/table/TableForm";
import axios from "axios";
import { url } from "../../api/api";
import {
  Link,
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import { TiEdit } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { motion } from "framer-motion";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const Doctor = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = React.useRef();

  const doctors = useRouteLoaderData("doctor");

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/doctor");
  }, [Doctor]);

  const deleteDoctorHandler = async (id) => {
    onClose();
    const res = await axios.post(`${url}/doctor/delete`, { id: id });
    navigate("/admin/doctor");
  };

  const [input, setInput] = useState("");

  const [isSearched, setIsSearched] = useState(false);

  const [searchDoctors, setSearchDoctors] = useState();

  const searchChangeHandler = (e) => {
    setInput((prev) => ({ [e.target.name]: e.target.value }));
  };

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${url}/doctor/search`, input);
    setSearchDoctors(res.data);
    setIsSearched(true);
  };

  return (
    <>
      <div className=" flex justify-between mx-8 mt-4 items-center">
        <h5 className=" text-xl text-black/70">Doctors List</h5>
        <div className=" ml-[50%] flex items-center bg-white rounded-sm">
          <form onSubmit={searchSubmitHandler}>
            <div className=" flex items-center gap-2">
              <input
                type="text"
                placeholder="Search by name"
                name="search"
                onChange={searchChangeHandler}
                className="w-full text-[15px] focus:outline-none pl-2"
              />
              <motion.button
                whileHover={{ scale: 0.8 }}
                transition={{ duration: 0.2 }}
                title="search"
                type="submit"
              >
                <BiSearchAlt2 className=" text-2xl text-black mt-1" />
              </motion.button>
            </div>
          </form>
        </div>
        <Link to="new">
          <button className=" bg-[#303B40] text-white py-2 px-2 text-sm">
            Add New Doctor
          </button>
        </Link>
      </div>
      <TableForm>
        <div className="flex px-4 py-4 border-b-[1px] font-medium sticky top-0 bg-[#e2e2e2]">
          <p className="w-[200px]">Name</p>
          <p className="w-[170px]">Fees</p>
          <p className="w-[180px]">Phone</p>
          <p className="w-[100px]">Day</p>
          <p className="w-[200px]">Time</p>
          <p>Actions</p>
        </div>
        {!isSearched && doctors &&
          doctors.length > 0 &&
          doctors.map((doctor) => {
            const { schedule_day, schedule_time } = doctor;
            const days = JSON.parse(schedule_day);
            const times = JSON.parse(schedule_time);
            return (
              <div
                key={doctor.id}
                className="flex px-4 py-4 border-b-[1px] bg-[#f8f8f8]"
              >
                <p className="w-[200px]">{doctor.name}</p>
                <p className="w-[170px]">${doctor.doctor_fees}</p>
                <p className="w-[180px]">{doctor.contact_no}</p>
                <p className="w-[100px]">
                  {days.map((sche) => (
                    <p key={sche.id}>{sche.day}</p>
                  ))}
                </p>
                <p className="w-[200px]">
                  {times.map((sche) => (
                    <p>{sche.time}</p>
                  ))}
                </p>
                <p className="flex gap-4">
                  <Link to={`edit/${doctor.id}`}>
                    <TiEdit className=" text-xl cursor-pointer" />
                  </Link>
                  <MdDeleteForever
                    className=" text-xl text-red-500 cursor-pointer"
                    onClick={onOpen}
                  />
                  <>
                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Doctor
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Are you sure to delete this doctor?
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="red"
                              onClick={() => deleteDoctorHandler(doctor.id)}
                              ml={3}
                            >
                              Delete
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                  </>
                </p>
              </div>
            );
          })}
        {isSearched && searchDoctors &&
          searchDoctors.length > 0 &&
          searchDoctors.map((doctor) => {
            const { schedule_day, schedule_time } = doctor;
            const days = JSON.parse(schedule_day);
            const times = JSON.parse(schedule_time);
            return (
              <div
                key={doctor.id}
                className="flex px-4 py-4 border-b-[1px] bg-[#f8f8f8]"
              >
                <p className="w-[200px]">{doctor.name}</p>
                <p className="w-[170px]">${doctor.doctor_fees}</p>
                <p className="w-[180px]">{doctor.contact_no}</p>
                <p className="w-[100px]">
                  {days.map((sche) => (
                    <p key={sche.id}>{sche.day}</p>
                  ))}
                </p>
                <p className="w-[200px]">
                  {times.map((sche) => (
                    <p>{sche.time}</p>
                  ))}
                </p>
                <p className="flex gap-4">
                  <Link to={`edit/${doctor.id}`}>
                    <TiEdit className=" text-xl cursor-pointer" />
                  </Link>
                  <MdDeleteForever
                    className=" text-xl text-red-500 cursor-pointer"
                    onClick={onOpen}
                  />
                  <>
                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Doctor
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Are you sure to delete this doctor?
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="red"
                              onClick={() => deleteDoctorHandler(doctor.id)}
                              ml={3}
                            >
                              Delete
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                  </>
                </p>
              </div>
            );
          })}
      </TableForm>
    </>
  );
};

export default Doctor;

export const loader = async () => {
  const res = await axios.get(`${url}/doctor`);
  if (!res.ok) {
  }
  return res.data;
};
