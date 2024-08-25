
import { Swiper, SwiperSlide, } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'; 

import 'swiper/css'
import 'swiper/css/effect-coverflow'

import  Picture1  from '../../assets/photos/IMG-20240823-WA0002.jpg'
import Picture2 from '../../assets/photos/IMG-20240823-WA0003.jpg'
import Picture3 from '../../assets/photos/IMG-20240823-WA0004.jpg'
import Picture4 from '../../assets/photos/IMG-20240823-WA0005.jpg'
import Picture5 from '../../assets/photos/IMG-20240823-WA0006.jpg'

export default function PhotographiePage () {
    return (
        <>
            <div className="mt-6 mx-3 sm:mx-28">
                <h2 class=" font-bold my-4 mx-10">A travers mes yeux </h2>
                <p>J'ai décidé de partager avec vous quelques clichés! Vous me direz merci après ahah ! </p>
            </div>

            <div className= "mt-6 mx-3 mb-16 sm:mx-28">
                <Swiper 
                    modules={[EffectCoverflow]}  effect='coverflow'
                    depth={100}
                    rotate={65}
                >
                    <SwiperSlide>
                        <div className='flex flex-col items-center '>
                            <img src={Picture1} className='h-72 rounded-lg sm:h-96'></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col items-center '>
                            <img src={Picture4} className='h-72 rounded-lg sm:h-96'></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='flex flex-col items-center '>
                            <img src={Picture2} className='h-72 rounded-lg sm:h-96'></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='flex flex-col items-center '>
                            <img src={Picture5} className='h-72 rounded-lg sm:h-96'></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='flex flex-col items-center '>
                            <img src={Picture3} className='h-72 rounded-lg sm:h-96'></img>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </>
    )
}