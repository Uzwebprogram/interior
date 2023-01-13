import { lazy } from "react";
import NotFound from "../pages/notFound";
const Home = lazy(() => import("./../pages/home/index"));
const About = lazy(() => import("./../pages/about/index"));
const Contact = lazy(() => import("./../pages/contact/index"));
const Vacancy = lazy(() => import("./../pages/vacancy/index"));
const Portfolio = lazy(() => import("./../pages/portfolio/index"));
const AddInterior = lazy(() => import("./../pages/add_interior/index"));
const Projects = lazy(() => import("./../pages/projects/index"));
const Servies = lazy(() => import("./../pages/servies/index"));
const AboutUs = lazy(() => import("./../pages/aboutus/index"));
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
    path: "/*",
    component: <NotFound />,
  },
  {
    id: 6,
    path: "/portfolio",
    component: <Portfolio />,
  },
  {
    id: 7,
    path: "/addinterior",
    component: <AddInterior />,
  },
  {
    id: 8,
    path: "/projects",
    component: <Projects />,
  },
  {
    id: 9,
    path: "/servies/:productId",
    component: <Servies />,
  },
  {
    id: 10,
    path: "/komerchskiy",
    component: <AboutUs />,
  },
  {
    id: 11,
    path: "/jily",
    component: <AboutUs />,
  },
];
