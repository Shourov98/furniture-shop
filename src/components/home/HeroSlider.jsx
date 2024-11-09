import React, { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const HeroSlider = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('/img/Hero_Slider/slider.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setSlides(data.heroSlider))
            .catch((error) => console.log('Error:', error));
    }, []);

    return (
        <div className="w-full">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 5000, // Change slide every 5 seconds (5000 ms)
                    disableOnInteraction: false, // Keeps autoplay active after manual slide change
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {slides.length > 0 && slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
                                <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
                                <p className="text-md md:text-lg mt-2">{slide.subtitle}</p>
                                <a href={slide.link} className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    {slide.buttonText}
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HeroSlider;
