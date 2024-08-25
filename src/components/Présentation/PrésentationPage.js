
import { Swiper, SwiperSlide, } from 'swiper/react'
import { EffectFlip } from 'swiper/modules'; 

import 'swiper/css'
import 'swiper/css/effect-flip'

import cv from '../../assets/Cv Hauterville Dimitry.pdf'

export default function PresentationPage () {
    return (
        <>
        <div>
            <div className="mt-6 mx-3 sm:mx-28">
                <h2 class=" font-bold my-4 mx-10">Un peu plus sur moi. </h2>
                <p className="mx-8">
                Bonjour ! Je suis Dimitry, un esprit créatif de 26 ans, à la fois développeur et photographe. En tant qu'autodidacte, depuis maintenant 4 ans je m'exerce à développer mon oeil artistique avec la photographie. Une passion qui m'a amener à faire attention aux détails et à être méticuleux dans tous ce que j'entreprend.
                </p>
                <br></br>
                <p className="mx-8">
                    Toujours été attiré par le monde de la tech, je décide de devenir développeur full stack ! Une reconversion professionnelle qui est aujourd'hui l'une de mes meilleure décision.
                    Milieu ou je peux aussi mettre à profit ma créativité et où je ne cesse d'apprendre.
                </p>
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