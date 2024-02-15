import styled from 'styled-components';
import HomeSectionHeader from './HomeSectionHeader';
import ResponsivePost from '../minipost/ResponsivePost';

const StyledLatestPostsArea = styled.div`
  @media screen and (min-width: 768px) {
    padding: 2rem 3rem;
  }
`;

const StyledSectionBody = styled.div`
  @media screen and (min-width: 768px) {
    padding: 3rem 0;
  }
  @media screen and (min-width: 1024px) {
    padding: 5rem 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  border: solid hsl(237, 46%, 60%) 0.2rem;
  background-color: rgba(106, 111, 200, 0.2);
  border-radius: 10px;
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-latest-post),
    2px 2px 0 0 var(--shadow-outline-latest-post),
    3px 3px 0 0 var(--shadow-outline-latest-post),
    4px 4px 0 0 var(--shadow-outline-latest-post);
`;

export default function LatestPosts({ posts }) {
  return (
    <StyledLatestPostsArea>
      <HomeSectionHeader
        mainTitle={'Latest Posts'}
        subTitle={''}
        colorHSL={{ hue: 237, saturation: 46, lightness: 56 }}
        style={{ 'align-items': 'flex-start' }}
      ></HomeSectionHeader>
      <StyledSectionBody>
        {posts.map((post, index) => {
          return <ResponsivePost key={index} post={post}></ResponsivePost>;
        })}
      </StyledSectionBody>
    </StyledLatestPostsArea>
  );
}
