import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./testimonial.css"
import { useEffect, useState } from 'react';


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <section>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    loop={true}
                    initialSlide={2}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true,
                    }}
                    // pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <div>
                        {reviews.map(review => (
                            <SwiperSlide key={review.id}>
                                <div className='testimonialBox'>
                                    <img src="https://i.ibb.co/0Gxnyxt/quote.png" alt="quote" className='qoute h-16' />
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus molestiae magnam vero eaque? Necessitatibus doloribus fugit amet eaque ratione repellat illo! Numquam architecto laudantium voluptatibus non quae ratione velit enim blanditiis cum minima, necessitatibus qui mollitia dolorum distinctio officiis?</p>
                                        <div className="detiles">
                                            <div className="imgBox">
                                                <img src={review.avatar} alt="" />
                                            </div>
                                            <h3>{review.name}<br /><span>{review.profession}</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </section>
            <div>
                <h1 className='text-3xl font-bold flex justify-center items-center'>Swipe Right <span className='-mt-4 ml-2'> 👉</span></h1>
            </div>
        </div>
    );
};

export default Testimonial;