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

const TopBrands = () => {
  return (
    <div className=" hidden md:block -mt-16 w-4/5  mx-auto p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] z-10 rounded-2xl">
      <div className="flex flex-col md:flex-row items-center justify-center h-28  w-full p-5 ">
       <div className="shadow-r-[5xl]">
         <h2 className=" md:w-1/5 text-3xl md:text-4xl lg:text-5xl font-bold">
           Top Brands
         </h2>
       </div>
       
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          breakpoints={{
           
            640: {
              slidesPerView: 3, 
            },
            1024: {
              slidesPerView: 5, 
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          className="w-4/5 "
        
        >
          <SwiperSlide className="flex items-center justify-center h-28">
            <img className="max-h-full" src={amazon} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-28">
            <img className="max-h-full" src={apple} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-28">
            <img className="max-h-full" src={google} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-28">
            <img className="max-h-full" src={meta} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-28">
            <img className="max-h-full" src={tesla} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-28">
            <img className="max-h-full" src={microsoft} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-28">
            <img className="max-h-full" src={walmart} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center h-28 p-2">
            <img className="max-h-full" src={yahoo} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TopBrands;
