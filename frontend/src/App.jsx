import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import DoctorPage, { loader as allDoctorsLoader } from "./pages/DoctorPage";
import SpecialtyPage, {
  loader as specialtiesLoader,
} from "./pages/SpecialtyPage";
import ContactPage from "./pages/ContactPage";
import AppoinmentPage from "./pages/AppoinmentPage";
import { authLoader, tokenLoader } from "./util/auth";
import SearchResultPage from "./pages/SearchResultPage";
import SpecialtyFilterPage from "./pages/SpecialtyFilterPage";
import UserProfilePage from "./pages/UserProfilePage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Patients, { loader as getPatientsLoader } from "./pages/admin/Patients";
import Doctor, { loader as getDoctorsLoader } from "./pages/admin/Doctor";
import Specialty, { loader as getSpecialty } from "./pages/admin/Specialty";
import Appointment, { loader as getAllAppoints } from "./pages/admin/Appointment";
import Payment from "./pages/admin/Payment";
import Report from "./pages/admin/Report";
import Profile from "./pages/admin/AdminProfile";
import AddDoctor from "./components/admin/doctor/AddDoctor";
import EditPatient, {
  loader as getSinglePatient,
} from "./components/admin/patient/EditPatient";
import EditDoctor, {
  loader as getSingleDoctor,
} from "./components/admin/doctor/EditDoctor";
import AddSpecialty from "./components/admin/specialty/AddSpecialty";
import EditSpecialty, {
  loader as editSpecialtyLoader,
} from "./components/admin/specialty/EditSpecialty";
import DoctorResultPage from "./pages/DoctorResultPage";
import PaymentPage, { loader as paymentIdLoader} from "./pages/PaymentByID";
import AppointmentDetail, { loader as appointDetailLoader } from "./pages/admin/AppointmentDetail";
import { adminAuthLoader, adminTokenLoader } from "./util/adminAuth";
import AdminRegister from "./pages/admin/AdminRegister";
import AdminProfile from "./pages/admin/AdminProfile";
import PaymentByID from "./pages/PaymentByID";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      loader: tokenLoader,
      id: "root",
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "/user/profile",
          element: <UserProfilePage />,
          loader: authLoader,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/doctor",
          element: <DoctorPage />,
          loader: allDoctorsLoader,
        },
        {
          path: ":specialty",
          id: "specialty",
          loader: specialtiesLoader,
          children: [
            {
              index: true,
              element: <SpecialtyPage />,
            },
            {
              path: "name",
              element: <SpecialtyFilterPage />,
            },
          ],
        },
        {
          path: "/specialty-search",
          element: <SearchResultPage />,
        },
        {
          path: "/doctor-search",
          element: <DoctorResultPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/appointment",
          element: <AppoinmentPage />,
          loader: authLoader,
        },
        {
          path: "/payment",
          element: <PaymentPage />,
          loader: authLoader,
        },
      ],
    },
    {
      path: "admin",
      element: <AdminLayout />,
      loader: adminTokenLoader,
      children: [
        {
          index: true,
          element: <Dashboard />,
          loader: adminAuthLoader
        },
        {
          path: "patient",
          id: "patient",
          loader: getPatientsLoader,
          children: [
            {
              index: true,
              element: <Patients />,
            },
            {
              path: "edit/:id",
              element: <EditPatient />,
              loader: getSinglePatient,
            },
          ],
        },
        {
          path: "doctor",
          id: "doctor",
          loader: getDoctorsLoader,
          children: [
            {
              index: true,
              element: <Doctor />,
            },
            {
              path: "new",
              element: <AddDoctor />,
            },
            {
              path: "edit/:id",
              element: <EditDoctor />,
              loader: getSingleDoctor,
            },
          ],
        },
        {
          path: "specialty",
          id: "admin-specialty",
          loader: getSpecialty,
          children: [
            {
              index: true,
              element: <Specialty />,
            },
            {
              path: "new",
              element: <AddSpecialty />,
            },
            {
              path: "edit/:id",
              element: <EditSpecialty />,
              loader: editSpecialtyLoader,
            },
          ],
        },
        {
          path: "appointment",
          id: 'admin-appointment',
          loader: getAllAppoints,
          children: [
            {
              index: true,
              element: <Appointment />,
            },
            {
              path: ":id",
              element: <AppointmentDetail />,
              loader: appointDetailLoader
            }
          ]
        },
        {
          path: "payment",
          children: [
            {
              index: true,
              element: <Payment />,
            },
            {
              path: ":currentId",
              element: <PaymentByID />,
              loader: appointDetailLoader
            }
          ]
        },
        {
          path: "report",
          element: <Report />,
        },
        {
          path: "profile",
          element: <AdminProfile />,
        }
      ],
    },
    {
      path: "/admin/login",
      element: <AdminLoginPage />,
    },
    {
      path: "/admin/register",
      element: <AdminRegister />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
