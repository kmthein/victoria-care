import { useToast } from "@chakra-ui/react";
import {
  CardElement,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { url } from "../../api/api";

const CardForm = () => {
  const [success, setSuccess] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [disabled, setDisabled] = useState(true);

  const [appointID, setAppointID] = useState('');

  const fees = useSelector((state) => state.appoint.selectedDoctor.fees);

  const {name, id: userId} = useSelector((state) => state.auth.currentUser);

  const getAppointIDHandler = async () => {
    const res = await axios.post(`${url}/appointment/get-id`, {id: userId});
    setAppointID(res.data[0].id);
  }

  console.log(appointID);

  useEffect(() => {
    getAppointIDHandler();
  }, [])

  const savePrice = (+fees + 3);

  const totalPrice = (+fees + 3) * 100;

  const toast = useToast();

  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  const handleChange = async (event) => {
    setDisabled(event.empty);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const currentDate = date.toDateString();
    const currentTime = date.toLocaleTimeString();
    const payment = {
      amount: savePrice,
      date: currentDate,
      time: currentTime,
      patient_id: userId,
      patient_name: name,
      appointment_id: appointID,
    }
    setIsSubmitting(true);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardCvcElement, CardExpiryElement, CardNumberElement)
  })
    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: totalPrice,
          id,
          userId: userId
        });
        if (response.data.success) {
          console.log("Successful payment");
          await axios.post(`${url}/appointment/payment`, {values: payment})
          navigate("/");
          toast({
            title: "Payment Successful.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          await axios.post(`${url}/appointment/update-status`, {pid: userId, aid: appointID});
        }
        setIsSubmitting(false);      
      } catch (error) {
        console.log("Error", error);
        toast({
          title: "Payment Failed.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setIsSubmitting(false);
      }
    } else {
      console.log(error.message);
      toast({
        title: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setIsSubmitting(false);
    }
  };

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#0000f",
        color: "#0000f",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "#black" },
      },
      invalid: {
        iconColor: "#ed7878",
        color: "#ed7878",
      },
    },
  };

  return (
    <>
      <div className=" my-4">
        <fieldset className="FormGroup">
          <label
            htmlFor="num"
            className="FormRow text-sm font-semibold text-gray-500"
          >
            Card Number
          </label>
          <div className="FormRow">
            <CardNumberElement
              options={CARD_OPTIONS}
              className="bg-white py-2 rounded-md" onChange={handleChange}
            />
          </div>
        </fieldset>
        <fieldset className="FormGroup">
          <label
            htmlFor="exp"
            className="FormRow text-sm font-semibold text-gray-500"
          >
            Expiration Date
          </label>
          <div className="FormRow">
            <CardExpiryElement options={CARD_OPTIONS} className="bg-white py-2 rounded-md" onChange={handleChange} />
          </div>
        </fieldset>
        <fieldset className="FormGroup">
          <label
            htmlFor="cvc"
            className="FormRow text-sm font-semibold text-gray-500"
          >
            CVC
          </label>
          <div className="FormRow">
            <CardCvcElement options={CARD_OPTIONS} className="bg-white py-2 rounded-md mb-6" onChange={handleChange} />
          </div>
        </fieldset>
      </div>
      <div className=" text-white mt-8 flex justify-end gap-4">
        <Link to='/appointment'>
        <button className="bg-[#313131] py-[10px] rounded-md w-20">Back</button>
        </Link>
        <button
          className="bg-[#19376D] py-[10px] rounded-md w-20 disabled:bg-[#50668f] disabled:opacity-[0.8]"
          onClick={handleSubmit}
          disabled={disabled || isSubmitting}
        >
          {isSubmitting ? <BeatLoader color="#fff" size={7} /> : "Confirm"}
        </button>
      </div>
    </>
  );
};

export default CardForm;
