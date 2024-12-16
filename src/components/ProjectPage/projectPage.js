import { Swiper, SwiperSlide, } from 'swiper/react'
import { EffectFlip, FreeMode } from 'swiper/modules'; 
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'; 

import 'swiper/css'
import 'swiper/css/effect-flip'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../pagination.css'


import FormImgProject from "../../assets/picture/Form de connexion.svg"
import ProjectPhoto from "../../assets/picture/portfolioPhoto.svg"
import PortfolioChéris from "../../assets/picture/PortfolioChéris.svg"

import GitHub from "../../assets/picture/GitHub.svg"

import next from "../../assets/picture/nextjs1.svg"
import flutter from "../../assets/picture/flutter.svg"
import reactImg from "../../assets/picture/react.svg"
import tailwind from "../../assets/picture/tailwind-css.svg"

import nodeImg from "../../assets/picture/node-js.svg"
import mySqlImg from "../../assets/picture/mysql.svg"
import expressImg from "../../assets/picture/express.svg"
import docker from "../../assets/picture/docker.svg"

import gitlab from "../../assets/picture/logo-gitlab.svg"
import figma from "../../assets/picture/figma-logo.svg"
import jira from "../../assets/picture/jira.svg"


export default function ProjectPage(){
    return (
        <div>
            <section className='md:hidden'>
                <Swiper 
                    
                    modules={[EffectCoverflow, Pagination]}  effect='coverflow'
                    depth={100}
                    rotate={65}
                    pagination
                    autoplay={{
                        delay:1500,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                    <div className=" mt-3 pb-8 flex sm:mx-28">
                        <img src={FormImgProject} className="h-60 rounded-2xl ml-3 mt-10 sm:h-96 "></img>
                        <div className="mx-3 sm:mx-6">
                            <h2 class=" font-bold my-4 mt-7">List Your Success</h2>
                            <p>
                            List Your Sucess est une application développée avec flutter côté front-end et nodeJs Express côté back-end. C'est l'un de mes premiers projets les plus concret. List Your Sucess a été créé par une personne ambitieuse pour toute les personnes ambitieuses souhaitant organiser et planifier leurs objectifs.
                            Projet partagé sur GitHub 
                            </p>
                            <div>
                            <a href="https://github.com/Dim-crea/ListYourSuccess"><img src={GitHub} className="h-10 mt-2"></img></a>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="mt-3 pb-8 flex sm:mx-28">
                        <img src={ProjectPhoto} className="h-60 rounded-2xl ml-3 mt-10 sm:h-96 sm:mt-8"></img>
                        <div className="mx-3 sm:mx-6">
                            <h2 class=" font-bold my-4 mt-7">Dim-photography</h2>
                            <p>
                                Dim-photography est un site ayant pour but de mettre en avant mon travail de photographe et des récolter des contact client par le biais d'un formulaire. J'ai utilisé pour ce site HTML/CSS, le framework tailwindCSS et sans oublier Javascript. Pour ma BDD j'ai utilisé phpMyAdmin.
                            </p>
                            <div>
                            <a href="https://github.com/Dim-crea/PortfolioPhoto"><img src={GitHub} className="h-10 mt-2"></img></a>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>  
                    <SwiperSlide>
                    <div className="mt-3 pb-8 flex sm:mx-28">
                        <img src={PortfolioChéris} className="h-60 rounded-2xl ml-3 mt-10 sm:h-96 sm:mt-8"></img>
                        <div className="mx-3 sm:mx-6">
                            <h2 class=" font-bold my-4 mt-7">Chéris ton Body</h2>
                            <p>
                                Chéristonbody.fr est un site mise en place pour la réservation de place pour des évènements donnés par une coach sportive. Je l'ai déployé à l'aide de vercel et j'ai utilisé nextJs pour ce projet car il est à évoluer. 
                            </p>
                            <div>
                            <a href=""><img src={GitHub} className="h-10 mt-2"></img></a>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>  
                </Swiper>
                </section>

                <section className='hidden md:flex '>
                    <div>
                    <div className="mt-3 pb-8 flex md:flex-col">
                        <img src={FormImgProject} className="h-80 rounded-3xl ml-3 mt-10 sm:h-96 sm:mt-8"></img>
                        <div className="mx-3 sm:mx-6 md:text-center">
                            <h2 class=" font-bold my-4 mt-7">List Your Success</h2>
                            <p>
                            List Your Sucess est une application développée avec flutter côté front-end et nodeJs Express côté back-end. C'est l'un de mes premiers projets les plus concret. List Your Sucess a été créé par une personne ambitieuse pour toute les personnes ambitieuses souhaitant organiser et planifier leurs objectifs.
                            Projet partagé sur GitHub 
                            </p>
                            <div>
                            <a href="https://github.com/Dim-crea/ListYourSuccess"><img src={GitHub} className="h-10 mt-2"></img></a>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div>
                    <div className="mt-3 pb-8 flex md:flex-col">
                        <img src={ProjectPhoto} className="h-80 rounded-3xl ml-3 mt-10 sm:h-96 sm:mt-8"></img>
                        <div className="mx-3 sm:mx-6 md:text-center">
                            <h2 class=" font-bold my-4 mt-7">Dim-photography</h2>
                            <p>
                                Dim-photography est un site ayant pour but de mettre en avant mon travail de photographe et des récolter des contact client par le biais d'un formulaire. J'ai utilisé pour ce site HTML/CSS, le framework tailwindCSS et sans oublier Javascript. Pour ma BDD j'ai utilisé phpMyAdmin.
                            </p>
                            <div>
                            <a href="https://github.com/Dim-crea/PortfolioPhoto"><img src={GitHub} className="h-10 mt-2"></img></a>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>

            <section className="mt-2">
                <h2 className="ml-3 text-xl font-bold ">HARD SKILLS</h2>
                <div>
                    <h3 className="ml-8 mt-4 mb-2 text-lg">Front-end</h3>
                    
                    <div className="mx-3 flex justify-around overflow-x-auto">
                        <img src={next} className="h-14"></img>
                        <img src={tailwind} className="h-14 "></img>
                        <img src={reactImg} className="h-14 "></img>
                        <img src={flutter} className="h-14 "></img>
                        
                    </div>
                </div>
                <div className=" mt-5 ">
                    <h3 className="ml-8 mb-2 text-lg">Back-end</h3>
                    <div className="mx-3 flex justify-evenly">
                        <img src={nodeImg} className="h-14"></img>
                        <img src={expressImg} className="h-8 mt-2"></img>
                        <img src={mySqlImg} className="h-14"></img>
                        <img src={docker} className="h-14"></img>
                    </div>
                </div>
                <div className=" mt-5 mb-16">
                    <h3 className="ml-8 mb-2 text-lg">Collaboratif</h3>
                    <div className="mx-3 flex justify-evenly">
                        <img src={gitlab} className="h-14"></img>
                        <img src={figma} className="h-12 mt-2"></img>
                        <img src={jira} className="h-12 mt-2"></img>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}