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
        <Post post={posts[0]}></Post>
      </StyledSectionBody>
    </StyledLatestPostsArea>
  );
}
