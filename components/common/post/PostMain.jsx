import styled from 'styled-components';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
// import PostFooter from "./PostFooter";

const StyledPostContainer = styled.div`
  width: 20rem;
  border: solid red 0.1rem;
  border-radius: 10px;
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
