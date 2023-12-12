import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Post from '../style-general-post/Post';
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
  .slide-pagination-post {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export default function SlidePaginationPost({ posts }) {
  return (
    <StyledCardSwiperArea>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        loop={true}
        slideToClickedSlide={true}
        className="slide-pagination-post"
      >
        {/* <SwiperButton icon={<FaArrowLeftLong />} title="PREVIOUS" /> */}
        {posts.map((item, index) => (
          <SwiperSlide key={index}>
            <Post
              postData={item}
              rotate={index % 2 === 0 ? 'under-degree' : 'up-degree'}
            ></Post>
          </SwiperSlide>
        ))}
        {/* <SwiperButton icon={<FaArrowRightLong />} title="NEXT" /> */}
      </Swiper>
    </StyledCardSwiperArea>
  );
}
