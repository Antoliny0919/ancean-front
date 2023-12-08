import styled from 'styled-components';
import Post from '@/components/post/category-post-style/Post';
import { REPRESENTATIVE_CATEGORY } from '../category/category';

const StyledBestPostByCategoryArea = styled.section`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function BestPostByCategory() {
  return (
    <StyledBestPostByCategoryArea>
      {REPRESENTATIVE_CATEGORY.map((item, index) => {
        return <Post key={index} category={item}></Post>;
      })}
    </StyledBestPostByCategoryArea>
  );
}
