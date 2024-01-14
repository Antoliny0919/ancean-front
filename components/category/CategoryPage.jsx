import styled, { css } from 'styled-components';
import { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import CategoryCard from './swiper/CategoryCard';
import { EffectCoverflow } from 'swiper/modules';
import SwiperButton from '../button/SwiperButton';
import { flexBox } from '../../styles/variable';
import { CATEGORY_LOGO } from './categoryLogo';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const StyledCategoryPage = styled.div`
  padding-top: 15vh;
  background: ${(props) => props.background};
  transition: background 0.7s;
  .swiper-coverflow-single-category {
    box-sizing: border-box;
  }
  .swiper-controller {
    margin-top: 13vh;
    height: 7vh;
    margin-bottom: 5vh;
    ${flexBox.flex('row', 'space-between')}
    svg {
      height: 3vw;
      width: 3vw;
      color: black;
    }
    .category-name {
      font-family: 'Pretendard-Bold';
      font-size: 3vw;
    }
    .category-name::after {
      content: '${(props) => props.$categoryName}';
      position: relative;
      text-shadow: ${(props) => props.$categoryShadow};
    }
    .category-name::before {
      content: '${(props) => props.$categoryName}';
      position: absolute;
      ${(props) =>
        props.$categoryColor && props.$categoryColor.includes('linear-gradient')
          ? css`
              background: ${(props) => props.$categoryColor};
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `
          : css`
              color: ${(props) => props.$categoryColor};
            `}
      z-index: 10;
    }
    .prev {
      margin-left: 2rem;
    }
    .next {
      margin-right: 2rem;
    }
  }
`;

export default function CategoryPage({ categories }) {
  const [categoryName, setCategoryName] = useState('');

  const { color, textShadow, transparentColor } =
    categoryName && CATEGORY_LOGO[categoryName];

  return (
    <StyledCategoryPage
      $categoryColor={color}
      $categoryShadow={textShadow}
      $categoryName={categoryName}
      background={transparentColor}
    >
      <Swiper
        modules={[EffectCoverflow]}
        slidesPerView={1}
        effect={'coverflow'}
        className="swiper-coverflow-single-category"
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        onSlideChange={(slide) => {
          let { name } = slide.visibleSlides[0].dataset;
          setCategoryName(name);
        }}
      >
        {categories.map(({ name, color }, index) => {
          return (
            <SwiperSlide key={index} data-name={name}>
              <CategoryCard name={name} color={color}></CategoryCard>
            </SwiperSlide>
          );
        })}
        <div className="swiper-controller">
          <SwiperButton type="prev"></SwiperButton>
          <div className="category-name"></div>
          <SwiperButton type="next"></SwiperButton>
        </div>
      </Swiper>
    </StyledCategoryPage>
  );
}
