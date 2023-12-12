import styled from 'styled-components';
import Post from '../post/version3/Post';
import Wave from 'react-wavify';

const StyledBestPostSection = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const StyledPopularPostArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(139, 219, 219, 0.7);
  ${StyledBestPostSection} {
    margin-top: 4rem;
  }
  .wave {
    height: 50vw;
    z-index: 0;
  }
`;

export default function UserPageBody2({ posts }) {
  const bestPost = [
    [posts[0], posts[1]],
    [posts[2], posts[3]],
  ];
  return (
    <StyledPopularPostArea>
      {bestPost.map((section, index) => {
        return (
          <StyledBestPostSection key={index}>
            {section.map((post, index) => {
              return <Post key={index} postData={post}></Post>;
            })}
          </StyledBestPostSection>
        );
      })}
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
