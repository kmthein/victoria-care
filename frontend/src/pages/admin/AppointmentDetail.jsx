import axios from "axios";
import React from "react";
import { url } from "../../api/api";
import { useLoaderData } from "react-router-dom";

const AppointmentDetail = () => {
  const appoint = useLoaderData();

  console.log(appoint);
  const {
    id,
    patient_name,
    email,
    doctor_name,
    specialty,
    date,
    time,
    contact_no,
    prev_record,
    description,
    fees,
    status,
    user_id,
    doctor_id,
  } = appoint[0];

  return (
    <div className=" w-[50%] ml-8 mt-4">
      <h5 className=" text-xl text-black/70 mb-4">Appointment Details</h5>
      <div className=" bg-white mt-1 rounded-md py-4">
        <div className=" mx-6 py-1 flex justify-between">
          <span className=" text-black/60">ID</span>
          <span>{id}</span>
        </div>
        <div className=" mx-6 py-1 flex justify-between">
          <span className=" text-black/60">Name</span>
          <span>{patient_name ? patient_name : "-"}</span>
        </div>
        <div className=" mx-6 py-1 flex justify-between">
          <span className=" text-black/60">Email</span>
          <span>{email ? email : "-"}</span>
        </div>
        <div className=" mx-6 py-1 flex justify-between">
          <span className=" text-black/60">Doctor</span>
          <span>{doctor_name && doctor_name}</span>
        </div>
        <div className=" mx-6 py-1 flex justify-between">
          <span className=" text-black/60">Specialty</span>
          <span>{specialty && specialty}</span>
        </div>
        <div className=" mx-6 py-1 flex justify-between">
          <span className=" text-black/60">Date</span>
          <span>{date && date}</span>
        </div>
        <div className=" mx-6 py-1 flex justify-between">
          <span className=" text-black/60">Time</span>
          <span>{time && time}</span>
        </div>
        <div className=" mx-6 py-1 flex justify-between">
          <span className=" text-black/60">Phone</span>
          <span>{contact_no ? contact_no : "-"}</span>
        </div>
        <div className=" mx-6 py-1 flex justify-between">
          <span className=" text-black/60">Previous Record</span>
          <span>{prev_record && prev_record}</span>
        </div>
        <div className=" mx-6 py-1 flex justify-between">
          <span className=" text-black/60">Description</span>
          <span>{description ? description : "-"}</span>
        </div>
        <div className=" mx-6 py-1 flex justify-between">
          <span className=" text-black/60">Status</span>
          <span>{status ? status : "-"}</span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetail;

export const loader = async ({ req, params }) => {
  const res = await axios.post(`${url}/appointment/detail`, { id: params.id });
  return res.data;
};
