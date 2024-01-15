import { noneClient } from '../../api/client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Card from '../card/Card';
import { post, flexBox } from '../../styles/variable';
import { WaveLogo, CommentLogo } from '../common/Icon';

const StyledPostCardImage = styled(Image)`
  background-color: #fff;
  border-radius: 10px;
  ${post.shadow()};
  ${post.shadowBorder()};
  z-index: 10;
  transition: opacity 0.7s;
  &:hover {
    opacity: 0.15;
  }
`;

const StyledPostCardCover = styled.div`
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: 10px;
  font-size: 16px;
  padding: 20px 10px;
  color: black;
  ${post.shadow()};
  ${post.shadowBorder()};
  ${flexBox.flex('column', 'none', 'center')}
  & > * {
    width: 80%;
  }
  .title {
    text-align: center;
    border-bottom: solid #565656 2px;
    ${post.titleEllipsis()};
  }
  .content {
    padding: 10px 0;
    ${post.contentEllipsis(9)};
    font-size: 14px;
    height: 60%;
  }
  .author-and-writer-area {
    padding: 10px 0;
    font-size: 10px;
    color: #565656;
  }
  .index-area {
    padding: 10px 0;
    font-size: 22px;
    ${flexBox.flex()};
    font-family: 'SUIT-Regular';
    .index {
      ${flexBox.flex('row', 'space-around', 'center')};
      margin-right: 20px;
      width: 30%;
      svg {
        color: #0c405e;
      }
      .value {
        margin-bottom: 5px;
      }
    }
  }
`;

export default function PostCard({ post }) {
  const { header_image, author, title, created_at, id, introduce, wave } = post;

  console.log(wave);

  const myLoader = ({ src }) => {
    return src;
  };

  const createDate = new Date(created_at);

  const imageUrl = header_image.includes(noneClient.defaults.baseURL)
    ? header_image.replace('api-local:8000', 'localhost:5050')
    : header_image;

  return (
    <Link href={`/posts/${id}`} style={{ width: '100%' }}>
      <Card style={{ width: '100%' }}>
        <StyledPostCardImage src={imageUrl} loader={myLoader} fill alt={'no'} />
        <StyledPostCardCover>
          <div className="title">{title}</div>
          <div className="content">{introduce}</div>
          <div className="author-and-writer-area">
            <div>작성자: {author}</div>
            <div>
              작성일: {createDate.getFullYear()}년 {createDate.getMonth() + 1}월{' '}
              {createDate.getDate()}일
            </div>
          </div>
          <div className="index-area">
            <div className="index">
              <span>{WaveLogo}</span>
              <span className="value">{wave}</span>
            </div>
            <div className="index">
              <span>{CommentLogo}</span>
              <span className="value">0</span>
            </div>
          </div>
        </StyledPostCardCover>
      </Card>
    </Link>
  );
}
