import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import DoctorPage, { loader as allDoctorsLoader } from './pages/DoctorPage';
import SpecialtyPage, { loader as specialtiesLoader } from './pages/SpecialtyPage';
import ContactPage from './pages/ContactPage';
import AppoinmentPage from './pages/AppoinmentPage';
import { authLoader, tokenLoader } from './util/auth';
import SearchResultPage from './pages/SearchResultPage';
import SpecialtyFilterPage from './pages/SpecialtyFilterPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      loader: tokenLoader,
      id: 'root',
      children: [
        {
          index: true,
          element: <Homepage />
        },
        {
          path: '/about',
          element: <AboutPage />
        },
        {
          path: '/doctor',
          element: <DoctorPage />,
          loader: allDoctorsLoader
        },
        {
          path: ':specialty',
          id: 'specialty',
          loader: specialtiesLoader,
          children: [
            {
              index: true,
              element: <SpecialtyPage />,
            },     
            {
              path: 'name',
              element: <SpecialtyFilterPage />
            }      
          ]
        },
        {
          path: '/specialty-search',
          element: <SearchResultPage />,
        },
        {
          path: '/contact',
          element: <ContactPage />
        },
        {
          path: '/appointment',
          element: <AppoinmentPage />,
          loader: authLoader
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
