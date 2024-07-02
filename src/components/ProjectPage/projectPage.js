import FormImgProject from "../../assets/picture/Form de connexion.svg"


import GitHub from "../../assets/picture/GitHub.svg"

import next from "../../assets/picture/nextjs1.svg"
import flutter from "../../assets/picture/flutter.svg"
import reactImg from "../../assets/picture/react.svg"
import tailwind from "../../assets/picture/tailwind-css.svg"

import nodeImg from "../../assets/picture/node-js.svg"
import mySqlImg from "../../assets/picture/mysql.svg"
import expressImg from "../../assets/picture/express.svg"
import docker from "../../assets/picture/docker.svg"

export default function ProjectPage(){
    return (
        <div className="overflow-y-auto">
            <div className="mt-3 flex sm:mx-28">
                <img src={FormImgProject} className="h-80 rounded-3xl ml-3 sm:h-96"></img>
                <div className="mx-3 sm:mx-6">
                    <h2 class="TitleProject my-4">List Your Success</h2>
                    <p>
                    List Your Sucess est une application développée avec flutter côté front-end et nodeJs Express côté back-end. C'est l'un de mes premiers projets les plus concret. List Your Sucess a été créé par une personne ambitieuse pour toute les personnes ambitieuses souhaitant organiser et planifier leurs objectifs.
                    Projet partagé sur GitHub 
                    </p>
                    <div>
                        <a href="https://github.com/Dim-crea/ListYourSucces"><img src={GitHub} className="h-10 mt-2"></img></a>
                    </div>
                </div>
            </div>
            <section className="mt-2">
                <h2 className="ml-3 text-xl ">SKILL</h2>
                <div>
                    <h3 className="ml-8 mt-4 mb-2 text-lg">Front-end</h3>
                    <div className="mx-3 flex justify-evenly">
                        <img src={next} className="h-14"></img>
                        <img src={tailwind} className="h-14"></img>
                        <img src={reactImg} className="h-14"></img>
                        <img src={flutter} className="h-14"></img>
                    </div>
                </div>
                <div className=" mt-5">
                    <h3 className="ml-8 mb-2 text-lg">Back-end</h3>
                    <div className="mx-3 flex justify-evenly">
                        <img src={nodeImg} className="h-14"></img>
                        <img src={expressImg} className="h-8 mt-2"></img>
                        <img src={mySqlImg} className="h-14"></img>
                        <img src={docker} className="h-14"></img>
                    </div>
                </div>
            </section>
        </div>
    );
}