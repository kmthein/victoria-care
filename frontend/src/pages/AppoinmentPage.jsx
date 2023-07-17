import React from 'react'
import AppointmentForm from '../components/appointment/AppointmentForm'
import Breadcrumb from '../components/breadcrumb/Breadcrumb.'

const AppoinmentPage = () => {
  return (
    <>
        <Breadcrumb title="Appointment" />
        <AppointmentForm />
    </>
  )
}

export default AppoinmentPage