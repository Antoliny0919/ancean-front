import styled from 'styled-components';
import Post from '@/components/post/category-post-style/Post';

const StyledBestPostByCategoryArea = styled.section`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function BestPostByCategory({ categories, posts }) {
  return (
    <StyledBestPostByCategoryArea>
      {categories.map(({ name, color }, index) => {
        return (
          <Post key={index} name={name} color={color} post={posts[name]}></Post>
        );
      })}
    </StyledBestPostByCategoryArea>
  );
}
