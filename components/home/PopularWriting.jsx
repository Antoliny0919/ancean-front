import styled from 'styled-components';
import Wave from 'react-wavify';
import SectionHeader from './items/SectionHeader';
import SlidePaginationPost from '@/components/minipost/swiper/SlidePaginationPost';

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
    z-index: 0;
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
        <SlidePaginationPost posts={posts} />
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
