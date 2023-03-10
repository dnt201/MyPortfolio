import React, { useRef } from "react";
import { Git } from "../../assets/icons";
import ReactTooltip from "react-tooltip";
import { useIntersection } from "../../hooks";

export interface itemProps {
  nameProject: string;
  toolProject: string;
  desProject: string;
  imgLogo: string;
  listDes: string[];
  linkRepo: string;
  number: number;
}
const Item: React.FC<itemProps> = (props) => {
  const { nameProject, toolProject, desProject, imgLogo, linkRepo, number } =
    props;

  const divRef = useRef(null);
  const sectionRef = useIntersection(divRef, "0px");
  return (
    <div
      ref={divRef}
      className={
        "flex min-w-[320px] max-w-[1024px] relative mt-8  rounded-md tablet:flex-col transition-all duration-1000  " +
        (number % 2 === 0 ? " flex-row-reverse " : null)
      }
    >
      <div
        className={
          "dark:bg-greyDark bg-gray-200  pt-4  w-1/2 tablet:w-full rounded-md flex flex-col justify-center z-0  transition-all duration-1000  " +
          (number % 2 === 0 ? " left-0  " : " right-0") +
          (sectionRef
            ? " opacity-100 blur-0 translate-x-0  "
            : " opacity-0 blur-sm ") +
          (!sectionRef && number % 2 === 0
            ? " translate-x-full "
            : !sectionRef && number % 2 === 1 && " -translate-x-full ")
        }
      >
        <img
          alt="logo"
          src={imgLogo}
          className={number % 2 === 0 ? " rounded-tl-md " : " rounded-tr-md "}
        />
      </div>
      <div
        className={
          " flex-1 py-1 flex justify-center flex-col absolute tablet:relative w-[60%] tablet:w-full z-0 transition-all duration-1000 " +
          (number % 2 === 0 ? " left-0  " : " right-0 ") +
          (sectionRef
            ? " opacity-100 blur-0 translate-x-0   "
            : " opacity-0 blur-sm ") +
          (!sectionRef && number % 2 === 0
            ? " -translate-x-full "
            : !sectionRef && number % 2 === 1 && " translate-x-full ")
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
            "dark:bg-bgDark opacity-[0.9] dark:bg-gradient-to-r  bg-white rounded-md " +
            (number % 2 === 0
              ? " dark:from-bgDark dark:via-gray-800 from-blue-50 via-slate-300  "
              : "  dark:from-gray-800 dark:via-bgDark ")
          }
        >
          <p
            className={
              "text-s  py-2 px-4  text-justify tablet:text-ss    " +
              (number % 2 === 0 ? " pl-0 " : " pr-0 ")
            }
          >
            {desProject}
          </p>
        </div>
        <a
          target="_blank "
          href={linkRepo}
          className={
            " my-anchor-element mt-1 " +
            (number % 2 === 0 ? " self-start " : "  self-end ")
          }
          data-tip="Go to git source!"
          data-for={`gitOpen${number}`}
        >
          <div>
            <Git className="dark:fill-white" />

            <ReactTooltip
              id={`gitOpen${number}`}
              place={"left"}
              effect="solid"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Item;
