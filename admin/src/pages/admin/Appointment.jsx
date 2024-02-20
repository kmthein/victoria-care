import React from "react";
import {
  Link,
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import TableForm from "../../components/admin/table/TableForm";
import { TiEdit } from "react-icons/ti";
import { MdDeleteForever, MdReadMore } from "react-icons/md";
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
import axios from "axios";
import { url } from "../../api/api";

const Appointment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = React.useRef();

  const appointments = useRouteLoaderData("admin-appointment");

  return (
    <>
      <div className=" flex justify-between mx-8 mt-4 items-center">
        <h5 className=" text-xl text-black/70">Appointments</h5>
      </div>
      <TableForm>
        <div className="flex px-4 py-4 border-b-[1px] font-medium sticky top-0 bg-[#e2e2e2]">
          <p className="w-[20%]">Patient</p>
          <p className="w-[25%]">Email</p>
          <p className="w-[20%]">Doctor</p>
          <p className="w-[20%]">Date</p>
          <p className="w-[20%]">Time</p>
          <p className="w-[10%] text-center">Actions</p>
        </div>
        {appointments &&
          appointments.length > 0 &&
          appointments.map((a) => (
            <div className="flex px-4 py-4 border-b-[1px] bg-[#f8f8f8]">
              <p className="w-[20%]">{a.patient_name}</p>
              <p className="w-[25%]">{a.email ? a.email : "-"}</p>
              <p className="w-[20%]">{a.doctor_name}</p>
              <p className="w-[20%]">{a.date}</p>
              <p className="w-[20%]">{a.time}</p>
              <p className="flex gap-4 w-[10%] justify-center">
                <Link to={`${a.id}`}>
                  <MdReadMore className="text-2xl" title="View details" />
                </Link>
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
          ))}
      </TableForm>
    </>
  );
};

export default Appointment;

export const loader = async () => {
  const res = await axios.get(`${url}/appointment/all`);
  if (!res.ok) {
  }
  return res.data;
};
