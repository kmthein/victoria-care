import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import authImg from "../../assets/images/auth-img2.png";
import axios from "axios";
import { url } from "../../api/api";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store/reducer/searchReducer";
import { authActions } from "../../store/reducer/authReducer";
import { BeatLoader } from "react-spinners";
import { IoMdArrowBack } from "react-icons/io";

const AuthForm = ({
  isOpen,
  onOpen,
  onClose,
  isRegOpen,
  onRegOpen,
  onRegClose,
}) => {
  const {
    isOpen: isPassOpen,
    onOpen: onPassOpen,
    onClose: onPassClose,
  } = useDisclosure();

  const initialRegInput = {
    name: "",
    email: "",
    phone_num: "",
    dob: "",
    password: "",
    cpassword: "",
  };

  const initialLoginInput = {
    email: "",
    password: "",
  };

  const initialPassInput = {
    email: "",
    password: "",
    cpassword: "",
  };

  const [regInput, setRegInput] = useState(initialRegInput);

  const [loginInput, setLoginInput] = useState(initialLoginInput);

  const [error, setError] = useState("");

  const toast = useToast();

  const regChangeHandler = (e) => {
    setRegInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (regInput.password != regInput.cpassword) {
      setError("Password was not match.");
    } else {
      setError("");
    }
  }, [regInput.cpassword]);

  const [passError, setPassError] = useState("");

  const regSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (
        regInput.name == "" ||
        regInput.email == "" ||
        regInput.phone_num == "" ||
        regInput.dob == "" ||
        regInput.password == "" ||
        regInput.cpassword == ""
      ) {
        toast({
          title: `Please fill the information.`,
          status: "error",
          isClosable: true,
        });
        return;
      }
      if (regInput.password != regInput.cpassword) {
        toast({
          title: `Password doesn't match.`,
          status: "error",
          isClosable: true,
        });
        return;
      }
      await axios.post(`${url}/api/auth/register`, regInput);
      toast({
        title: "Account created.",
        description: "Congratulations, your account has been created.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setRegInput(initialRegInput);
      onRegClose();
    } catch (error) {
      toast({
        title: error.response.data,
        status: "error",
        isClosable: true,
      });
    }
  };

  const loginChangeHandler = (e) => {
    setLoginInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [newPassInput, setNewPassInput] = useState(initialPassInput);

  useEffect(() => {
    if (newPassInput.password != newPassInput.cpassword) {
      setPassError("Password was not match.");
    } else {
      setPassError("");
    }
  }, [newPassInput.cpassword]);

  const passwordChangeHandler = (e) => {
    setNewPassInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(async () => {
      try {
        const res = await axios.post(`${url}/api/auth/login`, loginInput);
        const token = res.data;
        localStorage.setItem("token", JSON.stringify(token));
        onClose();
        navigate("/");
        dispatch(authActions.login(token));
        toast({
          title: "Login Successful.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setLoginInput(initialLoginInput);
      } catch (error) {
        if (error.response.status == 404) {
          toast({
            title: error.response.data,
            status: "error",
            isClosable: true,
          });
        }
        if (error.response.status == 400) {
          toast({
            title: error.response.data,
            status: "error",
            isClosable: true,
          });
        }
      }
      setIsSubmitting(false);
    }, [1000]);
  };

  const passwordResetHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (newPassInput.password != newPassInput.cpassword) {
      toast({
        title: `Password doesn't match.`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    setTimeout(async () => {
      try {
        const res = await axios.post(
          `${url}/api/auth/reset-password`,
          newPassInput
        );
        onPassClose();
        toast({
          title: "Password Reset Successful.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        onOpen();
        setNewPassInput(initialPassInput);
      } catch (error) {
        if (error.response.status == 404) {
          toast({
            title: error.response.data,
            status: "error",
            isClosable: true,
          });
        }
        if (error.response.status == 400) {
          toast({
            title: error.response.data,
            status: "error",
            isClosable: true,
          });
        }
      }
      setIsSubmitting(false);
    }, [1000]);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent>
          <div className=" bg-[#576CBC] py-8">
            <div className=" w-[70%] mx-auto">
              <div className=" flex justify-center">
                <img src={authImg} className="w-40" alt="auth-bg" />
              </div>
              <h1 className=" text-center text-white text-3xl font-semibold py-4">
                Login Now
              </h1>
              <div className="my-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full py-[10px] bg-[#ACBADF] placeholder:text-[#577586] focus:outline-none px-4 rounded-full mb-6"
                  name="email"
                  onChange={loginChangeHandler}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-[10px] bg-[#ACBADF] placeholder:text-[#577586] focus:outline-none px-4 rounded-full"
                  name="password"
                  onChange={loginChangeHandler}
                />
              </div>
            </div>
          </div>
          <div className=" my-8">
            <div className="flex justify-center">
              <button
                className=" bg-[#576CBC] h-12 text-white w-40 rounded-full disabled:bg-[#9ca8d6]"
                onClick={loginSubmitHandler}
                disabled={isSubmitting}
              >
                {isSubmitting ? <BeatLoader color="#fff" size={7} /> : "Login"}
              </button>
            </div>
            <div className=" flex justify-between mt-6 mx-4">
              <span
                className=" text-center text-sm text-[#4156aa] cursor-pointer hover:text-[#27387c] hover:underline"
                onClick={() => {
                  onClose();
                  onRegOpen();
                }}
              >
                Don't have an account?{" "}
                {/* <span
                  className="font-normal ml-1 text-[#4156aa] cursor-pointer hover:text-[#27387c] hover:underline"
                  onClick={() => {
                    onClose();
                    onRegOpen();
                  }}
                >
                  Sign Up
                </span> */}
              </span>
              <div className="mb-2">
                <p
                  className="text-right text-sm text-[#4156aa] cursor-pointer hover:text-[#27387c] hover:underline"
                  onClick={() => {
                    onClose();
                    onPassOpen();
                  }}
                >
                  Forgot password
                </p>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
      <Modal isOpen={isRegOpen} size={"xl"} onClose={onRegClose}>
        <ModalOverlay />
        <ModalContent>
          <div className=" bg-[#576CBC] pt-8 pb-2">
            <div className=" mx-8 flex items-center">
              <div className="w-[40%]">
                <img src={authImg} className="w-80 mx-auto" alt="auth-bg" />
              </div>
              <div className="w-[60%] ml-8 text-[14px]">
                <form action="">
                  <h1 className=" text-white text-3xl font-semibold">
                    Register Now
                  </h1>
                  <div className="my-6">
                    <label htmlFor="" className="text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full py-2 bg-[#ACBADF] placeholder:text-[#577586] focus:outline-none px-4 rounded-full mt-1 mb-2"
                      onChange={regChangeHandler}
                      name="name"
                      id="name"
                      required
                    />
                    <label htmlFor="" className="text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full py-2 bg-[#ACBADF] placeholder:text-[#577586] focus:outline-none px-4 rounded-full mt-1 mb-2"
                      onChange={regChangeHandler}
                      name="email"
                      required
                    />
                    {/* <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full py-2 bg-[#ACBADF] placeholder:text-[#577586] focus:outline-none px-4 rounded-full mb-6"
                  /> */}
                    <div className="flex gap-2">
                      <div>
                        <label htmlFor="" className="text-white">
                          Phone
                        </label>
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="w-full py-2 bg-[#ACBADF] placeholder:text-[#577586] focus:outline-none px-4 rounded-full mt-1 mb-2"
                          onChange={regChangeHandler}
                          name="phone_num"
                        />
                      </div>
                      <div>
                        <label htmlFor="" className="text-white">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          placeholder="Date of Birth"
                          className="w-full py-2 bg-[#ACBADF] placeholder:text-[#577586] focus:outline-none px-4 rounded-full mt-1 mb-2"
                          onChange={regChangeHandler}
                          name="dob"
                        />
                      </div>
                    </div>
                    <label htmlFor="" className="text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full py-2 bg-[#ACBADF] placeholder:text-[#577586] focus:outline-none px-4 rounded-full mt-1 mb-2"
                      onChange={regChangeHandler}
                      name="password"
                    />
                    <label htmlFor="" className="text-white">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full py-2 bg-[#ACBADF] placeholder:text-[#577586] focus:outline-none px-4 rounded-full mt-1 mb-2"
                      onChange={regChangeHandler}
                      name="cpassword"
                    />
                    {error && error != "" && (
                      <span className=" text-yellow-300 font-medium text-[15px]">
                        {error}
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=" my-4">
            <div className="flex justify-center mt-2">
              <button
                className=" bg-[#576CBC] py-2 text-white px-10 rounded-full"
                onClick={regSubmitHandler}
              >
                Register
              </button>
            </div>
            <div className=" flex justify-center my-2">
              <span className=" text-center text-sm text-black ">
                Already have account?{" "}
                <span
                  className="font-normal ml-1 text-[#4156aa] cursor-pointer hover:text-[#27387c] hover:underline"
                  onClick={() => {
                    onRegClose();
                    onOpen();
                  }}
                >
                  Log in
                </span>
              </span>
            </div>
          </div>
        </ModalContent>
      </Modal>
      <Modal isOpen={isPassOpen} onClose={onPassClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent>
          <div className=" bg-[#576CBC] py-8">
            {/* <div className=" flex justify-end">
              <IoMdArrowBack className="text-2xl text-white"
                onClick={() => {
                  onPassClose();
                  onOpen();
                }}
              />
            </div> */}
            <div className=" w-[70%] mx-auto">
              <div className=" flex justify-center">
                <img src={authImg} className="w-20" alt="auth-bg" />
              </div>
              <h1 className=" text-center text-white text-3xl font-semibold py-4">
                Password Reset
              </h1>
              <div className="my-6">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full py-[10px] bg-[#ACBADF] placeholder:text-[#577586] focus:outline-none px-4 rounded-full mb-6"
                  name="email"
                  onChange={passwordChangeHandler}
                />
                <input
                  type="password"
                  placeholder="Enter your new password"
                  className="w-full py-[10px] bg-[#ACBADF] placeholder:text-[#577586] focus:outline-none px-4 rounded-full mb-6"
                  name="password"
                  onChange={passwordChangeHandler}
                />
                <input
                  type="password"
                  placeholder="Confirm your new password"
                  className="w-full py-[10px] bg-[#ACBADF] placeholder:text-[#577586] focus:outline-none px-4 rounded-full"
                  name="cpassword"
                  onChange={passwordChangeHandler}
                />
              </div>
              {passError && passError != "" && (
                <span className=" text-yellow-300 font-medium text-[15px]">
                  {passError}
                </span>
              )}
            </div>
          </div>
          <div className=" my-8">
            <div className="flex justify-center gap-3">
              <button
                className=" bg-[#313238] h-12 text-white w-[100px] rounded-full disabled:bg-[#9ca8d6]"
                onClick={() => {
                  onPassClose();
                  onOpen();
                }}
              >
                Go Back
              </button>
              <button
                className=" bg-[#576CBC] h-12 text-white w-[100px] rounded-full disabled:bg-[#9ca8d6]"
                onClick={passwordResetHandler}
                disabled={isSubmitting}
              >
                {isSubmitting ? <BeatLoader color="#fff" size={7} /> : "Reset"}
              </button>
            </div>
            {/* <div className=" flex justify-center mt-6">
              <span className=" text-center text-black text-sm">
                Don't have an account?{" "}
                <span
                  className="font-normal ml-1 text-[#4156aa] cursor-pointer hover:text-[#27387c] hover:underline"
                  onClick={() => {
                    onClose();
                    onRegOpen();
                  }}
                >
                  Sign Up
                </span>
              </span>
            </div> */}
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthForm;
