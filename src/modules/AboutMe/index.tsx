import React from "react";
import { HCMUTE, Me } from "../../assets/icons";

interface iProps extends React.HTMLProps<HTMLDivElement> {}

const AboutMe: React.FC<iProps> = (props) => {
  return (
    <div
      className="flex items-center py-8 gap-4 tablet:flex-col tablet:justify-start tablet:items-center"
      id=""
    >
      <div id="aboutMeId" className="absolute -top-64"></div>
      <Me />
      <div className="flex flex-col px-4 ">
        <p>Hello I'm </p>
        <div className="typewriter w-fit">
          <h1 className="font-medium text-xl text-primary w-fit ">
            Duy Nha Tran
          </h1>
        </div>
        <div className="border-r-2 w-fit border-primary font-semibold text-3xl py-2">
          I'm a Software Engineer
        </div>
        <p className="flex">
          Currently, I'm a final year student at
          <a
            href="https://hcmute.edu.vn/"
            target="_blank"
            className="text-[#2E3192FF] flex pl-1  hover:text-[#222564] dark:text-[#ED1B24FF]  dark:hover:text-[#ff1d29b9]"
          >
            <HCMUTE /> HCMUTE
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
