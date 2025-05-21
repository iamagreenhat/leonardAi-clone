'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Image from 'next/image';

const tabs = [
    { title: 'Inspiration', url: 'https://leonardo.ai/wp-content/uploads/2024/05/Inspiration-1536x960.jpg' },
    { title: 'Character Design', url: 'https://leonardo.ai/wp-content/uploads/2024/05/Character-Design-1536x960.jpg' },
    { title: 'Game Assets', url: 'https://leonardo.ai/wp-content/uploads/2024/05/Game-Assets-1536x960.jpg' },
    { title: 'Architecture', url: 'https://leonardo.ai/wp-content/uploads/2024/05/Graphic-Design-1536x960.jpg' },
    { title: 'Interior Design', url: 'https://leonardo.ai/wp-content/uploads/2024/05/Fashion-1536x960.jpg' },
];

export default function AutoTabs() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full mt-10 h-[100vh]  ">
            {/* Tab Pills */}
            <div className="  flex gap-4 justify-center   ">
                {tabs.map((tab, index) => (
                    <span
                        key={index}
                        className={`cursor-pointer text-3xl font-semibold transition-colors duration-300 ${index === activeIndex ? 'text-purple-500' : 'text-gray-400'
                            }`}
                    >
                        {tab.title}
                    </span>
                ))}
            </div>

            {/* Swiper Content */}
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex); // Update current tab
                }}
            >
                {tabs.map((tab, index) => (
                    <SwiperSlide key={index}>
                        <div className='relative '>
                            <div className="absolute -inset-1 bg-gradient-to-b from-purple-500 to-green-400 blur-9xl backdrop-blur"></div>
                            <div className="text-center p-6 mx-auto flex justify-center flex-col rounded-xl shadow-md w-full relative">

                                <Image src={tab.url} height={500} width={500} alt={tab.title} className='w-[50%] h-[80vh] mx-auto' />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
