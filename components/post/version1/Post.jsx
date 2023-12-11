import styled from 'styled-components';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';

const StyledPostArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 0.1rem;
  border-radius: 10px;
`;

export default function Post({ postData }) {
  const { header_image, content, title, author } = postData;

  return (
    <StyledPostArea>
      <PostHeader header_image={header_image} />
      <PostBody content={content} title={title} />
      <PostFooter author={author} />
    </StyledPostArea>
  );
}
