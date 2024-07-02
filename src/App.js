import { RouterProvider, createBrowserRouter} from "react-router-dom"

import HeaderPortfolio from "./layout/headerPortfolio";
import FooterPortfolio from "./layout/footerPortfolio";
import ProjectPage from "./components/ProjectPage/projectPage";
import PresentationPage from "./components/Présentation/PrésentationPage";
import PhotographiePage from "./components/Photographie/PhotographiePage";



const router = createBrowserRouter([
  {
    path :"/",
    element : <div>yo</div>,
  },
  {
    path: "presentation",
    element : <div>yo</div>
  },
  {
    path : "photographie",
    element : <div>yo</div>
  }
])

export default function App() {
  return (
    <>
        <HeaderPortfolio />
        {/* <RouterProvider router={router}/> */}
        <ProjectPage />
        <FooterPortfolio />
    </> 
    
  );
}


