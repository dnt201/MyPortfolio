import React, { ReactHTML, ReactPropTypes } from "react";

interface iSection extends React.HTMLProps<HTMLDivElement> {
  title: string;
}
const Section: React.FC<iSection> = (props) => {
  const { title, className, children } = props;
  return (
    <div
      className={
        "flex   flex-col pt-2 pb-8 gap-4 phone:justify-start phone:items-start mx-[5%] " +
        className
      }
    >
      <h1 className="text-3xl font-bold">{title || "Place to title"}</h1>
      <div className="flex flex-wrap">{children}</div>
    </div>
  );
};

export default Section;