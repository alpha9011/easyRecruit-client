import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import amazon from "../../../../public/Image/Amazon.png";
import apple from "../../../../public/Image/apple.png";
import google from "../../../../public/Image/google.png";
import meta from "../../../../public/Image/Meta.png";
import microsoft from "../../../../public/Image/Microsoft.png";
import tesla from "../../../../public/Image/Tesla.png";
import walmart from "../../../../public/Image/Walmart.png";
import yahoo from "../../../../public/Image/yahoo.png";
import { Link } from "react-router-dom";

const CustomersSlider = () => {

  return (
    <div className="group hidden lg:block" >
      <div className="relative flex flex-col md:flex-row items-center justify-center h-20 w-full my-20 ">
        <Swiper
      

          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
             
            },
            768: {
              slidesPerView: 4,
            
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}

          className="group-hover:blur hidden lg:block"
          
        >
          <SwiperSlide className="flex items-center justify-center h-20  p-3">
            <img className="max-h-full " src={amazon} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-20">
            <img className="max-h-full" src={apple} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-20">
            <img className="max-h-full" src={google} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-20">
            <img className="max-h-full" src={meta} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-20">
            <img className="max-h-full" src={tesla} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-20">
            <img className="max-h-full" src={microsoft} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-20">
            <img className="max-h-full" src={walmart} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-20 p-2">
            <img className="max-h-full" src={yahoo} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="lg:hidden group-hover:block absolute text-xl  md:text-3xl font-bold">
          <Link  className="pointer text-sky-500 hover:opacity-75"> All our Customers</Link>
        </div>
      </div>
    </div>
  );
};

export default CustomersSlider;
