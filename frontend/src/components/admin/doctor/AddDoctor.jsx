import { useToast } from "@chakra-ui/react";
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

const AddDoctor = () => {
  const [specialties, setSpecialties] = useState([]);

  const [specialtyID, setSpecialtyID] = useState();

  const [schday, setSchday] = useState([]);

  const [dayInput, setDayInput] = useState("");

  const [timeInput, setTimeInput] = useState("");

  const [schtime, setSchtime] = useState([]);

  const newDataChangeHandler = (e) => {
    setNewData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const initialInput = {
    name: "",
    qualification: "",
    contact_no: "",
    fees: "",
    schedule_day: [],
    schedule_time: [],
  };

  const [newData, setNewData] = useState(initialInput);

  const getSpecialties = async () => {
    const res = await axios.get(`${url}/specialty`);
    setSpecialties(res.data);
  };

  const getDoctorSpecialty = async () => {
    const res = await axios.post(`${url}/specialty/doctor`, {
      id: specialty_id,
    });
  };

  const toast = useToast();

  const navigate = useNavigate();

  const addNewDoctor = async () => {
    if (specialtyID == undefined) {
      toast({
        title: `Please select specialty.`,
        status: "info",
        isClosable: true,
      });
      return;
    }
    if (schtime == [] || schtime.length < 1) {
      toast({
        title: `Please fill available time.`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    const values = {
      ...newData,
      schedule_day: JSON.stringify(schday),
      schedule_time: JSON.stringify(schtime),
      specialty_id: specialtyID,
    };
    const res = await axios.post(`${url}/doctor/add`, { values: values });
    navigate("/admin/doctor");
    toast({
      title: `New doctor added.`,
      status: "success",
      isClosable: true,
    });
    setNewData(initialInput);
  };

  const deleteDayHandler = (day) => {
    const newDay = schday.filter((sday) => sday.day != day);
    setSchday(newDay);
  };

  const deleteTimeHandler = (time) => {
    const newTime = schtime.filter((stime) => stime.time != time);
    setSchtime(newTime);
  };

  const addNewDayHandler = () => {
    if (
      dayInput != "Monday" &&
      dayInput != "Tuesday" &&
      dayInput != "Wednesday" &&
      dayInput != "Thursday" &&
      dayInput != "Friday" &&
      dayInput != "Saturday" &&
      dayInput != "Sunday"
    ) {
      toast({
        title: `Please fill valid day. (eg- Sunday, Monday)`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    setSchday([...schday, { day: dayInput }]);
    setDayInput("");
  };

  const addNewTimeHandler = () => {
    if (timeInput == "") {
      toast({
        title: `Please fill valid time.`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    setSchtime([...schtime, { time: timeInput }]);
    setTimeInput("");
  };

  useEffect(() => {
    getSpecialties();
  }, []);

  return (
    <>
      <div className=" flex justify-between mx-8 mt-4 items-center">
        <h5 className=" text-xl text-black/70">Add Doctor</h5>
      </div>
      <div className=" mx-8 add-form w-[60%]">
        <div className=" my-4 flex gap-4">
          <div className=" w-[50%]">
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
          <div className=" w-[50%]">
            <label
              htmlFor="name"
              className="block text-[#6d6d6d] font-medium text-md mb-1"
            >
              Specialty
            </label>
            <select
              value={specialtyID}
              defaultValue="0"
              onChange={(e) => {
                setSpecialtyID(e.target.value);
              }}
              className=" w-full h-[40px] rounded-md bg-[#fcfcfc]"
            >
              <option
                value={"0"}
                disabled
                className=" placeholder:text-gray-400"
              >
                Select Specialty
              </option>
              {specialties &&
                specialties.length > 0 &&
                specialties.map((specialty) => (
                  <option key={specialty.id} value={specialty.id}>
                    {specialty.specialty_name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className=" my-4">
          <label
            htmlFor="name"
            className="block text-[#6d6d6d] font-medium text-md mb-1"
          >
            Qualification
          </label>
          <textarea
            type="text"
            rows={5}
            className=" rounded-md bg-[#fcfcfc] w-full p-2 focus:outline-none"
            name="qualification"
            onChange={newDataChangeHandler}
          />
        </div>
        <div className=" my-4 flex gap-4">
          <div className=" w-[50%]">
            <label
              htmlFor="name"
              className="block text-[#6d6d6d] font-medium text-md mb-1"
            >
              Phone Number
            </label>
            <input
              type="text"
              className=" w-full h-[40px] rounded-md bg-[#fcfcfc]"
              name="contact_no"
              onChange={newDataChangeHandler}
            />
          </div>
          <div className=" w-[50%]">
            <label
              htmlFor="fees"
              className="block text-[#6d6d6d] font-medium text-md mb-1"
            >
              Fees
            </label>
            <input
              type="text"
              className=" w-full h-[40px] rounded-md bg-[#fcfcfc]"
              name="fees"
              onChange={newDataChangeHandler}
            />
          </div>
        </div>
        <div className=" my-4 flex gap-4">
          <div className=" w-full">
            <label
              htmlFor="name"
              className="block text-[#6d6d6d] font-medium text-md mb-1"
            >
              Available Day
            </label>
            <div className="flex flex-wrap">
              {schday &&
                schday.map((s_day, index) => {
                  return (
                    <div className="pr-2 mb-2 py-2">
                      <span className="bg-[#b9b9b9] relative py-2 px-6 text-sm rounded-md group">
                        {s_day.day}
                        <GrFormClose
                          className="absolute top-1 right-1 hidden group-hover:block cursor-pointer"
                          onClick={() => deleteDayHandler(s_day.day)}
                        />
                      </span>
                    </div>
                  );
                })}
            </div>
            <div>
              <div className="flex items-center mr-[-30px]">
                <input
                  type="text"
                  className=" w-full h-[40px] rounded-md bg-[#fcfcfc]"
                  placeholder="Insert new available day"
                  name="contact_no"
                  value={dayInput}
                  onChange={(e) => {
                    setDayInput(e.target.value);
                  }}
                />
                <AiOutlinePlusSquare
                  className="text-2xl ml-3 cursor-pointer"
                  onClick={addNewDayHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" my-4 flex gap-4">
          <div className=" w-full">
            <label
              htmlFor="name"
              className="block text-[#6d6d6d] font-medium text-md mb-1"
            >
              Available Time
            </label>
            <div className="flex flex-wrap">
              {schtime &&
                schtime.map((s_time, index) => {
                  return (
                    <div className="pr-2 mb-2 py-2">
                      <span className="bg-[#b9b9b9] relative py-2 px-6 text-sm rounded-md group">
                        {s_time.time}
                        <GrFormClose
                          className="absolute top-1 right-1 hidden group-hover:block cursor-pointer"
                          onClick={() => deleteTimeHandler(s_time.time)}
                        />
                      </span>
                    </div>
                  );
                })}
            </div>
            <div>
              <div className="flex items-center mr-[-30px]">
                <input
                  type="text"
                  className=" w-full h-[40px] rounded-md bg-[#fcfcfc]"
                  name="contact_no"
                  value={timeInput}
                  placeholder="Insert new available time"
                  onChange={(e) => {
                    setTimeInput(e.target.value);
                  }}
                />
                <AiOutlinePlusSquare
                  className="text-2xl ml-3 cursor-pointer"
                  onClick={addNewTimeHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" my-10 flex justify-end gap-4">
          <Link to="/admin/doctor">
            <button className=" border border-gray-400 text-gray-600 py-2 rounded-md w-20">
              Cancel
            </button>
          </Link>
          <button
            className=" bg-[#303B40] text-white py-[9px] w-20 rounded-md"
            onClick={addNewDoctor}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
