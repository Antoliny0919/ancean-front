import styled from 'styled-components';
import Wave from 'react-wavify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SectionHeader from './items/SectionHeader';
import NewsStylePost from '../minipost/NewsStylePost';
import SwiperButton from '../button/SwiperButton';
import 'swiper/css';
import 'swiper/css/navigation';

const StyledPopularWritingArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .wave {
    position: absolute;
    height: 700px;
    max-width: 2048px;
    z-index: 0;
  }
`;

const StyledPostSwiper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  .slide-news-style-post {
    padding-top: 3rem;
    padding-bottom: 3rem;
    .swiper-button-next,
    .swiper-button-prev {
    }
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
        <StyledPostSwiper>
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            loop={true}
            className="slide-news-style-post"
          >
            {posts.map((item, index) => (
              <SwiperSlide key={index}>
                <NewsStylePost
                  postData={item}
                  rotate={index % 2 === 0 ? 'under-degree' : 'up-degree'}
                ></NewsStylePost>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev">
              <SwiperButton type="prev" />
            </div>
            <div className="swiper-button-next">
              <SwiperButton type="next" />
            </div>
          </Swiper>
        </StyledPostSwiper>
        <Wave
          fill={'#27566B'}
          paused={false}
          className="wave"
          options={{
            height: 300,
            amplitude: 100,
            speed: 0.5,
            points: 2,
          }}
        ></Wave>
      </ContentArea>
    </StyledPopularWritingArea>
  );
}
