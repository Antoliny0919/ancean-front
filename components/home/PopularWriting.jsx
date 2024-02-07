import styled from 'styled-components';
import Wave from 'react-wavify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SectionHeader from './items/SectionHeader';
import NewsStylePost from '../minipost/NewsStylePost';
import 'swiper/css';
import 'swiper/css/navigation';

const StyledPopularWritingArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* @media screen and (min-width: 768px) {
    height: 700px;
  }
  @media screen and (min-width: 1024px) {
    height: 800px;
  }
  height: 550px; */
`;

const ContentArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  .wave {
    @media screen and (min-width: 768px) {
      height: 400px;
    }
    height: 250px;
    bottom: 0;
    position: absolute;
    max-width: 2048px;
    z-index: 0;
  }
`;

const StyledPostSwiper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .slide-news-style-post {
    padding: 5rem 3rem;
  }
  .swiper-slide {
    width: 100%;
  }
`;

export default function PopularWriting({ posts }) {
  return (
    <StyledPopularWritingArea>
      <SectionHeader
        mainTitle={'Popular Writing'}
        subTitle={'가장 많은 WAVE를 획득한 포스트입니다.'}
        colorHSL={{ hue: 215, saturation: 58, lightness: 59 }}
      />
      <ContentArea>
        <StyledPostSwiper className="fade-in-slide-down-suspend">
          <Swiper
            modules={[Navigation]}
            loop={true}
            className="slide-news-style-post"
            spaceBetween={500}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: posts.length === 1 ? 1 : 2,
                spaceBetween: 20,
              },
            }}
          >
            {posts.map((item, index) => (
              <SwiperSlide key={index}>
                <NewsStylePost
                  postData={item}
                  rotate={index % 2 === 0 ? 'under-degree' : 'up-degree'}
                ></NewsStylePost>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledPostSwiper>
        <Wave
          fill={'#27566B'}
          paused={false}
          className="wave"
          options={{
            height: 40,
            amplitude: 70,
            speed: 0.5,
            points: 2,
          }}
        ></Wave>
      </ContentArea>
    </StyledPopularWritingArea>
  );
}
