import React from "react";
import { Git, Gmail, Linkedin } from "../../assets/icons";
import Section from "../../Layouts/Section";

const ContactMe = () => {
  return (
    <Section id="contactId" title="Contact" className=" text-sm">
      <p className="">
        I'm currently looking for job Fresher Frontend. Let's connect...
      </p>
      <p className="pt-4">duynhatran201@gmail.com</p>
      <div className="flex gap-2 pt-4 ">
        <a href="https://www.linkedin.com/in/dnt201/" rel="opener">
          <Linkedin />
        </a>
        <a href="mailto:duynhatran201@gmail.com">
          <Gmail />
        </a>
        <a href="https://github.com/dnt201" rel="opener">
          <Git />
        </a>
      </div>
    </Section>
  );
};

export default ContactMe;
