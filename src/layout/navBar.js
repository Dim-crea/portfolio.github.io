import { Link } from "react-router-dom";
import PhotographiePage from "../components/Photographie/PhotographiePage";
import ProjectPage from "../components/ProjectPage/projectPage";
import PresentationPage from "../components/Présentation/PrésentationPage";


export default function NavBarMenu () {
    return(
    <nav className="w-full mt-6 sticky overflow-x-auto">
        <ul className="flex justify-around">
            
            <li>
                <Link to="/portfolio.github.io/" className="focus:font-bold">Project</Link>
                {/* <Link to="/" className="focus:font-bold">Project</Link> */}
            </li>
            <li>
                <Link to="/presentation" className="focus:font-bold">Présentation</Link>
            </li>
            <li>
                <Link to="/photographie" className="focus:font-bold">Photographe</Link>
            </li>
        </ul>
    </nav>
    )
}