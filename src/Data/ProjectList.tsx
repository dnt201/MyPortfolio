import { itemProps } from "../modules/ProjectList/Item";

import TeachingMe from "../assets/images/TeachingMe.png";
import Shop from "../assets/images/Shop.png";
export const listProject: itemProps[] = [
  {
    nameProject: `Teaching Me`,
    toolProject: `Knowledge sharing forum`,
    desProject: `This is forum website. You can register/login into system, find user and post by name, create/edit a post, interact with another user by vote, comment in their post. This project using ReactJS & Typescript, React Router V6, TailwindCss, RestFul Api, ReduxToolkit, JWT,... `,
    listDes: [``, ``, ``],
    linkRepo: "https://github.com/dnt201/DoAnCNTT",
    imgLogo: TeachingMe,
    number: 1,
  },
  {
    nameProject: `ND Shop`,
    toolProject: `E-commerce web site`,
    desProject: `A web app is ecommerce-site. Use MERN stack (MongoDB - Express Express - ReactJS - NodeJS). Some feature belike login/register, buy product with cart (filter by range of money, by brand),...`,
    listDes: [``, ``, ``],
    linkRepo: "https://github.com/dnt201/TLCN",
    imgLogo: Shop,
    number: 2,
  },
];
