import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Category from './SwiperPost';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const StyledCategorySwiperArea = styled.div`
  width: 100%;
`;

export default function SwiperPostMain() {
  const data = [
    {
      color: '#D8423F',
    },
    {
      color: '#D8793F',
    },
    {
      color: '#D8AA3F',
    },
    {
      color: '#C69C3B',
    },
    {
      color: '#C6C43B',
    },
    {
      color: '#7AC63B',
    },
    {
      color: '#3BC654',
    },
    {
      color: '#3BC69C',
    },
    {
      color: '#3B8FC6',
    },
    {
      color: '#3B3BC6',
    },
    {
      color: '#933BC6',
    },
    {
      color: '#C63BB7',
    },
  ];

  return (
    <StyledCategorySwiperArea>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        slidesPerView={5}
        loop={true}
        effect={'coverflow'}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 5,
          depth: 100,
          stretch: 70,
          slideShadows: false,
        }}
      >
        {data.map(({ color }, index) => {
          return (
            <SwiperSlide key={index}>
              <Category color={color}></Category>
            </SwiperSlide>
          );
        })}
        {/* {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Category></Category>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </StyledCategorySwiperArea>
  );
}
