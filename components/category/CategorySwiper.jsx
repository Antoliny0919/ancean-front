import { useState, useCallback } from 'react';
import { Swiper } from 'swiper/react';
import styled from 'styled-components';
import SwiperButton from '../button/SwiperButton';
import CategoryText from './CategoryText';
import { CATEGORY_DATA } from './data';

export const StyledSwiperArea = styled.div`
  transition: background 1s;
  .category-swiper {
    background: ${(props) => props.background};
  }
`;

export const StyledSwiperButtonArea = styled.div``;

export default function CategorySwiper({
  children,
  categoryCnt,
  swiperButton = false,
  swiperProps = {},
}) {
  const [categoryName, setCategoryName] = useState('');

  // check if current activeSlide(slideNumber) is the first or last category
  const [slideNumber, setSlideNumber] = useState(0);

  const { transparentColor } = categoryName && CATEGORY_DATA[categoryName];

  // swiper slide change call changeCategory method (onSlideChange)
  const changeCategory = useCallback((slide) => {
    let activeSlideNum = slide.activeIndex;
    let slides = slide.slides;
    // get the category name of the current slide from the changed slide
    let { name } = slides[activeSlideNum].dataset;
    setCategoryName(name);
  }, []);

  return (
    <StyledSwiperArea background={transparentColor}>
      <Swiper
        {...swiperProps}
        className="category-swiper"
        onSwiper={(slide) => {
          // called when swiper was frist created
          if (categoryCnt !== 0) {
            changeCategory(slide);
          }
        }}
        onSlideChange={(slide) => {
          // identify the current slide category name each time the slide change and apply the style to that category
          if (categoryCnt !== 0) {
            changeCategory(slide);
            swiperButton && setSlideNumber(slide.activeIndex);
          }
        }}
      >
        {children}
        <StyledSwiperButtonArea>
          <SwiperButton
            color={({ theme }) => theme.colors.mainColor[4]}
            direction="previous"
            currentSlide={slideNumber}
            lastSlideNum={categoryCnt}
          ></SwiperButton>
          {categoryName && <CategoryText name={categoryName} />}
          <SwiperButton
            color={({ theme }) => theme.colors.mainColor[4]}
            direction="next"
            currentSlide={slideNumber}
            lastSlideNum={categoryCnt - 1}
          ></SwiperButton>
        </StyledSwiperButtonArea>
      </Swiper>
    </StyledSwiperArea>
  );
}
