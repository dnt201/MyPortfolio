import React, { useRef } from "react";
import { useIntersection } from "../../hooks";

interface iSection extends React.HTMLProps<HTMLDivElement> {
  title: string;
}
const Section: React.FC<iSection> = (props) => {
  const { title, className, children, id } = props;
  const divRef = useRef(null);
  const sectionRef = useIntersection(divRef, "0px");
  console.log(sectionRef, title);

  return (
    <div
      id={id}
      ref={divRef}
      className={
        " flex flex-col pt-2 pb-8 gap-4 phone:justify-start phone:items-start mt-8  transition-all duration-[2000ms]  " +
        (sectionRef ? " visible opacity-100 " : "  invisible opacity-0 ")
      }
    >
      <h1 className="text-3xl font-bold">{title || "Place to title"}</h1>
      <div className={" " + className}>{children}</div>
    </div>
  );
};

export default Section;
