import React from "react";
import AboutUs from "../components/home/about-us/AboutUs";
import Hero from "../components/home/hero/Hero";
import Features from "../components/home/features/Features";
import Doctor from "../components/home/doctors/Doctor";
import Feedback from "../components/home/feedback/Feedback";
import Reveal from "../components/animate/Reveal";

const Homepage = () => {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <AboutUs />
      </Reveal>
      <Reveal>
        <Features />
      </Reveal>
      <Reveal>
        <Doctor />
      </Reveal>
      <Reveal>
        <Feedback />
      </Reveal>
    </>
  );
};

export default Homepage;
