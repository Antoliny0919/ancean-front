import styled from 'styled-components';

const StyledPostBodyArea = styled.div`
  width: 90%;
  padding: 1rem;
  .title {
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: 'Pretendard-Bold';
    margin-bottom: 0.7rem;
  }
  .content {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    font-family: 'Pretendard-Light';
    margin-bottom: 0.7rem;
  }
  .created-date {
    font-size: 12px;
    font-family: 'Pretendard-Light';
    color: rgba(57, 57, 57, 0.7);
  }
`;

export default function PostBody({ content, title }) {
  return (
    <StyledPostBodyArea>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div className="created-date">작성일: 2023년 11월 29일</div>
    </StyledPostBodyArea>
  );
}
