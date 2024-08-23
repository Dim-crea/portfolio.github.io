
import { Swiper, SwiperSlide, } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'; 

import 'swiper/css'
import 'swiper/css/effect-coverflow'

export default function PhotographiePage () {
    return (
        <>
            <div className="mt-6 mx-3 sm:mx-28">
                <h2 class=" font-bold my-4 mx-10">A travers mes yeux </h2>
                <p>J'ai décidé de partager avec vous quelques clichés! Vous me direz merci après ahah ! </p>
            </div>

            <div className= "mt-6 mx-3 sm:mx-28">
                <Swiper 
                    modules={[EffectCoverflow]}  effect='coverflow'
                    depth={900}
                    rotate={65}
                    
                >
                    <SwiperSlide>
                        <img src='../assets/photos/IMG-20240823-WA0002.jpg'></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-3 rounded-2xl bg-gradient-to-b from-zinc-300 from-10% flex flex-col items-center '>
                            <p className='font-bold'>Conseiller commercial</p>
                            <p className=''>Cass-Auto</p>
                            <p className=''>De Janvier 2022 à Octobre 2022</p>
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
            </div>
        </>
    )
}