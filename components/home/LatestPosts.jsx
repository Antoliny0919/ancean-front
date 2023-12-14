import styled from 'styled-components';
import SectionHeader from './items/SectionHeader';
import Post from '@/components/post/style-simple-post/Post';

const StyledLatestPostsArea = styled.section`
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
  console.log(posts);
  return (
    <StyledLatestPostsArea>
      <SectionHeader
        mainTitle={'Latest Posts'}
        color={'hsl(237, 46%, 60%)'}
        shadow={
          '1px 1px hsl(237, 46%, 56%), \
        2px 2px hsl(237, 46%, 52%), \
        3px 3px hsl(237, 46%, 48%), \
        4px 4px hsl(237, 46%, 44%), \
        5px 5px hsl(237, 46%, 40%), \
        6px 6px hsl(237, 46%, 36%), \
        7px 7px hsl(237, 46%, 32%), \
        8px 8px hsl(237, 46%, 28%), \
        9px 9px hsl(237, 46%, 24%), \
        10px 10px 30px rgba(0,0,0,.7)'
        }
        subTitle={''}
        alignItems={'flex-start'}
      ></SectionHeader>
      <StyledSectionBody>
        {posts.slice(0, 3).map((post, index) => {
          return <Post key={index} post={post}></Post>;
        })}
      </StyledSectionBody>
    </StyledLatestPostsArea>
  );
}
