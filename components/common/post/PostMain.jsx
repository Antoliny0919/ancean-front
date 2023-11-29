import styled from 'styled-components';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
// import PostFooter from "./PostFooter";

const StyledPostContainer = styled.div`
  width: 20rem;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 0.15rem;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export default function PostMain({ header_image, title, content }) {
  console.log(header_image, title, content);
  return (
    <StyledPostContainer>
      <PostHeader header_image={header_image} />
      <PostBody title={title} content={content} />
      {/* <PostFooter/> */}
    </StyledPostContainer>
  );
}
