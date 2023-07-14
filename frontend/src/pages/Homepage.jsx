import React from 'react'
import AboutUs from '../components/home/about-us/AboutUs'
import Hero from '../components/home/hero/Hero'
import Features from '../components/home/features/Features'
import Doctor from '../components/home/doctors/Doctor'
import Feedback from '../components/home/feedback/Feedback'
import Footer from '../components/footer/Footer'


const Homepage = () => {
  return (
    <>
        <Hero />
        <AboutUs />
        <Features />
        <Doctor />
        <Feedback />
    </>
  )
}

export default Homepage