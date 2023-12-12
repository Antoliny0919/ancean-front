import styled from 'styled-components';
import CoverflowStretchPost from '../post/swiper/CoverflowStretchPost';

const StyledSection = styled.section`
  background-color: blue;
  h1 {
    font-size: 40px;
    margin-bottom: 3rem;
  }
`;

export default function UserPageBody({ posts, name }) {
  return (
    <StyledSection>
      <h1>@{name}의 인기글</h1>
      <CoverflowStretchPost posts={posts.popularPost} />
    </StyledSection>
  );
}
