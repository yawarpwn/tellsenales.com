import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function ProductSwiper({ images }) {
  return(
  <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      pagination
      navigation
      onSwiper={(swiper) => console.log('swiper', swiper)}
    >
      {images.map((url: string, index: number) => {
        return(
          <SwiperSlide key={index}>
            <img src={url} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
