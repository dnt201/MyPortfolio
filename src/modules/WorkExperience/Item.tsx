import React from "react";
import UsumLogo from "../../assets/images/logo-usum-software.png";
interface iWorkExperience {
  imgLogo: string;
  companyName: string;
  linkCompany: string;
}
const Item: React.FC<iWorkExperience> = (props) => {
  const { imgLogo, companyName, linkCompany } = props;
  return (
    <div className="flex justify-center items-center phone:flex-col phone:items-start ">
      <img
        className="h-16 tablet:h-14 phone:h-12"
        src={imgLogo || UsumLogo}
        alt="UsumLogo"
      />
      <div className="flex-1 pl-4 phone:pl-0 phone:pt-4">
        <div className="">
          <h1 className="text-2xl font-bold">ReactJS Developer</h1>
          <p className="text-xs ">06/2022 - 11/2022</p>
        </div>
        <div className="pl-1 mt-1 text-s mb-3">
          <p>+ Use React Library, TailwindCss, Figma, Restful api - Axios...</p>
          <p>+ Training ReactNative và Native Base Library.</p>
          <p>
            + Join a{" "}
            <a
              className=" text-[#FFC107]  hover:text-[#FFC107]  hover:cursor-pointer hover:underline"
              target="_blank"
              href="https://www.gogobeivn.com/"
            >
              Gogobei
            </a>{" "}
            project.
          </p>
          <p className="text-xs"></p>
        </div>
        <a
          className=" py-1 px-2 dark:bg-bgLight bg-bgDark text-white rounded-md dark:text-greyDark  hover:text-secondary dark:hover:text-secondary text-lg"
          href={linkCompany || "https://www.usumsoftware.com/"}
          target="_blank"
        >
          About {companyName}
        </a>
      </div>
    </div>
  );
};

export default Item;
