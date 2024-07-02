import FormImgProject from "../../assets/picture/Form de connexion.svg"

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
        <>
            <div className="mt-3 flex">
                <img src={FormImgProject} className="h-80 rounded-3xl ml-3"></img>
                <div className="mx-3">
                    <h2 class="TitleProject">List Your Succes</h2>
                    <p>

                    </p>
                    <div>
                        <img></img>
                        <img></img>
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
        </>
    );
}