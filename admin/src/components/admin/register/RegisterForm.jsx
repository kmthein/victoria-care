import React, { useEffect, useState } from "react";
import whiteLogo from "../../../assets/images/white-logo.png";
import { BsPersonFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import axios from "axios";
import { url } from "../../../api/api";
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/reducer/authReducer";
import { BeatLoader } from "react-spinners";

const RegisterForm = () => {
  const initialInput = {
    name: "",
    email: "",
    phone_num: "",
    dob: "",
    password: "",
    cpassword: "",
  };

  const [input, setInput] = useState(initialInput);

  const inputChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (
        input.name == "" ||
        input.email == "" ||
        input.phone_num == "" ||
        input.dob == "" ||
        input.password == "" ||
        input.cpassword == ""
      ) {
        toast({
          title: `Please fill all information.`,
          status: "error",
          isClosable: true,
        });
        return;
      }
      if(input.password != input.cpassword) {
        toast({
          title: `Password didn't match, try again.`,
          status: "error",
          isClosable: true,
        });
        return;
      }
      const res = await axios.post(`${url}/api/auth/admin-register`, input);
      console.log(res);
      toast({
        title: "Account created.",
        description: "Congratulations, your account has been created.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setRegInput(initialInput);
      navigate("/login");
    } catch (error) {
      toast({
        title: error.response.data,
        status: "error",
        isClosable: true,
      });
    }
  };

  const [error, setError] = useState("");

  useEffect(() => {
    if (input.password != input.cpassword) {
      setError("Password didn't match");
    } else {
      setError("");
    }
  }, [input.cpassword]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <div className=" bg-[#303B40] w-[50%] mx-auto py-8">
      <img src={whiteLogo} alt="logo" className=" mx-auto pt-8" />
      <p className="text-white text-center mt-3">Admin Panel</p>
      <div className=" w-[70%] mx-auto mt-20 admin-login">
        <div className="flex justify-between gap-10">
          <div className=" w-[50%]">
            <input
              type="text"
              placeholder="Name"
              className=" bg-transparent pb-1 border-[#BCBCBC] w-full border-b-[1px] text-[#dfdfdf]"
              name="name"
              onChange={inputChangeHandler}
            />
          </div>
          <div className=" w-[50%]">
            <input
              type="email"
              placeholder="Email Address"
              className=" bg-transparent pb-1 border-[#BCBCBC] w-full border-b-[1px] text-[#dfdfdf]"
              name="email"
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <div className="flex justify-between gap-10 mt-10">
          <div className=" w-[50%]">
            <input
              type="text"
              placeholder="Phone Number"
              className=" bg-transparent pb-1 border-[#BCBCBC] w-full border-b-[1px] text-[#dfdfdf]"
              name="phone_num"
              onChange={inputChangeHandler}
            />
          </div>
          <div className=" w-[50%]">
            <input
              type="date"
              placeholder="Date of Birth"
              className=" bg-transparent pb-1 border-[#BCBCBC] w-full border-b-[1px] text-[#dfdfdf]"
              name="dob"
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <div className="flex justify-between gap-10 mt-10">
          <div className=" w-[50%]">
            <input
              type="password"
              placeholder="Password"
              className=" bg-transparent pb-1 border-[#BCBCBC] w-full border-b-[1px] text-[#dfdfdf]"
              name="password"
              onChange={inputChangeHandler}
            />
          </div>
          <div className=" w-[50%]">
            <input
              type="password"
              placeholder="Confirm Password"
              className=" bg-transparent pb-1 border-[#BCBCBC] w-full border-b-[1px] text-[#dfdfdf]"
              name="cpassword"
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <div className="mt-2">
        {error && error != "" && (
          <span className=" text-red-500 font-medium text-[15px]">
            {error}
          </span>
        )}
        </div>
        <div className=" flex justify-center mt-12 mb-6">
          <button
            className=" bg-[#BCBCBC] py-2 px-6 rounded-full"
            disabled={isSubmitting}
            onClick={registerSubmitHandler}
          >
            {isSubmitting ? <BeatLoader color="#fff" size={7} /> : "Register"}
          </button>
        </div>
        <p className="text-center text-white/70">
          Already have account?{" "}
          <Link to="/login">
            <span className=" ml-2 border-b-[1px] hover:text-gray-500">
              Log in
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
