import axios from "axios";
import React, { useEffect } from "react";
import { url } from "../../api/api";
import {
  Link,
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import { TiEdit } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import TableForm from "../../components/admin/table/TableForm";
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

const Patients = () => {
  const patients = useRouteLoaderData("patient");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/patient");
  }, [Patients]);

  const deletePatientHandler = async (id) => {
    onClose();
    const res = await axios.post(`${url}/user/patients/delete`, { id: id });
    navigate("/admin/patient");
  };

  return (
    <>
      <div className=" flex justify-between mx-8 mt-4 items-center">
        <h5 className=" text-xl text-black/70">Patients List</h5>
        {/* <button className=" bg-[#303B40] text-white py-2 px-2 text-sm">
          Add New Patient
        </button> */}
      </div>
      <TableForm>
        <div className="flex px-4 py-4 border-b-[1px] text-gray-500 font-medium sticky top-0 bg-[#f8f8f8]">
          <p className=" w-[200px]">Name</p>
          <p className=" w-[200px]">Email</p>
          <p className=" w-[200px]">Phone</p>
          <p className=" w-[200px]">Birthdate</p>
          <p>Actions</p>
        </div>
        {patients &&
          patients.length > 0 &&
          patients.map((patient) => (
            <div key={patient.id} className="flex px-4 py-4 border-b-[1px]">
              <p className=" w-[200px]">{patient.name}</p>
              <p className=" w-[200px]">{patient.email}</p>
              <p className=" w-[200px]">{patient.phone_num}</p>
              <p className=" w-[200px]">{patient.dob}</p>
              <p className="flex gap-4">
                <Link to={`edit/${patient.id}`}>
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
                          Are you sure to delete ths patient? 
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() => deletePatientHandler(patient.id)}
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

export default Patients;

export const loader = async () => {
  const res = await axios.get(`${url}/user/patients`);
  if (!res.ok) {
  }
  return res.data;
};
