import styled from 'styled-components';

const StyledPostBodyArea = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
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

export default function PostBody({ content, title, created_at }) {
  const date = new Date(created_at);

  return (
    <StyledPostBodyArea>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div className="created-date">
        작성일: {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}
        일
      </div>
    </StyledPostBodyArea>
  );
}
