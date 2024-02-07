import { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import FlipCategoryCard from '../category/FlipCategoryCard';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import SectionHeader from './items/SectionHeader';
import { CATEGORY_DATA } from '../category/data';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const StyledTopCategoriesArea = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }
  padding-top: 3rem;
  padding-bottom: 3rem;
  .swiper-category {
    @media screen and (min-width: 768px) {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    padding-top: 0;
    padding-bottom: 0;
  }
  background: ${(props) => props.$backgroundColor};
  display: flex;
  flex-direction: column;
  transition: background 1s;
`;

export default function TopCategories({ categories }) {
  const [categoryName, setCategoryName] = useState('');

  const { transparentColor } = categoryName && CATEGORY_DATA[categoryName];

  const swiperRef = useRef(null);

  const changeCategory = useCallback(
    (slide) => {
      let activeSlideNum = slide.activeIndex;
      let slides = slide.slides;
      let { name } = slides[activeSlideNum].dataset;
      setCategoryName(name);
    },
    [categories],
  );

  return (
    <StyledTopCategoriesArea $backgroundColor={transparentColor}>
      <SectionHeader
        mainTitle={'Top Categories'}
        subTitle={'최근 가장 많은 게시글이 있는 카테고리 입니다.'}
        colorHSL={{ hue: 181, saturation: 81, lightness: 40 }}
      />
      <div className="fade-in-slide-down-suspend">
        <Swiper
          ref={swiperRef}
          modules={[EffectCoverflow, Autoplay]}
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
          breakpoints={{
            280: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSwiper={(slide) => {
            if (categories.length !== 0) {
              changeCategory(slide);
            }
          }}
          onSlideChange={(slide) => {
            if (categories.length !== 0) {
              changeCategory(slide);
            }
          }}
          autoplay={{ delay: 30000 }}
        >
          {categories.map(({ name, color, post_count }, index) => (
            <SwiperSlide key={index} data-name={name}>
              {({ isActive }) => (
                <FlipCategoryCard
                  name={name}
                  color={color}
                  postCount={post_count}
                  props={{ isActive: isActive }}
                ></FlipCategoryCard>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyledTopCategoriesArea>
  );
}
