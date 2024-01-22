import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import FlipCategoryCard from '../category/FlipCategoryCard';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import SectionHeader from './items/SectionHeader';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const StyledTopCategoriesArea = styled.div`
  margin-top: 3rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color: ${({ theme }) => theme.colors.mainColor[1]};
  display: flex;
  flex-direction: column;
`;

export default function TopCategories({ categories }) {
  return (
    <StyledTopCategoriesArea>
      <SectionHeader
        mainTitle={'Top Categories'}
        subTitle={'최근 가장 많은 게시글이 있는 카테고리 입니다.'}
        colorHSL={{ hue: 181, saturation: 81, lightness: 40 }}
      />
      <div className="fade-in-slide-down-suspend">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          slidesPerView={3}
          effect={'coverflow'}
          className="swiper-category"
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
          {categories.map(({ name, color }, index) => (
            <SwiperSlide key={index}>
              <FlipCategoryCard name={name} color={color}></FlipCategoryCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyledTopCategoriesArea>
  );
}
