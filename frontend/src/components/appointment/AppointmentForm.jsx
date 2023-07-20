import React, { useEffect, useState } from "react";
import appointImg from "../../assets/images/appointment-img.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../api/api";
import { appointActions } from "../../store/reducer/appointReducer";

const AppointmentForm = () => {
  const currentUser = useSelector(state => state.auth.currentUser);

  const selectDoctor = useSelector(state => state.appoint.selectedDoctor);
  console.log(selectDoctor);

  const {id, name, schedules_day, schedules_time, specialty_id, specialty} = selectDoctor;

  const dispatch = useDispatch();

  const getSpecialty = async () => {
    const res = await axios.post(`${url}/specialty/doctor`, {id: specialty_id})
    const specialtyName = res.data[0].specialty_name;
    dispatch(appointActions.updateSpecialty(specialtyName));
  }

  const navigate = useNavigate();

  const cancelAppointment = () => {
    navigate('/doctor');
    dispatch(appointActions.cancelAppointment({}));
  }

  useEffect(() => {
    getSpecialty()
  }, [])


  return (
    <div className=" w-[80%] mx-auto mt-12 mb-20  inter">
      <div className=" flex appointment-box">
        <div className=" bg-[#44c9eb] flex items-center w-[40%]">
          <img src={appointImg} alt="img" className=" h-[400px]" />
        </div>
        <div className=" bg-[#EAEAEA] w-[60%] p-8 contact-input">
          <h3 className=" text-3xl font-semibold">Make an appointment</h3>
          <div className="flex gap-4 mt-5">
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Name
              </label>
              <input
                type="text"
                placeholder="your name"
                className="py-2 px-4 w-full rounded-md"
                defaultValue={currentUser?.name}
              />
            </div>
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Email
              </label>
              <input
                type="text"
                placeholder="youremail@example.com"
                className="py-2 px-4 w-full rounded-md"
                defaultValue={currentUser?.email}
              />
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Doctor
              </label>
              <input
                type="text"
                placeholder="doctor name"
                className="py-2 px-4 w-full rounded-md text-black/60"
                defaultValue={name && name}
                readOnly
              />
            </div>
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Specialty
              </label>
              <input
                type="text"
                placeholder="specialty name"
                className="py-2 px-4 w-full rounded-md text-black/60"
                defaultValue={specialty && specialty}
                readOnly
              />
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Date
              </label>
              <select className="py-2 px-4 w-full rounded-md">
                {
                  schedules_day && schedules_day.map((schedule) => (
                    <option>{schedule.day}</option>
                  ))
                }
              </select>
            </div>
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Time
              </label>
              <select className="py-2 px-4 w-full rounded-md">
                {
                  schedules_time && schedules_time.map((schedule) => (
                    <option>{schedule.time}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Phone Number
              </label>
              <input type="text" placeholder="555-555-5555" className="py-2 px-4 w-full rounded-md" />
            </div>
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Previous Record
              </label>
              <select className="py-2 px-4 w-full rounded-md focus:outline-none">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="w-full">
              <label htmlFor="" className="block">
                Description
              </label>
              <input type="text" placeholder="you can write extra notes here" className="py-2 px-4 w-full rounded-md" />
            </div>
          </div>
          <div className=" flex gap-4 justify-end mt-6 text-white">
            <button className=" bg-red-500 py-[10px] rounded-md w-20" onClick={cancelAppointment}>Cancel</button>
            <button className=" bg-[#19376D] py-[10px] rounded-md px-4">Make Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
