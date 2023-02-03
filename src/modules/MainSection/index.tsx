import AboutMe from "../AboutMe";
import WorkExperience from "../WorkExperience";
const MainSection = () => {
  return (
    <div className="h-[1000px] pt-16 w-[70%] phone:w-full mx-auto ">
      <AboutMe />
      <div className=" bg-greyDark h-[1px] w-full my-4"> </div>
      <WorkExperience />
    </div>
  );
};

export default MainSection;
