import { Link } from "react-router-dom";
import PhotographiePage from "../components/Photographie/PhotographiePage";
import ProjectPage from "../components/ProjectPage/projectPage";
import PresentationPage from "../components/Présentation/PrésentationPage";


export default function Navigation () {
    return(
    <nav className="w-full mt-6 sticky overflow-x-auto">
        <ul className="flex justify-around">
            {/* <li className="font-medium"><a href={<ProjectPage />}>Projects</a></li> */}
            <li>
                <Link to="/">Project</Link>
            </li>
            <li>
                <Link to="/presentation">Présentation</Link>
            </li>
            <li>
                <Link to="/photographie">Photographe</Link>
            </li>
        </ul>
    </nav>
    )
}