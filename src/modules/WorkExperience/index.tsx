import React from "react";
import Section from "../../Layouts/Section";
import UsumLogo from "../../assets/images/logo-usum-software.png";

import Item from "./Item";

const WorkExperience = () => {
  return (
    <Section id="about" title="Work Experience " className="mt-16">
      <p className="mb-4">
        I'm final year student so I don't have many experience. But I have many
        mini project during my study. I hope we can meet and work together.
        Thanks you {"<3"}.
      </p>
      <div className="flex flex-col justify-start mt-4 ">
        <Item
          imgLogo={UsumLogo}
          companyName="Usum"
          linkCompany="https://www.usumsoftware.com/"
        />
      </div>
      <div className=" w-full mt-16">
        <p className="text-center">
          Currently, I'm using libraries and tools{" "}
          <b className="text-lg underline font-semibold text-secondary">EX</b>
        </p>
      </div>
    </Section>
  );
};

export default WorkExperience;
