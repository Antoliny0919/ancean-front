import Image from '../common/Image';
import styled from 'styled-components';
import CategoryButton from '../button/CategoryButton';

const StyledPostArea = styled.div`
  @media screen and (min-width: 450px) {
    width: 18em;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 70%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15em;
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
    @media screen and (min-width: 768px) {
      width: 30%;
      height: 100%;
      border-bottom: none;
    }
    width: 100%;
    height: 10em;
    aspect-ratio: 1 / 0.7;
    border-bottom: solid rgba(73, 73, 73, 0.2) 0.1em;
    /* height: 150px; */
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }
  }
  .post-content {
    display: flex;
    flex-direction: column;
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
  @media screen and (min-width: 768px) {
    padding: 1rem;
  }
  @media screen and (min-width: 1024px) {
    height: 20rem;
    padding: 1rem;
  }
  height: 13rem;
  width: 70%;
  .title {
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 22px;
    }
    height: 15%;
    font-size: 14px;
    display: block;
    font-family: 'Pretendard-Bold';
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .content {
    height: 55%;
    @media screen and (min-width: 768px) {
      font-size: 12px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    font-family: 'Pretendard-Light';
    background-color: white;
  }
  .footer {
    @media screen and (min-width: 768px) {
      font-size: 10px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 14px;
    }
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
    font-size: 8px;
    .write-date {
      font-family: 'SUIT-Regular';
      color: rgba(37, 37, 37, 0.8);
    }
  }
`;

export default function ResponsivePost({ post, reference }) {
  const { category, introduce, created_at, header_image, title } = post;

  const writeDate = new Date(created_at);

  return (
    <StyledPostArea ref={reference}>
      <div className="header-img">
        <Image src={header_image}></Image>
      </div>
      <StyledPostContent>
        <h3 className="title">{title}</h3>
        <div className="content">{introduce}</div>
        <div className="footer">
          <div className="write-date">
            작성일: {writeDate.getFullYear()}년 {writeDate.getMonth() + 1}월{' '}
            {writeDate.getDate()}일
          </div>
          <CategoryButton name={category}>{category}</CategoryButton>
        </div>
      </StyledPostContent>
    </StyledPostArea>
  );
}
