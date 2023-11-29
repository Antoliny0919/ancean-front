import styled from 'styled-components';

const StyledPostBody = styled.div`
  padding: 1rem;
  .title {
    font-size: 1.15rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }
  .content {
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export default function PostBody({ title, content }) {
  return (
    <StyledPostBody>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div></div>
    </StyledPostBody>
  );
}
