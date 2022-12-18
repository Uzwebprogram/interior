import { lazy } from "react";
import NotFound from "../pages/notFound";
const Home = lazy(() => import("./../pages/home/index"))
const About = lazy(() => import("./../pages/about/index"))
const Contact = lazy(() => import("./../pages/contact/index"))
const Vacancy = lazy(() => import("./../pages/vacancy/index"))
const Portfolio = lazy(() => import("./../pages/portfolio/index"))
const AddInterior = lazy(() => import("./../pages/add_interior/index"))
export const RouterData = [
    {
        id : 1,
        path : "/",
        component : <Home/>
    },
    {
        id : 2,
        path : "/about",
        component : <About/>
    },
    {
        id : 3,
        path : "/contact",
        component : <Contact/>
    },
    {
        id : 4,
        path : "/vacancy",
        component : <Vacancy/>
    },
    {
        id : 4,
        path : "/*",
        component : <NotFound/>
    },
    {
        id : 4,
        path : "/portfolio",
        component : <Portfolio/>
    },
    {
        id : 4,
        path : "/addinterior",
        component : <AddInterior/>
    },
]