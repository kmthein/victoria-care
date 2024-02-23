import React, { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";
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
import TableForm from "../components/admin/table/TableForm";

const UserProfilePage = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const { images, _id, name, email, phone_num, dob } = currentUser;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();

  const [userImg, setUserImg] = useState();

  const getCurrentUser = async () => {
    const res = await axios.post(`${url}/user/patients`, { id: id });
    const userImage = res.data[0].images;
    setUserImg(res.data[0].images);
    dispatch(
      authActions.updateUser({
        ...user,
        images: userImage,
      })
    );
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

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

  const [userHistory, setUserHistory] = useState([]);

  const getAppointmentById = async () => {
    const res = await axios.post(`${url}/appointment/history`, { id: id });
    setUserHistory(res.data);
  };

  useEffect(() => {
    getAppointmentById();
  }, []);

  const makePayment = async (currentId) => {
    console.log(currentId);
    const res = await axios.post(`${url}/appointment/detail`, {id: currentId})
  }

  return (
    <div>
      <div className=" w-[70%] mx-auto my-8 inter">
        <div className=" flex gap-8">
          <div className=" w-[20%] ">
            <div className=" text-center">
              {images != "" ? (
                <img
                  src={`${url}/upload/${images}`}
                  className=" w-40 h-40 rounded-full object-center object-cover mx-auto"
                />
              ) :
                (
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  className=" w-40 h-40 rounded-full object-cover mx-auto"
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
          <div className=" w-[80%]">
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
                      <TableForm>
                        <div className="flex px-4 py-4 border-b-[1px] font-medium sticky top-0 bg-[#e2e2e2]">
                          <p className=" w-[200px]">Patient</p>
                          <p className=" w-[250px]">Doctor</p>
                          <p className=" w-[200px]">Date</p>
                          <p className=" w-[200px]">Time</p>
                          {/* <p className=" w-[200px]">Status</p> */}
                        </div>
                        {userHistory && userHistory.length > 0 ? (
                          userHistory.map((h) => (
                            <div
                              key={h.id}
                              className="flex px-4 py-4 border-b-[1px]"
                            >
                              <p className=" w-[200px]">{h.patient_name}</p>
                              <p className=" w-[250px]">{h.doctor_name}</p>
                              <p className=" w-[200px]">{h.date}</p>
                              <p className=" w-[200px]">{h.time}</p>
                              {/* <p className=" w-[200px]">{h.status == "Unpaid" ? (
                                <Link to={`/payment/${h.id}`}>Make Payment</Link>
                              ): ("Done")}</p> */}
                            </div>
                          ))
                        ) : (
                          <p className=" mt-20 text-center">No history yet.</p>
                        )}
                      </TableForm>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <UserForm
                      image={images}
                      id={_id}
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
