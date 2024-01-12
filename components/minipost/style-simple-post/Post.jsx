import Image from 'next/image';
import styled from 'styled-components';
import { noneClient } from '@/api/client';
import CategoryButton from '../../button/CategoryButton';

const StyledLatestPostArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-shallow-dark),
    2px 2px 0 0 var(--shadow-outline-shallow-dark),
    3px 3px 0 0 var(--shadow-outline-shallow-dark),
    4px 4px 0 0 var(--shadow-outline-shallow-dark),
    5px 5px 0 0 var(--shadow-outline-shallow-dark);
  background-color: white;
  transition:
    box-shadow 1s,
    border 1s;
  border-radius: 10px;
  .header-img {
    width: 30%;
    img {
      width: 100%;
      height: 100%;
    }
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
    box-shadow: 2px 2px 0 0 var(--shadow-outline-shallow-dark);
  }
`;

const StyledPostContent = styled.div`
  padding: 1rem;
  height: 20rem;
  width: 70%;
  .title {
    height: 15%;
    display: block;
    font-family: 'Pretendard-Bold';
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .content {
    height: 55%;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    font-family: 'Pretendard-Light';
    background-color: white;
  }
  .footer {
    height: 10%;
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

export default function LatestPost({ post, reference }) {
  const myLoader = ({ src }) => {
    return src;
  };

  const { category, introduce, created_at, header_image, title } = post;

  const writeDate = new Date(created_at);

  const imageUrl = header_image.includes(noneClient.defaults.baseURL)
    ? header_image.replace('api-local:8000', 'localhost:5050')
    : header_image;

  // const imageUrl = header_image.replace('api-local:8000', 'localhost:5050');
  // console.log(imageUrl, category, introduce, created_at, 'he;lo');

  return (
    <StyledLatestPostArea ref={reference}>
      <div className="header-img">
        <Image
          loader={myLoader}
          src={imageUrl}
          width={1000}
          height={1000}
          alt="no-img"
        ></Image>
      </div>
      <StyledPostContent>
        <h3 className="title">{title}</h3>
        <div className="content">{introduce}</div>
        <div className="footer">
          <div className="write-date">
            작성일: {writeDate.getFullYear()}년 {writeDate.getMonth() + 1}월{' '}
            {writeDate.getDate()}일
          </div>
          <CategoryButton categoryName={category}>{category}</CategoryButton>
        </div>
      </StyledPostContent>
    </StyledLatestPostArea>
  );
}
