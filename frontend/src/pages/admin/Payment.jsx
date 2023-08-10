import React, { useEffect, useState } from "react";
import TableForm from "../../components/admin/table/TableForm";
import axios from "axios";
import { url } from "../../api/api";

const Payment = () => {
  const paymentDataHandler = async () => {
    const res = await axios.get(`${url}/appointment/get-payment`);
    setPayment(res.data);
  }

  const [payment, setPayment] = useState();

  useEffect(() => {
    paymentDataHandler();
  }, []) 

  return (
    <>
      <div className=" flex justify-between mx-8 mt-4 items-center">
        <h5 className=" text-xl text-black/70">Payment</h5>
      </div>
      <TableForm>
        <div className="flex px-4 py-4 border-b-[1px] font-medium sticky top-0 bg-[#e2e2e2]">
          <p className="w-[10%]">No</p>
          <p className="w-[25%]">Date</p>
          <p className="w-[25%]">Time</p>
          <p className="w-[20%]">Paid By</p>
          <p className="w-[20%]">Appointment ID</p>
        </div>
        {payment &&
          payment.length > 0 &&
          payment.map((p, index) => (
            <div className="flex px-4 py-4 border-b-[1px] bg-[#f8f8f8]">
              <p className="w-[10%]">{index + 1}</p>
              <p className="w-[25%]">{p.date}</p>
              <p className="w-[25%]">{p.time}</p>
              <p className="w-[20%]">{p.user_name}</p>
              <p className="w-[20%]">{p.appointment_id}</p>
            </div>
          ))}
      </TableForm>
    </>
  );
};

export default Payment;
