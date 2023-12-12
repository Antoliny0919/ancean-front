import styled from 'styled-components';
import Wave from 'react-wavify';
import CoverflowStretchPost from '../post/swiper/SlidePaginationPost';

const StyledPopularPostArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background-color: blue; */
  .wave {
    position: absolute;
    height: 50vw;
    z-index: 0;
  }
`;

export default function UserPageBody2({ posts }) {
  return (
    <StyledPopularPostArea>
      <CoverflowStretchPost posts={posts.popularPost} />
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
    </StyledPopularPostArea>
  );
}
