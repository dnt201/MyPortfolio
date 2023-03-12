import React from "react";
import Section from "../../Layouts/Section";

const EducationBackground = () => {
  return (
    <Section
      id="educationBackground"
      title="Education Background "
      className="flex flex-col gap-2 "
    >
      <span className="text-sm ">
        • Final-year student of Software Engineering – Ho Chi Minh University of
        Technology and Education.
      </span>
      <span className="text-sm ">• GPA: 8.83/10. (2 lastest sems).</span>
      <span className="text-sm ">• Encouraging study scholarship 2022.</span>
      <span className="text-sm ">• Expected graduation date: 2023</span>
    </Section>
  );
};

export default EducationBackground;
