import styled from 'styled-components';
import CreateDate from '@/components/common/Date';
import { miniPostContent } from '@/styles/variable';

const StyledPostBodyArea = styled.div`
  width: 100%;
  padding: 1rem;
  .title {
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
    font-size: 12px;
    ${miniPostContent.titleEllipsis};
    font-family: 'Pretendard-Bold';
    margin-bottom: 0.7em;
  }
  .content {
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
    height: 8em;
    font-size: 10px;
    ${miniPostContent.contentEllipsis(5)};
    font-family: 'Pretendard-Light';
    margin-bottom: 0.7em;
  }
  .created-date {
    @media screen and (min-width: 768px) {
      font-size: 12px;
    }
    font-size: 9px;
    font-family: 'Pretendard-Light';
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export default function PostBody({ content, title, created_at }) {
  const date = CreateDate(created_at);

  return (
    <StyledPostBodyArea>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      {date && (
        <div className="created-date">
          작성일: {date.getFullYear()}년 {date.getMonth() + 1}월{' '}
          {date.getDate()}일
        </div>
      )}
    </StyledPostBodyArea>
  );
}
