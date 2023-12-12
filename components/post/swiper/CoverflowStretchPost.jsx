import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Post from '../version3/Post';
import { Navigation, Pagination } from 'swiper/modules';
// import SwiperButton from './SwiperButton';
// import { FaArrowLeftLong } from 'react-icons/fa6';
// import { FaArrowRightLong } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StyledCardSwiperArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  .coverflow-stretch-post {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export default function CoverflowStretchPost({ posts }) {
  return (
    <StyledCardSwiperArea>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        loop={true}
        slideToClickedSlide={true}
        className="coverflow-stretch-post"
      >
        {/* <SwiperButton icon={<FaArrowLeftLong />} title="PREVIOUS" /> */}
        {posts.map((item, index) => (
          <SwiperSlide key={index}>
            <Post postData={item}></Post>
          </SwiperSlide>
        ))}
        {/* <SwiperButton icon={<FaArrowRightLong />} title="NEXT" /> */}
      </Swiper>
    </StyledCardSwiperArea>
  );
}
