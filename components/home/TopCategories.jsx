import { useState, useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import FlipCategoryCard from '../category/FlipCategoryCard';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import SectionHeader from './items/SectionHeader';
import { CATEGORY_DATA } from '../category/data';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const StyledTopCategoriesArea = styled.div`
  margin-top: 3rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  background: ${(props) => props.$backgroundColor};
  display: flex;
  flex-direction: column;
  transition: background 1s;
`;

export default function TopCategories({ categories }) {
  const [categoryName, setCategoryName] = useState('');

  const { transparentColor } = categoryName && CATEGORY_DATA[categoryName];

  const swiperRef = useRef(null);

  const slidesPerView = useMemo(() => {
    return 3;
  }, []);

  const changeCategory = useCallback((slide) => {
    let activeSlideNum = Math.floor(slidesPerView / 2);
    let { name } = slide.visibleSlides[activeSlideNum].dataset;
    setCategoryName(name);
  }, []);

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
          slidesPerView={slidesPerView}
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
          onSwiper={(slide) => {
            console.log(slide);
            changeCategory(slide);
          }}
          onSlideChange={(slide) => {
            changeCategory(slide);
          }}
          autoplay={{ delay: 30000 }}
        >
          {categories.map(({ name, color }, index) => (
            <SwiperSlide key={index} data-name={name}>
              {({ isActive }) => (
                <FlipCategoryCard
                  name={name}
                  color={color}
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
