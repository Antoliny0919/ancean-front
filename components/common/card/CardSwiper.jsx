import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardMain from './CardMain';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperButton from './SwiperButton';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StyledCardSwiperArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function CardSwiper({ data }) {
  return (
    <StyledCardSwiperArea>
      <Swiper modules={[Navigation, Pagination]} slidesPerView={1}>
        <SwiperButton icon={<FaArrowLeftLong />} title="PREVIOUS" />
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <CardMain postData={item}></CardMain>
          </SwiperSlide>
        ))}
        <SwiperButton icon={<FaArrowRightLong />} title="NEXT" />
      </Swiper>
    </StyledCardSwiperArea>
  );
}
