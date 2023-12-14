import styled from 'styled-components';
import Wave from 'react-wavify';
import SectionHeader from './items/SectionHeader';
import SlidePaginationPost from '@/components/post/swiper/SlidePaginationPost';

const StyledPopularWritingArea = styled.section`
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

function PopularWriting({ posts }) {
  return (
    <StyledPopularWritingArea>
      <SectionHeader
        mainTitle={'Popular Writing'}
        subTitle={'가장 많은 WAVE를 획득한 포스트입니다.'}
        color={'hsl(215, 58%, 59%)'}
        shadow={
          '1px 1px hsl(215, 58%, 56%), \
        2px 2px hsl(215, 58%, 53%), \
        3px 3px hsl(215, 58%, 50%), \
        4px 4px hsl(215, 58%, 47%), \
        5px 5px hsl(215, 58%, 43%), \
        6px 6px hsl(215, 58%, 40%), \
        7px 7px hsl(215, 58%, 37%), \
        8px 8px hsl(215, 58%, 34%), \
        9px 9px hsl(215, 58%, 31%), \
        10px 10px hsl(215, 58%, 28%), \
        10px 10px 30px rgba(0,0,0,.7)'
        }
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

export default PopularWriting;
