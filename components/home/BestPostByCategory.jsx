import styled from 'styled-components';
import VerticalPaginationPostByCategory from '@/components/category/swiper/VerticalPaginationPostByCategory';

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
          <VerticalPaginationPostByCategory
            key={index}
            name={name}
            color={color}
            posts={posts[name]}
          ></VerticalPaginationPostByCategory>
        );
      })}
    </StyledBestPostByCategoryArea>
  );
}
