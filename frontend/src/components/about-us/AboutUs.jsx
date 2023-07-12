import React from "react";
import img1 from "../../assets/images/about-img1.jpg";
import img2 from "../../assets/images/about-img2.jpg";
import MenuPill from "../MenuPill";
import { BsCheckCircle } from 'react-icons/bs';

const AboutUs = () => {
  return (
    <div className=" w-full md:w-[80%] mx-auto inter text-[#53748B]">
      <div className=" flex py-[120px]">
        <div className="  relative w-[50%]">
          <img
            src={img1}
            className="w-[300px] h-[300px] object-cover"
            alt="img1"
          />
          <div className=" border-[12px] absolute top-60 left-40 border-white rounded-xl">
            <img
              src={img2}
              className="w-[250px] h-[180px] object-cover rounded-lg"
              alt="img2"
            />
          </div>
        </div>
        <div className=" w-[50%]">
            <MenuPill title={"About Us"} />
            <h2 className=" my-6 text-[#0C3C5F] font-semibold text-3xl">Welcome to Victoria Care</h2>
            <p className=" leading-relaxed">Victoria Hospital offers high quality medical services and it is well-equipped with modern technology. It is located on No.68, Taw Win Road, 9 Mile, Mayagone Township, Yangon, Myanmar. Victoria Hospital offers comprehensive medical services with superior quality and high efficiency.</p>
            <div className="my-8">
                <div className=" flex items-center gap-2 my-3">
                    <BsCheckCircle className="text-[#061f31]" />
                    <span>Quality Healthcare</span>
                </div>
                <div className=" flex items-center gap-2 my-3">
                    <BsCheckCircle className="text-[#061f31]" />
                    <span>Only Qualified Doctors</span>
                </div>
                <div className=" flex items-center gap-2 my-3">
                    <BsCheckCircle className="text-[#061f31]" />
                    <span>Medical Research Professionals</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
