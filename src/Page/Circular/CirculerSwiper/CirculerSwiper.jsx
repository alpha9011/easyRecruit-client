
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CBannerImageA from './CBannerImageA';
import CBannerImageB from './CBannerImageB';
import CBannerImageC from './CBannerImageC';
import CBannerImageD from './CBannerImageD';


const CircularSwiper = () => {

  return (
    <div>
      <div>
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay:6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-[600px]"
          >
            <SwiperSlide><CBannerImageA></CBannerImageA></SwiperSlide>
            <SwiperSlide><CBannerImageB></CBannerImageB></SwiperSlide>
            <SwiperSlide><CBannerImageC></CBannerImageC></SwiperSlide>
            <SwiperSlide><CBannerImageD></CBannerImageD></SwiperSlide>

          </Swiper>
        </>
      </div>
    </div>
  );
};

export default CircularSwiper;