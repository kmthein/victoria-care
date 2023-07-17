import React from "react";
import appointImg from "../../assets/images/appointment-img.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AppointmentForm = () => {
  const currentUser = useSelector(state => state.auth.currentUser);

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
                className="py-2 px-4 w-full rounded-md"
              />
            </div>
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Specialty
              </label>
              <input
                type="text"
                placeholder="specialty name"
                className="py-2 px-4 w-full rounded-md"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Date
              </label>
              <input type="date" className="py-2 px-4 w-full rounded-md" />
            </div>
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Time
              </label>
              <input type="time" className="py-2 px-4 w-full rounded-md" />
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
            <Link to='/doctor'>
            <button className=" bg-red-500 py-[10px] rounded-md w-20">Cancel</button>
            </Link>
            <button className=" bg-[#19376D] py-[10px] rounded-md px-4">Make Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
