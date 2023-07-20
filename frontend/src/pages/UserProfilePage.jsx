import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "../api/api";
import { authActions } from "../store/reducer/authReducer";

const UserProfilePage = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const { img, id, name, email, phone_num, dob } = currentUser;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const logoutHandler = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      localStorage.removeItem("token");
      dispatch(authActions.logout([]));
      navigate("/");
    }, [2000])

  }

  // const [password, setPassword] = useState('');

  // const checkPassword = async () => {
  //   const res = await axios.post(`${url}/api/auth/password`, {id: id})
  //   setPassword(res.data[0].password);
  // }

  // useEffect(() => {
  //   checkPassword();
  // }, [id])

  return (
    <div>
      <div className=" w-[50%] mx-auto my-8 inter">
        <div className=" flex gap-8">
          <div className=" w-[40%] ">
            <div className=" text-center">
              {img ? (
                <img
                  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                  className=" w-20 h-20 rounded-full object-cover mx-auto"
                />
              ) : (
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  className=" w-20 h-20 rounded-full object-cover mx-auto"
                />
              )}
              <div className=" mt-4">
                <p>{name}</p>
                <span className=" text-gray-600 text-sm">{email}</span>
              </div>
              <div className=" mt-20">
                <button className=" bg-[#313131] py-2 w-full rounded-md text-white" onClick={logoutHandler}>
                  { isSubmitting ? "loading..." : "logout"}
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[60%]">
            <div>
              <Tabs variant="soft-rounded" colorScheme="blue">
                <TabList>
                  <Tab>My Appointments</Tab>
                  <Tab>Account Settings</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className=" my-8">
                      <h4 className=" font-semibold text-lg">
                        My Appointments
                      </h4>
                      <p className=" mt-20 text-center">No history yet.</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className=" mt-4 mb-8">
                      <h4 className=" font-semibold pb-2 text-lg">
                        My Account Settings
                      </h4>
                      <div className="text-[15px] profile">
                        <div className=" my-4 pb-2 flex">
                          <div className=" w-[110px]">
                            <label htmlFor="name" className=" mr-8">
                              Name
                            </label>
                          </div>
                          <input
                            type="text"
                            defaultValue={name}
                            className=" border-b-[1px]"
                          />
                        </div>
                        <div className=" my-4 pb-2 flex">
                          <div className=" w-[110px]">
                            <label htmlFor="name" className=" mr-8">
                              Email
                            </label>
                          </div>
                          <input
                            type="email"
                            defaultValue={email}
                            className=" border-b-[1px]"
                          />
                        </div>
                        {/* <div className=" my-4 pb-2 flex">
                          <div className=" w-[110px]">
                            <label htmlFor="name" className=" mr-8">
                              Password
                            </label>
                          </div>
                          <input
                            type="password"
                            defaultValue={password}
                            className=" border-b-[1px]"
                          />
                        </div> */}
                        <div className=" my-4 pb-2 flex">
                          <div className=" w-[110px]">
                            <label htmlFor="name" className=" mr-8">
                              Phone
                            </label>
                          </div>
                          <input
                            type="text"
                            defaultValue={phone_num}
                            className=" border-b-[1px]"
                          />
                        </div>
                        <div className=" my-4 pb-2 flex">
                          <div className=" w-[110px]">
                            <label htmlFor="name" className=" mr-8">
                              Birthdate
                            </label>
                          </div>
                          <input
                            type="text"
                            defaultValue={dob}
                            className=" border-b-[1px]"
                          />
                        </div>
                        <div className=" my-4 flex items-center">
                          <div className=" w-[110px]">
                            {img ? (
                              <img
                                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                                className="  w-16 h-16 rounded-full object-cover"
                              />
                            ) : (
                              <img
                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                className=" w-16 h-16 rounded-full object-cover"
                              />
                            )}
                          </div>
                          <div>
                            <button className=" bg-[#BEE3F8] py-2 px-1 rounded-md text-sm">
                              Upload Photo
                            </button>
                          </div>
                        </div>
                        <div className=" w-full">
                          <button className=" bg-[#3a52af] w-full py-2 mt-4 rounded-md text-white">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
