import React from "react";
import heroImg from "../../assets/images/hero-img.png";
import wave from "../../assets/images/wave 1.png";

const Hero = () => {
  return (
    <div className="relative">
      <div className="py-8 px-8 md:py-12 md:px-12 bg-[#addcf3] opacity-40 absolute rounded-full top-20 right-0"></div>
      <div className="py-6 px-6 md:py-12 md:px-12 bg-[#addcf3] opacity-40 absolute rounded-full top-40 md:top-20 md:left-[70px]"></div>
      <div className="py-4 px-4 md:py-8 md:px-8 bg-[#addcf3] opacity-40 absolute rounded-full top-[120px] right-[90px]"></div>
      <div className="w-full md:w-[80%] mx-auto relative">
        <div className=" md:py-6 md:px-6 bg-[#addcf3] opacity-40 absolute rounded-full top-10"></div>
        <div className=" md:py-8 md:px-8 bg-[#addcf3] opacity-40 absolute rounded-full top-[450px] left-[40%] z-10"></div>
        <div className="py-8 px-8 md:py-12 md:px-12 bg-[#addcf3] opacity-40 absolute rounded-full top-[420px] left-[45%] z-10"></div>
        <div className=" flex flex-col-reverse md:flex-row">
          <div className="mt-[50px] md:mt-[120px] inter w-[80%] md:w-[50%] mx-auto">
            <h3 className=" text-[#0C3C5F] font-semibold text-[30px] md:text-[40px] lg:text-[50px] tracking-normal z-50 relative">
              Medical Care Is <span className=" md:block">Just A Click Away</span>
            </h3>
            <p className="my-4 md:w-[400px]">
              You can make an appointment with doctor easily anytime
            </p>
            <div className="pt-2">
              <button className="bg-[#5FA5D9] text-white py-3 px-6 rounded-md">
                Get Started Now
              </button>
            </div>
          </div>
          <div className="w-full md:w-[50%] mt-[120px] ">
            <img src={heroImg} alt="hero-img" className=" w-[80%] mx-auto" />
          </div>
        </div>
      </div>
      <div className=" lg:mt-[-55px] w-full">
        <img src={wave} alt="wave" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
