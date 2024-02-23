import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSearch, BiSearchAlt2 } from "react-icons/bi";
import { url } from "../../api/api";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store/reducer/searchReducer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SearchBar = ({ placeholder, submitType }) => {
  const [input, setInput] = useState({
    name: "",
  });

  const searchInputChange = (e) => {
    setInput((prev) => ({ [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  let searchSubmitHandler;

  if(submitType == "searchDoctor") {
    searchSubmitHandler = async (e) => {
      e.preventDefault();
      const res = await axios.post(`${import.meta.env.VITE_API}/doctor/search`, input);
      dispatch(searchActions.searchByDoctorName(res.data));
      navigate("/doctor-search");
    }
  } else {
    searchSubmitHandler = async (e) => {
      e.preventDefault();
      const res = await axios.post(`${import.meta.env.VITE_API}/specialty/search`, input);
      dispatch(searchActions.searchBySpecialName(res.data));
      navigate("/specialty-search");
  }
  }

  const navigate = useNavigate();
  
  return (
    <div className="search_box my-8 py-2 rounded-md px-2">
      <form onSubmit={searchSubmitHandler}>
        <div className=" flex items-center gap-2">
          <input
            type="text"
            placeholder={placeholder}
            onChange={searchInputChange}
            name="search"
            className="w-full text-[15px] focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
            title="search"
            type="submit"
          >
            <BiSearchAlt2 className=" text-2xl text-black mt-1" />
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
