import React from "react";
import { listProject } from "../../Data/ProjectList";

import Item from "./Item";

const ProjectList = () => {
  return (
    <div className="pb-10">
      {listProject &&
        listProject.map((item) => (
          <Item
            desProject={item.desProject}
            imgLogo={item.imgLogo}
            number={item.number}
            nameProject={item.nameProject}
            toolProject={item.toolProject}
            linkRepo={item.linkRepo}
            listDes={item.listDes}
            key={item.nameProject}
          />
        ))}
    </div>
  );
};

export default ProjectList;
