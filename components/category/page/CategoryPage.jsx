import styled from 'styled-components';
import { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import SwiperButton from '../../button/SwiperButton';
import CategoryText from '../CategoryText';
import CategoryCardSwiper from '../swiper/CategoryCardSwiper';
import { flexBox } from '../../../styles/variable';
import { StyledCategoryText } from '../CategoryText';
import { CATEGORY_DATA } from '../data';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const StyledCategoryPage = styled.div`
  display: flex;
  height: 100vh;
  overflow: scroll;
  align-items: center;
  background: ${(props) => props.background};
  transition: background 1s;
  .swiper-wrapper {
    padding: 2rem 0;
  }
  .swiper-controller {
    ${flexBox.flex('row', 'space-between')}
  }
`;

const StyledSwiperButtonArea = styled.div`
  @media screen and (min-width: 768px) {
    padding: 1em 2em;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0;
  ${StyledCategoryText} {
    @media screen and (min-width: 768px) {
      font-size: 45px;
      letter-spacing: 7px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 60px;
      letter-spacing: 10px;
    }
    font-size: 28px;
    letter-spacing: 5px;
  }
`;

export default function CategoryPage({ categories, categoryPosts }) {
  const [categoryName, setCategoryName] = useState('');

  const [slideNumber, setSlideNumber] = useState(0);

  const lastSlideNum = categories.length;

  const { transparentColor } = categoryName && CATEGORY_DATA[categoryName];

  const changeCategory = (slide) => {
    let { name } = slide.visibleSlides[0].dataset;
    setCategoryName(name);
  };

  return (
    <StyledCategoryPage background={transparentColor}>
      <Swiper
        modules={[EffectCoverflow]}
        slidesPerView={1}
        effect={'coverflow'}
        className="swiper-coverflow-single-category"
        speed={2000}
        spaceBetween={400}
        coverflowEffect={{
          rotate: 20,
          stretch: 100,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        onSwiper={(slide) => {
          if (categories.length !== 0) {
            changeCategory(slide);
          }
        }}
        onSlideChange={(slide) => {
          if (categories.length !== 0) {
            changeCategory(slide);
            setSlideNumber(slide.activeIndex);
          }
        }}
      >
        {categories.map(({ name }, index) => {
          return (
            <SwiperSlide key={index} data-name={name}>
              <CategoryCardSwiper
                posts={categoryPosts[name]}
              ></CategoryCardSwiper>
            </SwiperSlide>
          );
        })}
        <StyledSwiperButtonArea>
          <SwiperButton
            color={({ theme }) => theme.colors.mainColor[4]}
            direction="previous"
            currentSlide={slideNumber}
            lastSlideNum={lastSlideNum}
          ></SwiperButton>
          {categoryName && <CategoryText name={categoryName} />}
          <SwiperButton
            color={({ theme }) => theme.colors.mainColor[4]}
            direction="next"
            currentSlide={slideNumber}
            lastSlideNum={lastSlideNum - 1}
          ></SwiperButton>
        </StyledSwiperButtonArea>
      </Swiper>
    </StyledCategoryPage>
  );
}
