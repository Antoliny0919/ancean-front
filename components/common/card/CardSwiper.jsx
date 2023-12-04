import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardMain from './CardMain';
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules';
import SwiperButton from './SwiperButton';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const StyledCardSwiperArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function CardSwiper({ data }) {
  return (
    <StyledCardSwiperArea>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        slidesPerView={3}
        loop={true}
        effect={'coverflow'}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 5000 }}
      >
        <SwiperButton icon={<FaArrowLeftLong />} title="PREVIOUS" />
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <CardMain postData={item} data-id={index + 1}></CardMain>
          </SwiperSlide>
        ))}
        <SwiperButton icon={<FaArrowRightLong />} title="NEXT" />
      </Swiper>
    </StyledCardSwiperArea>
  );
}