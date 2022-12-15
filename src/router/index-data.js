import { lazy } from "react";

const Home = lazy(() => import("./../pages/home/index"))
const About = lazy(() => import("./../pages/about/index"))
const Contact = lazy(() => import("./../pages/contact/index"))

export const RouterData = [
    {
        id : 1,
        path : "/",
        component : <Home/>
    },
    {
        id : 1,
        path : "/about",
        component : <About/>
    },
    {
        id : 1,
        path : "/contact",
        component : <Contact/>
    },
]