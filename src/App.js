import { Link, RouterProvider, createBrowserRouter } from "react-router-dom"

import HeaderPortfolio from "./layout/headerPortfolio";
import FooterPortfolio from "./layout/footerPortfolio";
import ProjectPage from "./components/ProjectPage/projectPage";
import PresentationPage from "./components/Présentation/PrésentationPage";
import PhotographiePage from "./components/Photographie/PhotographiePage";
import NavBarMenu from "./layout/navBar";



const router = createBrowserRouter([
  {
    // path :"/portfolio.github.io/",
    path :"/",
    element : <>
        <NavBarMenu />
        <ProjectPage />
    </>,
  },
  {
    path: "presentation",
    element : <>
      <NavBarMenu />
      <PresentationPage />
    </>,
  },
  {
    path : "photographie",
    element : <>
      <NavBarMenu />
      <PhotographiePage />
    </>,
  }
])

export default function App() {
  return (
    <>
        <HeaderPortfolio />
        <RouterProvider router={router} />
        <FooterPortfolio />
        
    </> 
  );
}


