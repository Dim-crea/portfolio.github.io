import PhotographiePage from "../components/Photographie/PhotographiePage";
import ProjectPage from "../components/ProjectPage/projectPage";
import PresentationPage from "../components/Présentation/PrésentationPage";



export default function NavBar () {
    return(
    <nav className="w-full mt-6 sticky overflow-x-auto">
        <ul className="flex justify-around">
            <li className="font-medium"><a href={<ProjectPage />}>Projects</a></li>
            <li className="font-medium"><a href={<PresentationPage />}>Présentation</a></li>
            <li className="font-medium"><a href={<PhotographiePage />}>Photographe</a></li>
        </ul>
    </nav>
    )
}