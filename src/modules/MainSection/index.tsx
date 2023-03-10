import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import EducationBackground from "../EducationBackGround";
import ProjectList from "../ProjectList";
import WorkExperience from "../WorkExperience";
interface iProps {}
const MainSection: React.FC<iProps> = (props) => {
  return (
    <div className="min-h-screen pt-16 w-[70%] phone:w-full mx-auto phone:px-2 overflow-hidden ">
      <AboutMe />
      <div className=" bg-greyDark h-[1px] w-full my-4"> </div>
      <EducationBackground />
      <WorkExperience />
      <ProjectList />
      <ContactMe />
    </div>
  );
};

export default MainSection;
