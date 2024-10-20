
import { Swiper, SwiperSlide, } from 'swiper/react'
import { EffectFlip } from 'swiper/modules'; 

import 'swiper/css'
import 'swiper/css/effect-flip'

import cv from '../../assets/CV Hauterville Développeur Full-Stack.pdf'
import creativity from '../../assets/picture/Créativité.svg'
import challenger from '../../assets/picture/challenger.svg' 
import autonomie from '../../assets/picture/Autonomie.svg'
import teamSpirit from '../../assets/picture/Team spirit.svg'

export default function PresentationPage(){
    return (
        <>
        <div>
            <div className="mt-6 mx-3 sm:mx-28">
                <h2 class=" font-bold my-4 text-xl mx-10">Un peu plus sur moi. </h2>
                <p className="mx-8">
                Je suis Dimitry, un esprit créatif de 26 ans, à la fois développeur et photographe. En tant qu'autodidacte, j'ai commencé a apprendre la programmation il y a 2 ans. Aujourd'hui je suis dipômé et j'ai quelque travaux personnels à mon actif. 
                </p>
                <br></br>
                <h2 class=" font-bold my-4 text-xl mx-10">SOFT SKILLS</h2>
                <div className="mx-3 flex justify-evenly">
                    <div>
                        <img src={creativity} className="h-20"></img>
                        <p>Créativité</p>
                    </div>
                    <div>
                        <img src={challenger} className="h-20 mt-2"></img>
                        <p>Challenger</p>
                    </div>
                </div>
                <div className="mx-3 flex justify-evenly">
                    <div>
                        <img src={teamSpirit} className="h-20 mt-2"></img>
                        <p>Esprit d'équipe</p>
                    </div>
                    <div>
                        <img src={autonomie} className="h-20 mt-2"></img>
                        <p>Autonome</p>
                    </div>
                    
                </div>
            </div>

            {/* <div className= "mt-6 mx-3 mb-16 sm:mx-28">
                <Swiper 
                    modules={[EffectFlip]}  effect='flip'
                    
                >
                    <SwiperSlide>
                        <div className='py-3 rounded-2xl bg-gradient-to-b from-zinc-300 from-10% flex flex-col items-center '>
                            <p className='font-bold'>Vendeur en prêt-à-porter</p>
                            <p className=''>Lacoste</p>
                            <p className=''>De 2020 à 2021</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-3 rounded-2xl bg-gradient-to-b from-zinc-300 from-10% flex flex-col items-center '>
                            <p className='font-bold'>Conseiller commercial</p>
                            <p className=''>Cass-Auto</p>
                            <p className=''>De Janvier 2022 à Octobre 2021</p>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-3 rounded-2xl bg-gradient-to-b from-zinc-300 from-10% flex flex-col items-center '>
                            <p className='font-bold'>Vendeur en prêt-à-porter</p>
                            <p className=''>Armor Lux</p>
                            <p className=''>De décembre 2022 à Février 2023</p>
                        </div>
                        </SwiperSlide>
                    
                </Swiper>
            </div> */}
            <div className='flex flex-col items-center mt-4 mb-20'>
            <a href={cv}
                download={cv} className='py-2 px-4 border rounded-2xl active:font-bold'>
                    Téléchargez mon CV 
                </a>
            </div>
        </div>
            
        </>
    )
}