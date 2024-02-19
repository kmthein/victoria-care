import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb.";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb title={"Contact Us"} />
      <div className="w-[80%] mx-auto my-8 py-5">
        <ContactInfo />
        <div className=" flex my-8">
          <ContactForm />
          <Map />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
