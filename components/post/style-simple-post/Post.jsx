import Image from 'next/image';
import styled from 'styled-components';
import CategoryButton from '../../button/CategoryButton';

const StyledLatestPostArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  border-bottom: solid ${({ theme }) => theme.colors.mainColor[4]} 0.1rem;
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-shallow-dart),
    2px 2px 0 0 var(--shadow-outline-shallow-dart),
    3px 3px 0 0 var(--shadow-outline-shallow-dart);
  background-color: white;
  transition:
    box-shadow 1s,
    border 1s;
  border-radius: 10px;
  img {
    width: 30%;
    height: 100%;
  }
  .post-content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  & + & {
    margin-top: 2rem;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 0 0 var(--shadow-outline-shallow-dart);
  }
`;

const StyledPostContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .title {
    font-family: 'Pretendard-Bold';
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  }
  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
    font-size: 14px;
    .write-date {
      font-family: 'SUIT-Regular';
      color: rgba(37, 37, 37, 0.8);
    }
  }
`;

export default function LatestPost({ post }) {
  const myLoader = ({ src }) => {
    return src;
  };

  const { category, content, created_at, header_image, title } = post;

  const writeDate = new Date(created_at);

  const imageUrl = header_image.replace('api-local:8000', 'localhost:5050');

  return (
    <StyledLatestPostArea>
      <Image
        loader={myLoader}
        src={imageUrl}
        width={1000}
        height={1000}
        alt="no-img"
      ></Image>
      <StyledPostContent>
        <h3 className="title">{title}</h3>
        <div className="content">{content}</div>
        <div className="footer">
          <div className="write-date">
            작성일: {writeDate.getFullYear()}년 {writeDate.getMonth() + 1}월{' '}
            {writeDate.getDate()}일
          </div>
          <CategoryButton categoryName={category} />
        </div>
      </StyledPostContent>
    </StyledLatestPostArea>
  );
}
