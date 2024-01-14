import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import CategoryCard from './swiper/CategoryCard';
import { Pagination, Navigation } from 'swiper/modules';
import CoverflowSwiper from '../swiper/CoverflowSwiper';

const StyledCategoryPage = styled.div`
  width: 100%;
  height: 100%;
`;

export default function CategoryPage({ categories }) {
  const swiperProps = {
    slidesPerView: 1,
    extraModules: [Pagination, Navigation],
    coverflowEffect: {
      rotate: 50,
      stretch: 100,
      depth: 200,
      modifier: 0.5,
      slideShadows: false,
    },
    extraProps: {
      className: 'swiper-category-coverflow',
      loop: true,
    },
  };

  return (
    <StyledCategoryPage>
      <CoverflowSwiper swiperProps={swiperProps}>
        {categories.map(({ name, color }, index) => (
          <SwiperSlide key={index}>
            <CategoryCard name={name} color={color}></CategoryCard>
          </SwiperSlide>
        ))}
      </CoverflowSwiper>
    </StyledCategoryPage>
  );
}
