import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker, HiMail } from "react-icons/hi";

const ContactInfo = () => {
  return (
    <>
      <div className=" flex gap-10">
        <div className="bg-[#F6F4F4] w-[33%] px-8 py-16">
          <div className=" flex items-center gap-4">
            <div className=" py-2 px-2 bg-white rounded-full">
              <HiLocationMarker className="text-2xl text-[#576CBC]" />
            </div>
            <div>
              <p>Address</p>
              <h5 className="font-medium">800 Commissioners Rd E, London, ON N6A 5W9, Canada</h5>
            </div>
          </div>
        </div>
        <div className="bg-[#F6F4F4] w-[33%] px-8 py-16">
          <div className=" flex items-center gap-4">
            <div className=" py-2 px-2 bg-white rounded-full">
              <BsFillTelephoneFill className="text-2xl text-[#576CBC]" />
            </div>
            <div>
              <p>Phone</p>
              <h5 className="font-medium">+1 519-685-8500</h5>
            </div>
          </div>
        </div>
        <div className="bg-[#F6F4F4] w-[33%] px-8 py-16">
          <div className=" flex items-center gap-4">
            <div className=" py-2 px-2 bg-white rounded-full">
              <HiMail className="text-2xl text-[#576CBC]" />
            </div>
            <div>
              <p>Mail</p>
              <h5 className="font-medium">info@victoriahospital.com</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
