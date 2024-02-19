import React from "react";
import img1 from "../../../assets/images/about-img1.jpg";
import img2 from "../../../assets/images/about-img2.jpg";
import MenuPill from "../../MenuPill";
import { BsCheckCircle } from 'react-icons/bs';
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className=" relative w-full xl:w-[80%] xl:h-[700px] mx-auto inter text-[#53748B]">
      <div className=" flex flex-col-reverse xl:flex xl:flex-row py-[60px] mb-[60px] md:py-[120px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="  relative w-full xl:w-[50%]">
          <img
            src={img1}
            className=" top-60 xl:top-0 w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] object-cover ml-8 md:ml-[30%] xl:ml-0"
            alt="img1"
          />
          <div className=" border-[12px] absolute top-[80px] left-40 md:top-[120px] md:left-[400px] lg:top-60 lg:left-[200px] border-white rounded-xl">
            <img
              src={img2}
              className="w-[180px] h-[140px] xl:w-[200px] xl:h-[170px] 2xl:w-[280px] 2xl:h-[200px] object-cover rounded-lg"
              alt="img2"
            />
          </div>
        </motion.div>
        <motion.div initial={{ x: '+100vw' }} animate={{ x: 0 }} transition={{ delay: 1, duration: 0.5 }} className=" w-[90%] mx-auto xl:mx-0 xl:w-[50%]">
            <MenuPill title={"About Us"} style="border-[#5e8099]" />
            <h2 className=" my-6 text-[#0C3C5F] font-semibold text-3xl">Welcome to Victoria Care</h2>
            <p className=" leading-relaxed">Victoria Hospital offers high quality medical services and it is well-equipped with modern technology. It is located on No.68, Taw Win Road, 9 Mile, Mayagone Township, Yangon, Myanmar. Victoria Hospital offers comprehensive medical services with superior quality and high efficiency.Victoria Hospital aims to go beyond medical and healthcare services. Victoria organizes and conducts regular consultations and encourages discussions with respected and credible working partners and stakeholders.</p>
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
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
