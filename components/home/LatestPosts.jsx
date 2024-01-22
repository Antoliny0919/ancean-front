import styled from 'styled-components';
import SectionHeader from './items/SectionHeader';
import Post from '@/components/minipost/style-simple-post/Post';

const StyledLatestPostsArea = styled.div`
  padding: 5rem;
`;

const StyledSectionBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
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
      <SectionHeader
        mainTitle={'Latest Posts'}
        subTitle={''}
        colorHSL={{ hue: 237, saturation: 46, lightness: 56 }}
        style={{ 'align-items': 'flex-start' }}
      ></SectionHeader>
      <StyledSectionBody>
        {posts.slice(0, 3).map((post, index) => {
          return <Post key={index} post={post}></Post>;
        })}
      </StyledSectionBody>
    </StyledLatestPostsArea>
  );
}
