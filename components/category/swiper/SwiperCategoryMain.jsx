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
import { REPRESENTATIVE_CATEGORY } from '../category';

const StyledCardSwiperArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
`;

export default function SwiperCategoryMain() {
  return (
    <StyledCardSwiperArea>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        slidesPerView={3}
        loop={true}
        effect={'coverflow'}
        className="swiper-category"
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 70,
          depth: 200,
          modifier: 0.5,
          slideShadows: false,
        }}
        autoplay={{ delay: 5000 }}
      >
        {REPRESENTATIVE_CATEGORY.map(({ logo, title, color }, index) => (
          <SwiperSlide key={index}>
            <SwiperCategory
              logo={logo}
              title={title}
              slideNum={index}
              color={color}
            ></SwiperCategory>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledCardSwiperArea>
  );
}
