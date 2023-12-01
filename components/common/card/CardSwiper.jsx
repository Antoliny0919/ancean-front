import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardMain from './CardMain';
import { Navigation, Pagination } from 'swiper/modules';
// import CardSlideButton from "./CardSlideButton";
// import { FaArrowLeftLong } from 'react-icons/fa6';
// import { FaArrowRightLong } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StyledSwiperArea = styled.div`
  max-width: 672px;
  overflow: auto;
`;

export default function CardSwiper({ data }) {
  return (
    <StyledSwiperArea>
      {/* <div className='swiper-button-prev'>
        <CardSlideButton
          icon={<FaArrowLeftLong />}
          title='PREVIOUS'
        />
      </div>
      <div className='swiper-button-next'>
      </div> */}
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={5}
        loop={true}
        autoplay={true}
        onSlideChange={() => console.log('slide change')}
      >
        {data.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <CardMain postData={item}></CardMain>
            </SwiperSlide>
          );
        })}
        {/* {data.map((item, key) => {
              return (
              <SwiperSlide key={key}>
                <h1>hello{key}</h1>
              </SwiperSlide>
            )})} */}
      </Swiper>
    </StyledSwiperArea>
  );
}
