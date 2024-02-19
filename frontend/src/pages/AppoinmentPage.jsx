import React, { useEffect } from 'react'
import AppointmentForm from '../components/appointment/AppointmentForm'
import Breadcrumb from '../components/breadcrumb/Breadcrumb.'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AppoinmentPage = () => {
  return (
    <>
        <Breadcrumb title="Appointment" />
        <AppointmentForm />
    </>
  )
}

export default AppoinmentPage