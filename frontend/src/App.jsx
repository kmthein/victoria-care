import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import DoctorPage from './pages/DoctorPage';
import SpecialtyPage from './pages/SpecialtyPage';
import ContactPage from './pages/ContactPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
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
          element: <DoctorPage />
        },
        {
          path: '/specialty',
          element: <SpecialtyPage />
        },
        {
          path: '/contact',
          element: <ContactPage />
        },
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
