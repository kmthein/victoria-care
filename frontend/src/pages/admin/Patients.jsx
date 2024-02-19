import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { BiSearchAlt2 } from "react-icons/bi";
import { motion } from "framer-motion";

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

  const [input, setInput] = useState("");

  const [isSearched, setIsSearched] = useState(false);

  const [searchUsers, setSearchUsers] = useState();

  const searchChangeHandler = (e) => {
    setInput((prev) => ({ [e.target.name]: e.target.value }));
  };

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${url}/user/search`, input);
    setSearchUsers(res.data);
    setIsSearched(true);
  };

  return (
    <>
      <div className=" flex justify-between mx-8 mt-4 items-center">
        <h5 className=" text-xl text-black/70">Patients List</h5>
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
        {/* <button className=" bg-[#303B40] text-white py-2 px-2 text-sm">
          Add New Patient
        </button> */}
      </div>
      <TableForm>
        <div className="flex px-4 py-4 border-b-[1px] font-medium sticky top-0 bg-[#e2e2e2]">
          <p className=" w-[200px]">Name</p>
          <p className=" w-[200px]">Email</p>
          <p className=" w-[200px]">Phone</p>
          <p className=" w-[200px]">Birthdate</p>
          <p>Actions</p>
        </div>
        {!isSearched && patients &&
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
                {/* <MdDeleteForever
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
                          Are you sure to delete this patient? 
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
                </> */}
              </p>
            </div>
          ))}
          {isSearched && searchUsers &&
          searchUsers.length > 0 &&
          searchUsers.map((patient) => (
            <div key={patient.id} className="flex px-4 py-4 border-b-[1px]">
              <p className=" w-[200px]">{patient.name}</p>
              <p className=" w-[200px]">{patient.email}</p>
              <p className=" w-[200px]">{patient.phone_num}</p>
              <p className=" w-[200px]">{patient.dob}</p>
              <p className="flex gap-4">
                <Link to={`edit/${patient.id}`}>
                  <TiEdit className=" text-xl cursor-pointer" />
                </Link>
                {/* <MdDeleteForever
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
                          Are you sure to delete this patient? 
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
                </> */}
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
