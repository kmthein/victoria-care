import React, { useEffect, useState } from "react";
import {
  Link,
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { AiOutlinePlusSquare } from "react-icons/ai";
import axios from "axios";
import { url } from "../../../api/api";
import { useToast } from "@chakra-ui/react";

const AddSpecialty = () => {
  const newDataChangeHandler = (e) => {
    setNewData(e.target.value);
  };

  const [newData, setNewData] = useState("");

  const toast = useToast();

  const navigate = useNavigate();

  const addNewSpecialty = async () => {
    try {
      const res = await axios.post(`${url}/specialty/new`, {name: newData})
      toast({
        title: "New specialty added successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate('/admin/specialty');
    } catch (error) {
      toast({
        title: "Specialty name already existed.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <>
      <div className=" flex justify-between mx-8 mt-4 items-center">
        <h5 className=" text-xl text-black/70">Add New Specialty</h5>
      </div>
      <div className=" mx-8 add-form w-[60%]">
        <div className=" my-4 flex gap-4">
          <div className=" w-full">
            <label
              htmlFor="name"
              className="block text-[#6d6d6d] font-medium text-md mb-1"
            >
              Name
            </label>
            <input
              type="text"
              className=" w-full h-[40px] rounded-md bg-[#fcfcfc]"
              name="name"
              onChange={newDataChangeHandler}
            />
          </div>
        </div>
        <div className=" my-10 flex justify-end gap-4">
          <Link to="/admin/specialty">
            <button className=" border border-gray-400 text-gray-600 py-2 rounded-md w-20">
              Cancel
            </button>
          </Link>
          <button className=" bg-[#303B40] text-white py-[9px] w-20 rounded-md" onClick={addNewSpecialty}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddSpecialty;
