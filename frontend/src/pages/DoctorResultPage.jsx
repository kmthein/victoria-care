import React, { useEffect } from "react";
import SearchBar from "../components/search-bar/SearchBar";
import Breadcrumb from "../components/breadcrumb/Breadcrumb.";
import SpecialtyItem from "../components/specialty/SpecialtyItem";
import axios from "axios";
import { url } from "../api/api";
import { useLoaderData, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../store/reducer/searchReducer";
import DoctorItem from "../components/doctor/DoctorItem";

const DoctorResultPage = () => {
  const doctors = useSelector((state) => state.search.searchDoctor);

  return (
    <>
      <Breadcrumb title={"Doctor"} />
      <div className="w-[50%] mx-auto min-h-[80vh]">
      <SearchBar placeholder={"Search by doctor name"} submitType={"searchDoctor"} />
        <h3 className=" text-lg font-semibold mt-8">Available Doctors</h3>
        <div className="">
          {doctors.length > 0 ? (
            doctors.map((doctor, i) => (
              <DoctorItem key={i} id={doctor._id} name={doctor.name} qualification={doctor.qualification} fees={doctor.doctor_fees} schedules_day={doctor.schedule_day} schedules_time={doctor.schedule_time} specialty_id={doctor.specialtyId} />
            ))
          ) : (
            <p className=" mx-auto text-gray-700">No results found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorResultPage;
