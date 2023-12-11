import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Post from '../version1/Post';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
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

export default function CoverflowStretchPost({ posts }) {
  return (
    <StyledCardSwiperArea>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        slidesPerView={1}
        loop={true}
        effect={'coverflow'}
        slideToClickedSlide={true}
        className="coverflow-stretch-post"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 70,
          modifier: 1,
          slideShadows: false,
        }}
      >
        <SwiperButton icon={<FaArrowLeftLong />} title="PREVIOUS" />
        {posts.map((item, index) => (
          <SwiperSlide key={index}>
            <Post postData={item}></Post>
          </SwiperSlide>
        ))}
        <SwiperButton icon={<FaArrowRightLong />} title="NEXT" />
      </Swiper>
    </StyledCardSwiperArea>
  );
}
