import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../../api/api";
import { Link, useLoaderData, useNavigate, useRouteLoaderData } from "react-router-dom";
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
  useToast,
} from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";
import { motion } from "framer-motion";

const Specialty = () => {
  const specialties = useRouteLoaderData('admin-specialty');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/specialty');
  }, [Specialty])

  const toast = useToast();

  const deleteSpecialtyHandler = async (id) => {
    onClose();
    const res = await axios.post(`${url}/specialty/delete`, { id: id });
    toast({
      title: "Specialty deleted successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate('/specialty');
  };

  const [input, setInput] = useState("");

  const [isSearched, setIsSearched] = useState(false);

  const [searchSpecialty, setSearchSpecialty] = useState();

  const searchChangeHandler = (e) => {
    setInput((prev) => ({ [e.target.name]: e.target.value }));
  };

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${url}/specialty/search`, input);
    setSearchSpecialty(res.data);
    setIsSearched(true);
  };

  return (
    <>
      <div className=" flex justify-between mx-8 mt-4 items-center">
        <h5 className=" text-xl text-black/70">Specialty List</h5>
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
        <Link to='new'>
          <button className=" bg-[#303B40] text-white py-2 px-2 text-sm">Add New Specialty</button>
        </Link>
      </div>
      <div className=" bg-[#f8f8f8] mt-4 mb-8 mx-8 rounded-md h-[72vh] overflow-scroll scroll">
        <div className="flex px-4 py-4 border-b-[1px] font-medium sticky top-0 bg-[#e2e2e2]">
          <p className="w-[300px]">ID</p>
          <p className="w-[450px]">Name</p>
          <p>Actions</p>
        </div>
        {!isSearched && specialties &&
          specialties.map((specialty, index) => (
            <div key={specialty.id} className="flex px-4 py-4 border-b-[1px]">
              <p className="w-[300px]">{index + 1}</p>
              <p className="w-[450px]">{specialty.specialty_name}</p>
              <p className="flex gap-4">
                <Link to={`edit/${specialty.id}`}>
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
                          Delete Specialty
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Are you sure to delete this specialty?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() => deleteSpecialtyHandler(specialty.id)}
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
          {isSearched && searchSpecialty &&
          searchSpecialty.map((specialty, index) => (
            <div key={specialty.id} className="flex px-4 py-4 border-b-[1px]">
              <p className="w-[300px]">{index + 1}</p>
              <p className="w-[450px]">{specialty.specialty_name}</p>
              <p className="flex gap-4">
                <Link to={`edit/${specialty.id}`}>
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
                          Delete Specialty
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Are you sure to delete this specialty?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() => deleteSpecialtyHandler(specialty.id)}
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
