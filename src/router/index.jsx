import { Suspense } from "react"
import {Routes , Route} from "react-router-dom"
import {RouterData} from "./index-data"
import Header from "../components/Header/index"
import Footer from "../components/Footer"
import Loader from "../components/loader"
function RouterComponent() {
  return (
    <>
    <Header/>
    <Routes>
    {RouterData.map(elem => 
        <Route key={elem.id} path={elem.path} element={
            <Suspense fallback={<Loader/>}>
                {elem.component}
            </Suspense>            
        }/>
        )}
    </Routes>
    <Footer/>
    </>
  )
}

export default RouterComponent