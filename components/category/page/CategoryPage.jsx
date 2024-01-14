import styled from 'styled-components';
import { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import CategoryCard from '../CategoryCard';
import { EffectCoverflow } from 'swiper/modules';
import SwiperButton from '../../button/SwiperButton';
import CategoryText from '../CategoryText';
import { flexBox } from '../../../styles/variable';
import { CATEGORY_LOGO } from '../categoryLogo';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const StyledCategoryPage = styled.div`
  padding-top: 15vh;
  background: ${(props) => props.background};
  transition: background 1s;
  .swiper-coverflow-single-category {
    box-sizing: border-box;
    .swiper-wrapper {
      height: 60vh;
      box-sizing: border-box;
    }
  }
  .swiper-controller {
    margin-top: 13vh;
    height: 7vh;
    margin-bottom: 5vh;
    ${flexBox.flex('row', 'space-between')}
    svg {
      height: 3vw;
      width: 3vw;
      color: ${({ theme }) => theme.colors.mainColor[4]};
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
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        onSwiper={(slide) => {
          changeCategory(slide);
        }}
        onSlideChange={(slide) => {
          changeCategory(slide);
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
          <CategoryText
            color={color}
            shadow={textShadow}
            name={categoryName}
            style={{ 'font-size': '50px', 'letter-spacing': '10px' }}
          />
          <SwiperButton type="next"></SwiperButton>
        </div>
      </Swiper>
    </StyledCategoryPage>
  );
}
