import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb.'
import PaymentForm from '../components/payment/PaymentForm'
import axios from 'axios'
import { url } from '../api/api'
import { useLoaderData } from 'react-router-dom'

const PaymentByID = () => {
  const appointData = useLoaderData();

  return (
    <>
        <Breadcrumb title="Payment" />
        <PaymentForm />
    </>
  )
}

export default PaymentByID

export const loader = async () => {
  const res = await axios.post(`${url}/appointment/detail`, {id: currentId})
  console.log(res);
  return res;
}