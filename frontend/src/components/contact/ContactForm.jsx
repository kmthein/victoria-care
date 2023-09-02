import React, { useState } from "react";
import MenuPill from "../MenuPill";
import axios from "axios";
import { url } from "../../api/api";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const initialInput = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  };
  const [input, setInput] = useState(initialInput);

  const inputChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toast = useToast();

  const navigate = useNavigate();

  const { name, email, subject, phone, message } = input;

  const submitContactHandler = async () => {
    if ((name == "" || email == "" || subject == "" || message == "")) {
      toast({
        title: "Message not sent.",
        description: "Please fill neccessary information.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    } else {
      try {
        await axios.post(`${url}/contact/add`, { values: input });
        toast({
          title: "Message sent.",
          description: "Your message has been sent, we will contact you soon.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setInput(initialInput);
        navigate("/");
      } catch (error) {
        toast({
          title: "Message wasn't sent.",
          description: "Something was wrong, try again later.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <div className=" bg-[#F6F4F4] py-12 px-20 w-[50%] h-[600px]">
      <MenuPill
        title={"Contact Us"}
        style={"text-[#527fa0] border-[#80a6c2]"}
      />
      <h2 className="mt-8 text-3xl font-bold">If you have any question?</h2>
      <h2 className="mb-8 text-3xl font-bold">Please Contact Us!</h2>
      <div className="inter contact-input">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="py-2 px-4 w-[50%]  rounded-md"
            onChange={inputChangeHandler}
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            className="py-2 px-4 w-[50%]  rounded-md"
            onChange={inputChangeHandler}
          />
        </div>
        <div className=" my-4">
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="py-2 px-4 w-full rounded-md"
            onChange={inputChangeHandler}
          />
        </div>
        <div className=" my-4">
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            name="phone"
            className="py-2 px-4 w-full rounded-md"
            onChange={inputChangeHandler}
          />
        </div>
        <div className=" my-4">
          <textarea
            type="text"
            placeholder="Message"
            name="message"
            rows={5}
            className="py-2 px-4 w-full rounded-md"
            onChange={inputChangeHandler}
          />
        </div>
        <div className=" flex justify-center">
          <button
            className="bg-[#576CBC] text-white text-[15px] py-2 px-8 rounded-md"
            onClick={submitContactHandler}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
