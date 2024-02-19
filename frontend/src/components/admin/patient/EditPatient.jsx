import axios from "axios";
import React, { useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { url } from "../../../api/api";

const EditPatient = () => {
  const patient = useLoaderData();
  const { id, name, email, phone_num, dob } = patient[0];

  const initialInput = {
    id,
    name,
    email,
    phone_num,
    dob,
  };

  const [input, setInput] = useState(initialInput);

  const inputChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const updatePatientHandler = async () => {
    const res = await axios.put(`${url}/user/update`, {
      values: input,
      id: id,
    });
    navigate('/admin/patient');
  };

  return (
    <>
      <div className=" flex justify-between mx-8 mt-4 items-center">
        <h5 className=" text-xl text-black/70">Edit Patient</h5>
      </div>
      <div className=" mx-8 add-form w-[60%]">
        <div className=" my-4">
          <label
            htmlFor="name"
            className="block text-[#6d6d6d] font-medium text-md mb-1"
          >
            Name
          </label>
          <input
            type="text"
            className=" h-[40px] rounded-md bg-[#fcfcfc] w-full"
            defaultValue={name && name}
            onChange={inputChangeHandler}
            name="name"
          />
        </div>
        <div className=" my-4">
          <label
            htmlFor="name"
            className="block text-[#6d6d6d] font-medium text-md mb-1"
          >
            Email
          </label>
          <input
            type="text"
            className=" w-full h-[40px] rounded-md bg-[#fcfcfc]"
            defaultValue={email && email}
            onChange={inputChangeHandler}
            name="email"
          />
        </div>
        <div className=" my-4">
          <label
            htmlFor="name"
            className="block text-[#6d6d6d] font-medium text-md mb-1"
          >
            Phone Number
          </label>
          <input
            type="text"
            className=" w-full h-[40px] rounded-md bg-[#fcfcfc]"
            defaultValue={phone_num && phone_num}
            onChange={inputChangeHandler}
            name="phone_num"
          />
        </div>
        <div className=" my-4">
          <label
            htmlFor="name"
            className="block text-[#6d6d6d] font-medium text-md mb-1"
          >
            Date of Birth
          </label>
          <input
            type="text"
            className=" w-full h-[40px] rounded-md bg-[#fcfcfc]"
            defaultValue={dob && dob}
            onChange={inputChangeHandler}
            name="dob"
          />
        </div>
        <div className=" mt-10 flex justify-end gap-4">
          <Link to="/admin/patient">
            <button className=" border border-gray-400 text-gray-600 py-2 rounded-md w-20">
              Cancel
            </button>
          </Link>
          <button
            className=" bg-[#303B40] text-white py-[9px] w-20 rounded-md"
            onClick={updatePatientHandler}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default EditPatient;

export const loader = async ({ req, params }) => {
  const res = await axios.post(`${url}/user/patients`, params);
  if (!res.ok) {
  }
  return res.data;
};
