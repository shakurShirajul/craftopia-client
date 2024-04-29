import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Banner = () => {
    const bannerTitle = <>
        <p className='text-4xl lg:text-7xl font-extrabold font-rancho'>
            {''}
            <Typewriter
                words={['Welcome To Craftopia ','Explore The World Of Art & Crafts']}
                loop={50}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
            />
        </p>
        <p className='font-poppins font-semibold text-2xl lg:text-2xl text-white'>
            {/* Explore a world where imagination meets craftsmanship, and every creation tells a story. */}
        </p>
    </>

    return (
        <div className='relative'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                // modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <div className='relative w-full'>
                        <div>
                            <img src="https://i.ibb.co/wN2KkyM/slider2.jpg" className="aspect-video lg:h-[75vh] w-full z-0" alt="" />
                        </div>
                        <div className='absolute top-1/3 left-20 text-white lg:space-y-2'>
                            {
                                bannerTitle
                            }
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full'>
                        <img src="https://i.ibb.co/GcfSTqf/slider.jpg" className="aspect-video lg:h-[75vh] w-full " alt="" />
                        <div className='absolute top-1/3 left-20 text-white space-y-3'>
                            {
                                bannerTitle
                            }
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full'>
                        <img src="https://i.ibb.co/xCmwYQC/slider1.jpg" className="aspect-video lg:h-[75vh] w-full " alt="" />
                        <div className='absolute top-1/3 left-20 text-white space-y-3'>
                            {
                                bannerTitle
                            }
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;