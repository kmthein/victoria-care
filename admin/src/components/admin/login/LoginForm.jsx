import React, { useState } from "react";
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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(async () => {
      try {
        const res = await axios.post(`${url}/api/auth/admin-login`, {
          email: email,
          password: password,
        });
        const adminToken = res.data;
        localStorage.setItem("admin-token", JSON.stringify(adminToken));
        setEmail("");
        setPassword("");
        toast({
          title: "Login Successful.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/");
        dispatch(authActions.adminLogin(adminToken));
      } catch (error) {
        toast({
          title: error.response.data,
          status: "error",
          isClosable: true,
        });
      }
      setIsSubmitting(false);
    }, [1000]);
  };

  return (
    <div className=" bg-[#303B40] w-[80%] lg:w-[30%] mx-auto md:py-8">
      <img src={whiteLogo} alt="logo" className=" mx-auto pt-8" />
      <p className="text-white text-center mt-3">Admin Panel</p>
      <div className=" w-[70%] mx-auto mt-20 admin-login">
        <div className=" flex items-center gap-4">
          <BsPersonFill className=" text-2xl text-[#BCBCBC]" />
          <input
            type="email"
            placeholder="Email Address"
            className=" bg-transparent pb-1 border-[#BCBCBC] w-full border-b-[1px] text-[#dfdfdf]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" flex items-center gap-4 mt-10">
          <FaKey className=" text-xl text-[#BCBCBC]" />
          <input
            type="password"
            placeholder="Password"
            className=" bg-transparent pb-1 border-[#BCBCBC] w-full border-b-[1px] text-[#dfdfdf]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className=" flex justify-center my-12">
          <button
            className=" bg-[#BCBCBC] py-2 px-6 rounded-full"
            onClick={loginSubmitHandler}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
                  <BeatLoader color="#fff" size={7} />
                ) : (
                  "Login"
                )}
          </button>
        </div>
        <p className="text-center text-white/70 mb-6">Don't have an account? <Link to='/register'><span className=" ml-2 border-b-[1px] hover:text-gray-500">Sign up</span></Link></p>
      </div>
    </div>
  );
};

export default LoginForm;
