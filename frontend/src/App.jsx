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
import Appointment from "./pages/admin/Appointment";
import Payment from "./pages/admin/Payment";
import Report from "./pages/admin/Report";
import Profile from "./pages/admin/Profile";
import AddDoctor from "./components/admin/doctor/AddDoctor";
import EditPatient, { loader as getSinglePatient } from "./components/admin/patient/EditPatient";
import EditDoctor, { loader as getSingleDoctor } from "./components/admin/doctor/EditDoctor";
import AddSpecialty from "./components/admin/specialty/AddSpecialty";

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
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/appointment",
          element: <AppoinmentPage />,
          loader: authLoader,
        },
      ],
    },
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: 'patient',
          id: 'patient',
          loader: getPatientsLoader,
          children: [
            {
              index: true,
              element: <Patients />,
            },
            {
              path: 'edit/:id',
              element: <EditPatient />,
              loader: getSinglePatient
            }
          ]
        },
        {
          path: 'doctor',
          id: 'doctor',
          loader: getDoctorsLoader,
          children: [
            {
              index: true,
              element: <Doctor />,
            },
            {
              path: 'new',
              element: <AddDoctor />
            },
            {
              path: 'edit/:id',
              element: <EditDoctor />,
              loader: getSingleDoctor
            }
          ]
        },
        {
          path: 'specialty',
          id: 'admin-specialty',
          loader: getSpecialty,
          children: [
            {
              index: true,
              element: <Specialty />,
            },
            {
              path: 'new',
              element: <AddSpecialty />
            }
          ]
        },
        {
          path: 'appointment',
          element: <Appointment />
        },
        {
          path: 'payment',
          element: <Payment />
        },
        {
          path: 'report',
          element: <Report />
        },
        {
          path: 'profile',
          element: <Profile />
        },
        {
          path: 'login',
          element: <AdminLoginPage />
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
