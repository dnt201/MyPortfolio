import React from "react";

interface iSection extends React.HTMLProps<HTMLDivElement> {
  title: string;
}
const Section: React.FC<iSection> = (props) => {
  const { title, className, children, id } = props;
  return (
    <div
      id={id}
      className={
        "flex flex-col pt-2 pb-8 gap-4 phone:justify-start phone:items-start mt-8 "
      }
    >
      <h1 className="text-3xl font-bold">{title || "Place to title"}</h1>
      <div className={" " + className}>{children}</div>
    </div>
  );
};

export default Section;
