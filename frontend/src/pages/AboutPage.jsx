import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb.";
import AboutUs from "../components/home/about-us/AboutUs";
import Features from "../components/home/features/Features";
import Doctor from "../components/home/doctors/Doctor";
import Reveal from "../components/animate/Reveal";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb title={"About"} />
      <Reveal>
        <AboutUs />
      </Reveal>
      <Reveal>
        <Features />
      </Reveal>
    </>
  );
};

export default AboutPage;
