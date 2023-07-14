import React from "react";
import breadcrumbBg from "../../assets/images/breadcrumb-bg.png";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className=" relative">
      <div className="w-full">
        <div className="">
          <img
            src={breadcrumbBg}
            alt="bread-bg"
            className=" breadcrumb_img object-cover h-[200px] w-full"
          />
        </div>
        <div className="absolute top-5 left-[140px] text-[#0C3C5F]">
          <h2 className=" my-6 font-semibold text-5xl">{title}</h2>
          <p className=" text-md text-[#082a42]">
            <Link to="/" className=" hover:text-[#18699e]">Home</Link> / {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
