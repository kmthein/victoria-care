import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCalendarCheck, BsPeopleFill } from "react-icons/bs";
import { FaHospitalUser, FaShieldVirus, FaUser, FaUserMd } from "react-icons/fa";
import { MdOutlineFolderSpecial } from "react-icons/md";
import { TbVirusSearch } from "react-icons/tb";
import { url } from "../../api/api";

const Dashboard = () => {
  const [doctors, setDoctors] = useState();
  const [specialty, setSpecialty] = useState();
  const [users, setUsers] = useState();
  const [totalAppoint, setTotalAppoint] = useState();

  const getTotalDoctors = async () => {
    const res = await axios.get(`${url}/count/total-doctor`);
      setDoctors(res.data[0].total);
  }

  const getTotalSpecialty = async () => {
    const res = await axios.get(`${url}/count/total-specialty`);
      setSpecialty(res.data[0].total);
  }

  const getTotalUsers = async () => {
    const res = await axios.get(`${url}/count/total-user`);
      setUsers(res.data[0].total);
  }

  const getTotalAppointments = async () => {
    const res = await axios.get(`${url}/count/total-appointment`);
      setTotalAppoint(res.data[0].total);
  }

  useEffect(() => {
    getTotalSpecialty();
    getTotalDoctors();
    getTotalUsers();
    getTotalAppointments();
  }, [])

  return (
    <>
      <div className=" flex pl-20 pt-10 gap-12 flex-wrap">
        <div className=" bg-[#f8f8f8] w-[40%] h-[200px] rounded-md">
          <div className=" flex items-center h-full gap-4 justify-center">
            <FaUserMd className="text-5xl text-[#16BBE5]" />
            <div className="roboto ml-4">
              <p className="text-4xl font-semibold">{doctors}</p>
              <p className="text-xl text-gray-500">Doctors</p>
            </div>
          </div>
        </div>
        <div className=" bg-[#f8f8f8] w-[40%] h-[200px] rounded-md">
          <div className=" flex items-center h-full gap-4 justify-center">
            <FaShieldVirus className="text-5xl text-red-500" />
            <div className="roboto ml-4">
              <p className="text-4xl font-semibold">{specialty}</p>
              <p className="text-xl text-gray-500">Specialty</p>
            </div>
          </div>
        </div>
        <div className=" bg-[#f8f8f8] w-[40%] h-[200px] rounded-md">
          <div className=" flex items-center h-full gap-4 justify-center">
            <FaUser className="text-5xl  text-yellow-400" />
            <div className="roboto ml-4">
              <p className="text-4xl font-semibold">{users}</p>
              <p className="text-xl text-gray-500">Users</p>
            </div>
          </div>
        </div>
        <div className=" bg-[#f8f8f8] w-[40%] h-[200px] rounded-md">
          <div className=" flex items-center h-full gap-4 ml-[30%]">
            <BsCalendarCheck className="text-5xl text-green-500" />
            <div className="roboto ml-4">
              <p className="text-4xl font-semibold">{totalAppoint}</p>
              <p className="text-xl text-gray-500">Appointments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
