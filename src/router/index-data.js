import { lazy } from "react";

const Home = lazy(() => import("./../pages/home/index"));
const About = lazy(() => import("./../pages/about/index"));
const Contact = lazy(() => import("./../pages/contact/index"));
const Vacancy = lazy(() => import("./../pages/vacancy/index"));
const Projects = lazy(() => import("./../pages/projects/index"));
export const RouterData = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/about",
    component: <About />,
  },
  {
    id: 3,
    path: "/contact",
    component: <Contact />,
  },
  {
    id: 4,
    path: "/vacancy",
    component: <Vacancy />,
  },
  {
    id: 5,
    path: "/projects",
    component: <Projects />,
  },
];
