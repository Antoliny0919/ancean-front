import styled from 'styled-components';

const StyledPostBodyArea = styled.div`
  width: 100%;
  padding: 1rem;
  .title {
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: 'Pretendard-Bold';
    margin-bottom: 0.7em;
  }
  .content {
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    font-family: 'Pretendard-Light';
    margin-bottom: 0.7em;
  }
  .created-date {
    @media screen and (min-width: 768px) {
      font-size: 12px;
    }
    font-size: 9px;
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
