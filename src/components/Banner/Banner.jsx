import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Fade, Slide } from 'react-awesome-reveal';
const Banner = () => {
    const bannerTitle = <>
        <Slide>
            <p className='text-4xl lg:text-7xl font-extrabold font-rancho'>Welcome To Craftopia</p>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
            <p className='font-poppins font-semibold text-2xl lg:text-2xl text-white'>Explore The World Of Art & Crafts</p>
        </Fade>
    </>

    return (
        <div className='z-[0]'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
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