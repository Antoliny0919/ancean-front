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
  width: 100%;
`;

export default function SwiperCategoryMain({ category }) {
  return (
    <StyledCardSwiperArea className="fade-in-slide-down-suspend">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        slidesPerView={3}
        effect={'coverflow'}
        className="swiper-category"
        slideToClickedSlide={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 200,
          modifier: 0.5,
          slideShadows: false,
        }}
        autoplay={{ delay: 30000 }}
      >
        {category.map(({ logo, title, color }, index) => (
          <SwiperSlide key={index}>
            <SwiperCategory
              logo={logo}
              title={title}
              color={color}
            ></SwiperCategory>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledCardSwiperArea>
  );
}
