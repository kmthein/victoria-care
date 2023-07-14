import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb.'
import AboutUs from '../components/home/about-us/AboutUs'
import Features from '../components/home/features/Features'
import Doctor from '../components/home/doctors/Doctor'

const AboutPage = () => {
  return (
    <>
      <Breadcrumb title={"About"} />
      <AboutUs />
      <Features />
      <Doctor />
    </>
  )
}

export default AboutPage