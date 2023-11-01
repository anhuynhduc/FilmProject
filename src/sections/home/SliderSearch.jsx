import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './sliderSearch.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import {sliderBanner1, sliderBanner2, sliderBanner3, sliderBanner4, sliderBanner5} from "../../assets/images/slider-banners/index.js";

function SliderSearch() {
    return (
        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier:1,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={sliderBanner1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderBanner5} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>
            </Swiper>
        </div>
    );
}

export default SliderSearch;