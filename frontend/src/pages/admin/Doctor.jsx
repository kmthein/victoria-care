import React, { useEffect } from "react";
import TableForm from "../../components/admin/table/TableForm";
import axios from "axios";
import { url } from "../../api/api";
import { Link, useLoaderData, useNavigate, useRouteLoaderData } from "react-router-dom";
import { TiEdit } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
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

  const doctors = useRouteLoaderData('doctor');

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/doctor");
  }, [Doctor]);

  const deleteDoctorHandler = async (id) => {
    onClose();
    const res = await axios.post(`${url}/doctor/delete`, { id: id });
    navigate("/admin/doctor");
  };

  return (
    <>
      <div className=" flex justify-between mx-8 mt-4 items-center">
        <h5 className=" text-xl text-black/70">Doctors List</h5>
        <Link to='new'>
          <button className=" bg-[#303B40] text-white py-2 px-2 text-sm">Add New Doctor</button>
        </Link>
      </div>
      <TableForm>
        <div className="flex px-4 py-4 border-b-[1px] text-gray-500 font-medium sticky top-0 bg-[#f8f8f8]">
          <p className="w-[200px]">Name</p>
          <p className="w-[200px]">Qualification</p>
          <p className="w-[180px]">Phone</p>
          <p className="w-[100px]">Day</p>
          <p className="w-[200px]">Time</p>
          <p>Actions</p>
        </div>
        {doctors &&
          doctors.length > 0 &&
          doctors.map((doctor) => {
            const { schedule_day, schedule_time } = doctor;
            const days = JSON.parse(schedule_day);
            const times = JSON.parse(schedule_time);
            return (
              <div key={doctor.id} className="flex px-4 py-4 border-b-[1px] bg-[#f8f8f8]">
                <p className="w-[200px]">{doctor.name}</p>
                <p className="w-[200px]">{doctor.qualification}</p>
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
                          Delete Patient
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Are you sure to delete ths doctor? 
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
