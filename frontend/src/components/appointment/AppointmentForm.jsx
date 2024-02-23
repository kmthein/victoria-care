import React, { useEffect, useRef, useState } from "react";
import appointImg from "../../assets/images/appointment-img.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../api/api";
import { appointActions } from "../../store/reducer/appointReducer";

const AppointmentForm = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const selectDoctor = useSelector((state) => state.appoint.selectedDoctor);

  const {id: user_id} = currentUser;

  const {
    id: doctor_id,
    name,
    schedules_day,
    schedules_time,
    specialty_id,
    fees
  } = selectDoctor;

  const dispatch = useDispatch();

  function getDaysInMonth(year, month, currentDay) {
    const result = [];
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const dayCurrent = new Date().getDate();

    for (let day = dayCurrent; day <= lastDay.getDate(); day++) {
      const currentDate = new Date(year, month - 1, day);
      if (currentDate.getDay() === currentDay) {
        result.push(currentDate);
      }
    }
    return result;
  }

  const [days, setDays] = useState([]);

  const getScheduleDays = () => {
    const current = new Date();
    const currentYear = current.getFullYear();
    const currentMonth = current.getMonth() + 1;
    let ary = [];
    for (let x = 0; x < schedules_day.length; x++) {
      ary.push(schedules_day[x].day);
      setScheduleDay([...scheduleDay, schedules_day[x].day]);
    }

    let day;
    let currentDate = [];
    let newAry = [];

    for (let x = 0; x < ary.length; x++) {
      const y = ary[x];
      switch (y) {
        case "Sunday":
          day = 0;
          break;
        case "Monday":
          day = 1;
          break;
        case "Tuesday":
          day = 2;
          break;
        case "Wednesday":
          day = 3;
          break;
        case "Thursday":
          day = 4;
          break;
        case "Friday":
          day = 5;
          break;
        case "Saturday":
          day = 6;
          break;
      }
      const z = getDaysInMonth(currentYear, currentMonth, day);
      currentDate.push(z);
      currentDate.map((dates) => {
        dates.map((day) => {
          newAry.push(day);
          const removeDuplicates = (newAry) => {
            return newAry.filter(
              (item, index) => newAry.indexOf(item) === index
            );
          };
          const newDay = removeDuplicates(newAry);
          setDays(newDay);
        });
      });
      // setDays(currentDate);
    }
  };

  useEffect(() => {
    getScheduleDays();
  }, []);

  useEffect(() => {
    dispatch(appointActions.updateScheduleDay(days));
  }, [days]);

  const [scheduleDay, setScheduleDay] = useState([]);

  const getSpecialty = async () => {
    const res = await axios.post(`${url}/specialty/doctor`, {
      id: specialty_id,
    });
    const specialtyName = res.data[0].specialty_name;
    dispatch(appointActions.updateSpecialty(specialtyName));
  };

  const navigate = useNavigate();

  const cancelAppointment = () => {
    navigate("/doctor");
    dispatch(appointActions.cancelAppointment({}));
    dispatch(appointActions.deleteAppointment({}));
  };

  useEffect(() => {
    getSpecialty();
  }, []);

  const initialInput = {
    name: currentUser ? currentUser.name : "",
    email: currentUser ? currentUser.email : "",
    doctor_name: selectDoctor ? selectDoctor.name : "",
    specialty_name: specialty_id.name,
    contact_no: currentUser ? currentUser.phone_num : "",
    description: ""
  }

  const [input, setInput] = useState(initialInput);

  const inputChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const confirmAppointHandler = async (e) => {
    e.preventDefault();
    const time = timeInputRef.current.value;
    const date = dateInputRef.current.value;
    const prevRec = prevRecordRef.current.value;
    const special = specialtyRef.current.value;
    const {name, email, doctor_name, contact_no, description} = input;
    const todayDate = new Date();
    const status = "Unpaid";
    const appointData = { name, email, doctor_name, special, date, time, contact_no, prevRec, description, fees, status, todayDate, user_id, doctor_id };
    dispatch(appointActions.confirmAppointment(appointData));
    const res = await axios.post(`${url}/appointment/add`, {values: appointData})
    navigate('/payment');
  }

  const dateInputRef = useRef();
  const timeInputRef = useRef();
  const prevRecordRef = useRef();
  const specialtyRef = useRef();

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
                name="name"
                onChange={inputChangeHandler}
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
                name="email"
                onChange={inputChangeHandler}
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
                defaultValue={specialty_id && specialty_id.name}
                readOnly
                ref={specialtyRef}
              />
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Date
              </label>
              <select className="py-2 px-4 w-full rounded-md" ref={dateInputRef} id="date">
                {schedules_day &&
                  schedules_day != [] &&
                  schedules_day.map((d, index) => <option key={index} value={d}>{d}</option>)}
              </select>
            </div>
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Time
              </label>
              <select className="py-2 px-4 w-full rounded-md" ref={timeInputRef} id="time">
                {schedules_time &&
                  schedules_time.map((schedule, index) => (
                    <option key={index} value={schedule}>{schedule}</option>
                  ))}
              </select>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="555-555-5555"
                className="py-2 px-4 w-full rounded-md"
                defaultValue={currentUser?.phone_num}
                name="contact_no"
                onChange={inputChangeHandler}
              />
            </div>
            <div className=" w-[50%]">
              <label htmlFor="" className="block">
                Previous Record
              </label>
              <select className="py-2 px-4 w-full rounded-md focus:outline-none" ref={prevRecordRef}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="w-full">
              <label htmlFor="" className="block">
                Description
              </label>
              <input
                type="text"
                placeholder="you can write extra notes here"
                className="py-2 px-4 w-full rounded-md"
                name="description"
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className=" flex gap-4 justify-end mt-6 text-white">
            <button
              className=" bg-red-500 py-[10px] rounded-md w-20"
              onClick={cancelAppointment}
            >
              Cancel
            </button>
            <button className=" bg-[#19376D] py-[10px] rounded-md px-4" onClick={confirmAppointHandler}>
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
