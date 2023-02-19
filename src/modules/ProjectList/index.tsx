import React from "react";
import ImageItem from "../../assets/images/logo-usum-software.png";
import TeachingMe from "../../assets/images/TeachingMe.png";
import Shop from "../../assets/images/Shop.png";
import Item, { itemProps } from "./Item";
const list: itemProps[] = [
  {
    nameProject: `Teaching Me`,
    toolProject: `Knowledge sharing forum`,
    desProject: `Use ReactJS & Typescript to build project. Use React Router V6, TailwindCss, RestFul Api, ReduxToolkit,... `,
    listDes: [``, ``, ``],
    imgLogo: TeachingMe,
    number: 1,
  },
  {
    nameProject: `ND Shop`,
    toolProject: `E-commerce web site`,
    desProject: `A web app for visualizing personalized Spotify data. View your
    top artists, top tracks, recently played tracks, and detailed audio
    information about each track. Create and save new playlists of
    recommended tracks based on your existing playlists and more.s`,
    listDes: [``, ``, ``],
    imgLogo: Shop,
    number: 2,
  },
];
const ProjectList = () => {
  return (
    <div>
      {list &&
        list.map((item) => (
          <Item
            desProject={item.desProject}
            imgLogo={item.imgLogo}
            number={item.number}
            nameProject={item.nameProject}
            toolProject={item.toolProject}
            listDes={item.listDes}
            key={item.nameProject}
          />
        ))}
    </div>
  );
};

export default ProjectList;
