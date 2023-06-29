// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'

// // import swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// import { SliderProducts } from '../../data/products'
// import { Navigation, Pagination } from 'swiper'

// const Slider = () => {
//     return (
//         <div className='s-container'>
//             <Swiper 
//             modules={[Pagination,Navigation]}
//             className='mySwiper'
//             navigation={true}
//             loopFillGroupWithBlank={true}
//             slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true}
//             >
//                 <SwiperSlide>
//                     {SliderProducts.map((slide, i) => (
//                         <SwiperSlide>
//                             <div className="left-s">
//                                 <div className="name">
//                                     <span> {slide.name} </span>
//                                     <span> {slide.detail} </span>
//                                 </div>

//                                 <span>{slide.price}$</span>
//                                 <div>Shop now</div>
//                             </div>
//                             <img src={slide.img} alt="product" className="img-p" />
//                         </SwiperSlide>
//                     ))}
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     )
// }

// export default Slider

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

import { SliderProducts } from "../../data/products";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640:{
            slidesPerView: 3
          },
          0: {
            slidesPerView: 1
          }
        }}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop Now</div>
            </div>

            <img src={slide.img} alt="" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

