import React from "react";
import { NavLink } from "react-router-dom";
import { ImHome3 } from "react-icons/im";
import { MdOutlinePayment, MdOutlineFolderSpecial } from "react-icons/md";
import { TbReportMedical } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BsPeopleFill, BsFillPersonBadgeFill, BsCalendarCheck } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className=" bg-[#303B40] min-h-[85vh] w-[300px] text-white">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#3a454b] flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b]"
            : `flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b] `
        }
        to="/admin"
        end
      >
        <ImHome3 className="text-xl" />
        <span>Dashboard</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#3a454b] flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b]"
            : `flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b] `
        }
        to="patient"
      >
        <BsPeopleFill className="text-xl" />
        <span>Patient</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#3a454b] flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b]"
            : `flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b] `
        }
        to="doctor"
      >
        <BsFillPersonBadgeFill className="text-xl" />
        <span>Doctor</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#3a454b] flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b]"
            : `flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b] `
        }
        to="specialty"
      >
        <MdOutlineFolderSpecial className="text-xl" />
        <span>Specialty</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#3a454b] flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b]"
            : `flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b] `
        }
        to="appointment"
      >
        <BsCalendarCheck className="text-xl" />
        <span>Appointment</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#3a454b] flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b]"
            : `flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b] `
        }
        to="payment"
      >
        <MdOutlinePayment className="text-xl" />
        <span>Payment</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#3a454b] flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b]"
            : `flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b] `
        }
        to="report"
      >
        <TbReportMedical className="text-xl" />
        <span>Report</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-[#3a454b] flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b]"
            : `flex items-center gap-4 py-4 px-8 hover:bg-[#3a454b] `
        }
        to="profile"
      >
        <CgProfile className="text-xl" />
        <span>My Profile</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
