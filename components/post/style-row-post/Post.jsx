import Image from 'next/image';
import styled from 'styled-components';
import TestImage from '@/public/call-back-hell.jpeg';

const StyledPostArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  img {
    width: 35%;
    height: 100%;
  }
`;

const StyledContentArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem 1rem 1.5rem;
  width: 65%;
  height: inherit;
  .title {
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: 'Pretendard-Bold';
    margin-bottom: 0.7rem;
  }
  .content {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    font-family: 'Pretendard-Light';
    margin-bottom: 0.7rem;
  }
`;

const StyledWaveArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledAuthorDateArea = styled.div`
  display: flex;
  font-size: 16px;
  flex-direction: row;
  align-items: center;
  font-family: 'Pretendard-Bold';
  justify-content: space-between;
  margin-top: 1rem;
  div {
    display: flex;
    align-items: center;
    .title {
      font-size: inherit;
      margin-right: 0.3rem;
      color: ${({ theme }) => theme.colors.mainColor[4]};
    }
    .content {
      display: inline-block;
      color: rgba(27, 27, 27, 0.5);
    }
  }
`;

export default function Post({ post }) {
  // const imageUrl = `http://localhost:5050${post.header_image}`
  // console.log(imageUrl);
  // style={{ height: '100%', width: '30%'}}
  const date = new Date(post.created_at);

  return (
    <StyledPostArea>
      <Image src={TestImage} alt="no-img"></Image>
      <StyledContentArea>
        <div className="title">{post.title}</div>
        <div className="content">{post.content}</div>
        <StyledWaveArea>
          <div>wave 지수</div>
        </StyledWaveArea>
        <StyledAuthorDateArea>
          <div>
            <span className="title">글쓴이:</span>
            <span className="content">{post.author}</span>
          </div>
          <div>
            <span className="title">작성일:</span>
            <span className="content">
              {date.getFullYear()}년 {date.getMonth()}월 {date.getDate()}일
            </span>
          </div>
        </StyledAuthorDateArea>
      </StyledContentArea>
    </StyledPostArea>
  );
}
