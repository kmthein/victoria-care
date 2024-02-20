import axios from "axios";
import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { url } from "../../../api/api";
import { useToast } from "@chakra-ui/react";

const EditSpecialty = () => {
  const specialty = useLoaderData();

  const { id, specialty_name } = specialty[0];

  const newDataChangeHandler = (e) => {
    setNewData(e.target.value);
  };

  const [newData, setNewData] = useState("");

  const toast = useToast();

  const navigate = useNavigate();

  const updateSpecialty = async () => {
    try {
      const res = await axios.put(`${url}/specialty/edit/${id}`, {
        name: newData,
        id: id,
      });
      setNewData('');
      toast({
        title: "Specialty updated successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/admin/specialty");
    } catch (error) {
      toast({
        title: "Specialty updated failed.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className=" flex justify-between mx-8 mt-4 items-center">
        <h5 className=" text-xl text-black/70">Edit Specialty</h5>
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
              defaultValue={specialty_name && specialty_name}
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
          <button
            className=" bg-[#303B40] text-white py-[9px] w-20 rounded-md"
            onClick={updateSpecialty}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default EditSpecialty;

export const loader = async ({ req, params }) => {
  const id = params.id;
  const res = await axios.post(`${url}/specialty/edit/${id}`, { id: id });
  return res.data;
};
