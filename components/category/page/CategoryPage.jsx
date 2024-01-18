import styled from 'styled-components';
import { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import SwiperButton from '../../button/SwiperButton';
import CategoryText from '../CategoryText';
import CategoryCardSwiper from '../swiper/CategoryCardSwiper';
import { flexBox } from '../../../styles/variable';
import { CATEGORY_DATA } from '../data';

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
  }
`;

export default function CategoryPage({ categories, categoryPosts }) {
  const [categoryName, setCategoryName] = useState('');

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
        {categories.map(({ name }, index) => {
          return (
            <SwiperSlide key={index} data-name={name}>
              <CategoryCardSwiper
                posts={categoryPosts[name]}
              ></CategoryCardSwiper>
            </SwiperSlide>
          );
        })}
        <div className="swiper-controller">
          <SwiperButton type="prev"></SwiperButton>
          <CategoryText
            name={categoryName}
            style={{
              'font-size': '50px',
              'letter-spacing': '10px',
              'margin-bottom': '10px',
            }}
          />
          <SwiperButton type="next"></SwiperButton>
        </div>
      </Swiper>
    </StyledCategoryPage>
  );
}
