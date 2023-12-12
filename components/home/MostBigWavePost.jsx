import { Raleway } from 'next/font/google';
import styled from 'styled-components';
import SlidePaginationPost from '@/components/post/swiper/SlidePaginationPost';
import Wave from 'react-wavify';

export const RaleWayFont = Raleway({
  subsets: ['latin'],
  weight: ['500'],
});

const StyledPopularWritingArea = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
`;

const HeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  h5 {
    margin: 0;
    margin-bottom: 2rem;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .wave {
    position: absolute;
    height: 50vw;
    z-index: 0;
  }
`;

function MostBigWavePost({ posts }) {
  return (
    <StyledPopularWritingArea>
      <HeaderArea>
        <h1 className={RaleWayFont.className}>Popular Writing</h1>
        <h5 className={RaleWayFont.className}>
          These are the posts that got the most waves.
        </h5>
      </HeaderArea>
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

export default MostBigWavePost;
