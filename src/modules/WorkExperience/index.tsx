import React, { useEffect, useState } from "react";
import Section from "../../Layouts/Section";
import UsumLogo from "../../assets/images/logo-usum-software.png";
import Skill from "../../assets/images/skill.png";

import Item from "./Item";
import { SkillLarge, SkillMedium, SkillSmall } from "../../assets/icons";
interface iProps extends React.HTMLProps<HTMLDivElement> {}

const WorkExperience: React.FC<iProps> = () => {
  const [innerW, setInnerH] = useState(window.innerWidth);
  useEffect(() => {
    setInnerH(window.innerWidth);
    console.log(innerW);
  }, [window.innerWidth, innerW]);
  return (
    <Section id="workExpId" title="Work Experience " className="mt-16">
      <p className="mb-4">
        I'm final year student so I just have little experience. But I have many
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
        <p className="text-center ">
          Currently, I'm using libraries and tools ex:{" "}
          <span className="text-secondary font-bold ">
            {" "}
            ReactJs - Typescript, Figma,...
          </span>
        </p>
      </div>
      <div className="w-full flex justify-center mt-4">
        <img className="max-w-[1280px] min-w-[340px] w-3/4" src={Skill}></img>
      </div>
    </Section>
  );
};

export default WorkExperience;
