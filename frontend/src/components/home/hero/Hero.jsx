import React from "react";
import heroImg from "../../../assets/images/hero-img2.png";
import wave from "../../../assets/images/wave 1.png";
import { delay, motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="py-8 px-8 md:py-12 md:px-12 bg-[#c0e9fd] opacity-40 absolute rounded-full top-20 right-0"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="py-6 px-6 md:py-12 md:px-12 bg-[#c0e9fd] opacity-40 absolute rounded-full top-40 md:top-20 md:left-[70px]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="py-4 px-4 md:py-8 md:px-8 bg-[#c0e9fd] opacity-40 absolute rounded-full top-[120px] right-[90px]"
      ></motion.div>
      <div className="w-full md:w-[80%] mx-auto relative">
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className=" md:py-6 md:px-6 bg-[#c0e9fd] opacity-40 absolute rounded-full top-10"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className=" md:py-8 md:px-8 bg-[#c0e9fd] opacity-40 absolute rounded-full top-[450px] xl:top-[420px] 2xl:top-[550px] left-[40%] z-10"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="py-8 px-8 md:py-12 md:px-12 bg-[#c0e9fd] opacity-40 absolute rounded-full top-[420px] xl:top-[380px] 2xl:top-[580px] left-[45%] z-10"
        ></motion.div>
        <div className=" flex flex-col-reverse md:flex-row">
          <motion.div
            className="mt-[50px] md:mt-[120px] 2xl:mt-[200px] inter w-[80%] md:w-[50%] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h3 className=" text-[#0C3C5F] font-semibold text-[30px] md:text-[40px] lg:text-[50px] 2xl:text-[60px] tracking-normal z-50 relative">
              Medical Care Is{" "}
              <span className=" md:block">Just A Click Away</span>
            </h3>
            <p className="my-4 md:w-[400px] 2xl:text-lg">
              You can make an appointment with doctor easily anytime
            </p>
            <div className="pt-2">
              <button className="bg-[#5FA5D9] text-white py-3 px-6 rounded-md">
                Get Started Now
              </button>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-[50%] mt-[120px]"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <img src={heroImg} alt="hero-img" className=" w-[80%] mx-auto" />
          </motion.div>
        </div>
      </div>
      <div className=" xl:mt-[-80px] 2xl:mt-0 w-full z-[1000]">
        <img src={wave} alt="wave" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
