import axios from "axios";
import React from "react";
import { url } from "../../api/api";
import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";
import { TiEdit } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
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

const Specialty = () => {
  const specialties = useRouteLoaderData('admin-specialty');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <div className=" flex justify-between mx-8 mt-4 items-center">
        <h5 className=" text-xl text-black/70">Patients List</h5>
        <Link to='new'>
          <button className=" bg-[#303B40] text-white py-2 px-2 text-sm">Add New Specialty</button>
        </Link>
      </div>
      <div className=" bg-[#f8f8f8] mt-4 mb-8 mx-8 rounded-md h-[75vh] overflow-scroll scroll">
        <div className="flex px-4 py-4 border-b-[1px] text-gray-500 font-medium sticky top-0 bg-[#f8f8f8]">
          <p className="w-[300px]">ID</p>
          <p className="w-[450px]">Name</p>
          <p>Actions</p>
        </div>
        {specialties &&
          specialties.map((specialty) => (
            <div key={specialty.id} className="flex px-4 py-4 border-b-[1px]">
              <p className="w-[300px]">{specialty.id}</p>
              <p className="w-[450px]">{specialty.specialty_name}</p>
              <p className="flex gap-4">
                <Link to={`edit/`}>
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
      </div>
    </>
  );
};

export default Specialty;

export const loader = async () => {
  const res = await axios.get(`${url}/specialty`);
  return res.data;
};
