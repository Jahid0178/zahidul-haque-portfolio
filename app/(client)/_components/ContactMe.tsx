import React from "react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact">
      <div className="container">
        <SectionHeading
          title="Get in Touch"
          subtitle="Reach Out to Connect or Collaborate"
        />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactMe;
