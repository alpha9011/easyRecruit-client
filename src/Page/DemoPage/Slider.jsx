// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperD from './DemoSwiper/SwiperD';
import SwiperC from './DemoSwiper/SwiperC';
import SwiperB from './DemoSwiper/SwiperB';
import SwiperA from './DemoSwiper/SwiperA';

const Slider = () => {

  return (
    <div>
      <div>
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-[600px]"
          >
            <SwiperSlide><SwiperA></SwiperA></SwiperSlide>
            <SwiperSlide><SwiperB></SwiperB></SwiperSlide>
            <SwiperSlide><SwiperC></SwiperC></SwiperSlide>
            <SwiperSlide><SwiperD></SwiperD></SwiperSlide>

          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Slider;