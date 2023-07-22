import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "../api/api";
import { authActions } from "../store/reducer/authReducer";
import UserForm from "../components/user/UserForm";
import Loading from "../components/animate/Loading";

const UserProfilePage = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const { img, id, name, email, phone_num, dob } = currentUser;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();

  // const logoutHandler = () => {
  //   setIsSubmitting(true);

  //   setTimeout(() => {
  //     localStorage.removeItem("token");
  //     dispatch(authActions.logout([]));
  //     toast({
  //       title: "Your account has been logout.",
  //       status: "info",
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //     navigate("/");
  //   }, [2000]);
  // };

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
              {/* <div className=" mt-20">
                <button
                  className=" bg-[#313131] py-2 w-full rounded-md text-white"
                  onClick={logoutHandler}
                >
                  {isSubmitting ? <Loading /> : "Logout"}
                </button>
              </div> */}
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
                    <UserForm
                      img={img}
                      id={id}
                      name={name}
                      email={email}
                      phone_num={phone_num}
                      dob={dob}
                    />
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
