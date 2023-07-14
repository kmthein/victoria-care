import React from "react";
import MenuPill from "../../MenuPill";
import doc1 from "../../../assets/images/team-1.jpg";
import doc2 from "../../../assets/images/team-2.jpg";
import doc3 from "../../../assets/images/team-3.jpg";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Doctor = () => {
  return (
    <div className="py-8 pt-20 text-center">
      <MenuPill title={"Doctors"} style="text-gray-500 border-gray-500" />
      <h2 className=" my-6 text-[#0C3C5F] font-semibold text-3xl inter">
        Explore Our Best Doctors
      </h2>
      <div className="xl:w-[80%] mx-auto lg:flex justify-center md:gap-4 lg:gap-20 pt-8">
        <motion.div whileHover={{ scale: 1.05 }} transition={{duration: 0.5}} className=" bg-blue-200 my-8 w-[280px] md:w-[300px] mx-auto lg:h-[500px] lg:w-[300px] rounded-xl">
          <img
            src={doc1}
            alt="doc"
            className=" h-[300px] w-full md:h-[400px] object-cover rounded-t-xl"
          />
          <h5 className="text-lg font-semibold my-2 pt-1">Dr Yi Yi Khine</h5>
          <span>Nephrology</span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{duration: 0.5}} className=" bg-blue-200 my-8 w-[280px] md:w-[300px] mx-auto lg:h-[500px] lg:w-[300px] rounded-xl">
          <img
            src={doc2}
            alt="doc"
            className=" h-[300px] w-full md:h-[400px] object-cover rounded-t-xl"
          />
          <h5 className="text-lg font-semibold my-2 pt-1">Dr Khin Maung Win</h5>
          <span>Cardiology</span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{duration: 0.5}} className=" bg-blue-200 my-8 w-[280px] md:w-[300px] mx-auto lg:h-[500px] lg:w-[300px] rounded-xl">
          <img
            src={doc3}
            alt="doc"
            className=" h-[300px] w-full md:h-[400px] object-cover rounded-t-xl"
          />
          <h5 className="text-lg font-semibold my-2 pt-1">Dr Sapal Hlaing</h5>
          <span>Nephrology</span>
        </motion.div>
      </div>
      <div className="w-[90%]">
        <Link
          to="/doctor"
          className="flex justify-end items-center gap-2 my-2 text-md"
        >
          <motion.li whileHover={{ scale: 1.05, color: '#0f0f8e' }}>
            <p className="text-right inline-block">view more</p>
            <AiFillCaretRight className="inline-block" />
          </motion.li>
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
