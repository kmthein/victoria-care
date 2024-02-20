import React, { useEffect } from "react";
import appointImg from "../../assets/images/appointment-img.png";
import StripeContainer from "./StripeContainer";
import { useSelector } from "react-redux";
import axios from "axios";
import { url } from "../../api/api";

const PaymentForm = () => {
  const currentAppoint = useSelector((state) => state.appoint.currentAppoint);

  const {
    name,
    email,
    doctor_name,
    special,
    date,
    time,
    contact_no,
    prevRec,
    description,
    fees,
    user_id,
    doctor_id,
  } = currentAppoint;

  // const getAppointment = async () => {
  //   const res = await axios.get(`${url}/appointment/get`);
  //   console.log(res.data);
  // }

  // useEffect(() => {
  //   getAppointment();
  // }, [])

  const totalPrice = +fees + 3;

  return (
    <div className=" w-[80%] mx-auto mt-12 mb-20  inter">
      <div className=" flex appointment-box">
        <div className=" bg-[#44c9eb] flex items-center w-[40%]">
          <img src={appointImg} alt="img" className=" h-[400px]" />
        </div>
        <div className=" bg-[#EAEAEA] w-[60%] p-8 contact-input">
          <h3 className=" text-3xl font-semibold">Make payment</h3>
          <p className=" mt-4">Appointment Summary</p>
          <div className=" bg-white mt-1 rounded-md py-4">
            <div className=" mx-6 py-1 flex justify-between">
              <span className=" text-black/60">Name</span>
              <span>{name ? name : "-"}</span>
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
              <span>{special && special}</span>
            </div>
            <div className=" mx-6 py-1 flex justify-between">
              <span className=" text-black/60">Date</span>
              <span>{date && date}</span>
            </div>
            <div className=" mx-6 py-1 flex justify-between">
              <span className=" text-black/60">Time</span>
              <span>{time && time}</span>
            </div>
            <div className=" mx-6 py-1 flex justify-between border-b-2 pb-3">
              <span className=" text-black/60">Phone Number</span>
              <span>{contact_no ? contact_no : "-"}</span>
            </div>
            <div className=" mx-6 pt-3 py-1 flex justify-between">
              <span className=" text-black/60">Doctor Fees</span>
              <span>${fees}</span>
            </div>
            <div className=" mx-6 py-1 flex justify-between">
              <span className=" text-black/60">Service Fees</span>
              <span>$3</span>
            </div>
            <div className=" mx-6 py-1 flex justify-between font-bold">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
            <div className="mx-6">
              <StripeContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
