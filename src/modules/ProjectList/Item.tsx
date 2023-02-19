import React from "react";
export interface itemProps {
  nameProject: string;
  toolProject: string;
  desProject: string;
  imgLogo: string;
  listDes: string[];
  number: number;
}
const Item: React.FC<itemProps> = (props) => {
  const { nameProject, toolProject, desProject, imgLogo, listDes, number } =
    props;
  return (
    <div
      className={
        "flex min-w-[360px] max-w-[1024px] relative mt-8  justify-center rounded-md" +
        (number % 2 === 0 ? " flex-row-reverse " : null)
      }
    >
      <div
        className={
          "dark:bg-greyDark bg-gray-200  pt-4  w-1/2 rounded-md flex flex-col justify-center " +
          (number % 2 === 0 ? " pl-4 " : " pr-4")
        }
      >
        <img
          src={imgLogo}
          className={number % 2 === 0 ? " rounded-tl-md " : " rounded-tr-md "}
        />
      </div>
      <div
        className={
          " flex-1 py-1 flex justify-center flex-col " +
          (number % 2 === 0 ? " translate-x-[10%] " : " -translate-x-[10%]")
        }
      >
        <h1
          className={
            "font-bold text-2xl  text-primary " +
            (number % 2 === 0 ? " text-left " : "  text-right ")
          }
        >
          {nameProject}
        </h1>

        <span
          className={
            "text-base pb-1  text-black dark:text-white " +
            (number % 2 === 0 ? " text-left " : "  text-right ")
          }
        >
          {toolProject}
        </span>
        <div
          className={
            "dark:bg-bgDark opacity-[0.9] dark:bg-gradient-to-r  bg-white  " +
            (number % 2 === 0
              ? " dark:from-bgDark dark:via-gray-800 from-blue-50 via-slate-300  "
              : "  dark:from-gray-800 dark:via-bgDark ")
          }
        >
          <p
            className={
              "text-s  py-2 px-4  text-justify tablet:text-ss break-all break-inside-avoid  break-after-all    " +
              (number % 2 === 0 ? " pl-0 " : " pr-0 ")
            }
          >
            {desProject}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
