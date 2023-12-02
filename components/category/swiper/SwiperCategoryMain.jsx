import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules';
import SwiperCategory from './SwiperCategory';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const StyledCardSwiperArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function CardSwiper() {
  const category = [1, 2, 3, 4, 5, 6];

  return (
    <StyledCardSwiperArea>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        slidesPerView={3}
        loop={true}
        effect={'coverflow'}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 5000 }}
      >
        <SwiperCategory></SwiperCategory>
        {category.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperCategory></SwiperCategory>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledCardSwiperArea>
  );
}
