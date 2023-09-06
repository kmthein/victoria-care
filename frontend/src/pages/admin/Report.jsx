import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TableForm from "../../components/admin/table/TableForm";
import axios from "axios";
import { url } from "../../api/api";
import { CSVLink } from "react-csv";

const Report = () => {
  const [monthlyUsers, setMonthlyUsers] = useState();
  const [monthlyDoctors, setMonthlyDoctors] = useState();
  const [dailyAppointments, setDailyAppointments] = useState();
  const [monthlyAppointments, setMonthlyAppointments] = useState();

  const monthlyUserHandler = async () => {
    const res = await axios.get(`${url}/report/monthly-user`);
    setMonthlyUsers(res.data);
  };

  const monthlyDoctorHandler = async () => {
    const res = await axios.get(`${url}/report/monthly-doctor`);
    setMonthlyDoctors(res.data);
  };

  const dailyAppointmentHandler = async () => {
    const res = await axios.get(`${url}/report/daily-appointment`);
    setDailyAppointments(res.data);
  };

  const monthlyAppointmentHandler = async () => {
    const res = await axios.get(`${url}/report/monthly-appointment`);
    setMonthlyAppointments(res.data);
  };

  useEffect(() => {
    monthlyUserHandler();
    // monthlyDoctorHandler();
    // dailyAppointmentHandler();
    // monthlyAppointmentHandler();
  }, []);

  return (
    <>
      <Tabs isFitted>
        <TabList>
          <Tab
            _selected={{ color: "white", bg: "#4b585e", py: "15px" }}
            onClick={monthlyUserHandler}
          >
            Monthly New User
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#4b585e", py: "15px" }}
            onClick={monthlyDoctorHandler}
          >
            Monthly Specialist Review
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#4b585e", py: "15px" }}
            onClick={dailyAppointmentHandler}
          >
            Daily Appointment
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#4b585e", py: "15px" }}
            onClick={monthlyAppointmentHandler}
          >
            Monthly Appointment
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel id="monthly-user">
            <TableForm>
              <div className="flex px-4 py-4 border-b-[1px] font-medium sticky top-0 bg-[#e2e2e2]">
                <p className="w-[100px]">No</p>
                <p className=" w-[200px]">Name</p>
                <p className=" w-[200px]">Email</p>
                <p className=" w-[150px]">Phone</p>
                <p className=" w-[150px]">Birthdate</p>
                <p className=" w-[150px]">Registered Date</p>
              </div>
              {monthlyUsers && monthlyUsers.length > 0 ? (
                monthlyUsers.map((patient, index) => {
                  const date = patient.created_at.slice(0, 10);
                  return (
                    <>
                      <div
                        key={patient.id}
                        className="flex px-4 py-4 border-b-[1px]"
                      >
                        <p className="w-[100px]">{index + 1}</p>
                        <p className=" w-[200px]">{patient.name}</p>
                        <p className=" w-[200px]">{patient.email}</p>
                        <p className=" w-[150px]">{patient.phone_num}</p>
                        <p className=" w-[150px]">{patient.dob}</p>
                        <p className=" w-[150px]">{date}</p>
                      </div>
                    </>
                  );
                })
              ) : (
                <div className=" flex justify-center mt-4">
                  <p>No data found.</p>
                </div>
              )}
            </TableForm>
            {monthlyUsers && monthlyUsers.length > 0 && (
              <div className="flex justify-end mr-8">
                <CSVLink data={monthlyUsers} filename={"monthly_user.csv"}>
                  <button className=" bg-green-800 text-white py-2 px-2 hover:bg-green-950">
                    Export Data
                  </button>
                </CSVLink>
              </div>
            )}
          </TabPanel>
          <TabPanel id="monthly-patient">
            <div className="w-[800px]">
              <TableForm>
                <div className="flex px-4 py-4 border-b-[1px] font-medium sticky top-0 bg-[#e2e2e2]">
                  <p className="w-[100px]">No</p>
                  <p className="w-[300px]">Doctor</p>
                  <p className="w-[300px]">Total Appointment</p>
                </div>
                {monthlyDoctors && monthlyDoctors.length > 0 ? (
                  monthlyDoctors.map((d, index) => {
                    return (
                      <div key={d.id} className="flex px-4 py-4 border-b-[1px]">
                        <p className=" w-[100px]">{index + 1}</p>
                        <p className=" w-[300px]">{d.doctor_name}</p>
                        <p className=" w-[300px]">{d.total_appointment}</p>
                      </div>
                    );
                  })
                ) : (
                  <div className=" flex justify-center mt-4">
                    <p>No data found.</p>
                  </div>
                )}
              </TableForm>
              {monthlyDoctors && monthlyDoctors.length > 0 && (
              <div className="flex justify-end mr-8">
                <CSVLink data={monthlyDoctors} filename={"monthly_doctor.csv"}>
                  <button className=" bg-green-800 text-white py-2 px-2 hover:bg-green-950">
                    Export Data
                  </button>
                </CSVLink>
              </div>
            )}
            </div>
          </TabPanel>
          <TabPanel id="daily-appointment">
            <TableForm>
              <div className="flex px-4 py-4 border-b-[1px] font-medium sticky top-0 bg-[#e2e2e2]">
                <p className="w-[10%]">No</p>
                <p className="w-[20%]">Patient</p>
                <p className="w-[25%]">Email</p>
                <p className="w-[20%]">Doctor</p>
                <p className="w-[20%]">Date</p>
                <p className="w-[20%]">Time</p>
              </div>
              {dailyAppointments && dailyAppointments.length > 0 ? (
                dailyAppointments.map((a, index) => (
                  <div className="flex px-4 py-4 border-b-[1px] bg-[#f8f8f8]">
                    <p className="w-[10%]">{index + 1}</p>
                    <p className="w-[20%]">{a.patient_name}</p>
                    <p className="w-[25%]">{a.email ? a.email : "-"}</p>
                    <p className="w-[20%]">{a.doctor_name}</p>
                    <p className="w-[20%]">{a.date}</p>
                    <p className="w-[20%]">{a.time}</p>
                  </div>
                ))
              ) : (
                <div className=" flex justify-center mt-4">
                  <p>No appointment found.</p>
                </div>
              )}
            </TableForm>
            {dailyAppointments && dailyAppointments.length > 0 && (
              <div className="flex justify-end mr-8">
                <CSVLink data={dailyAppointments} filename={"daily_appointment.csv"}>
                  <button className=" bg-green-800 text-white py-2 px-2 hover:bg-green-950">
                    Export Data
                  </button>
                </CSVLink>
              </div>
            )}
          </TabPanel>
          <TabPanel id="monthly-appointment">
            <TableForm>
              <div className="flex px-4 py-4 border-b-[1px] font-medium sticky top-0 bg-[#e2e2e2]">
                <p className="w-[10%]">No</p>
                <p className="w-[20%]">Patient</p>
                <p className="w-[25%]">Email</p>
                <p className="w-[20%]">Doctor</p>
                <p className="w-[20%]">Date</p>
                <p className="w-[20%]">Time</p>
              </div>
              {monthlyAppointments && monthlyAppointments.length > 0 ? (
                monthlyAppointments.map((a, index) => (
                  <div className="flex px-4 py-4 border-b-[1px] bg-[#f8f8f8]">
                    <p className="w-[10%]">{index + 1}</p>
                    <p className="w-[20%]">{a.patient_name}</p>
                    <p className="w-[25%]">{a.email ? a.email : "-"}</p>
                    <p className="w-[20%]">{a.doctor_name}</p>
                    <p className="w-[20%]">{a.date}</p>
                    <p className="w-[20%]">{a.time}</p>
                  </div>
                ))
              ) : (
                <div className=" flex justify-center mt-4">
                  <p>No appointment found.</p>
                </div>
              )}
            </TableForm>
            {monthlyAppointments && monthlyAppointments.length > 0 && (
              <div className="flex justify-end mr-8">
                <CSVLink data={monthlyAppointments} filename={"monthly_appointment.csv"}>
                  <button className=" bg-green-800 text-white py-2 px-2 hover:bg-green-950">
                    Export Data
                  </button>
                </CSVLink>
              </div>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Report;
