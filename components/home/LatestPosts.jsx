import styled from 'styled-components';
import ResponsivePost from '../minipost/ResponsivePost';
import Poster from '../poster/Poster';

const StyledLatestPostsArea = styled.div`
  @media screen and (min-width: 768px) {
    padding: 2rem 3rem;
  }
`;

export default function LatestPosts({ posts }) {
  return (
    <StyledLatestPostsArea>
      {/* latest post show only three post (check it page/index.jsx/ queries)*/}
      <Poster
        borderColor={'hsl(237, 46%, 60%)'}
        backgroundColor={'rgba(106, 111, 200, 0.3)'}
        boxShadowProps={{
          type: 'box',
          thickness: 5,
          hsl: { hue: 237, saturation: 46, lightness: 60 },
        }}
      >
        {posts.map((post, index) => {
          return <ResponsivePost key={index} post={post}></ResponsivePost>;
        })}
      </Poster>
    </StyledLatestPostsArea>
  );
}
