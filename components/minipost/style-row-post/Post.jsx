import Image from 'next/image';
import styled from 'styled-components';
import { LuWaves } from 'react-icons/lu';
import { FaRegCommentDots } from 'react-icons/fa';

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
  justify-content: space-between;
  padding: 1rem 1.5rem 1rem 1.5rem;
  width: 65%;
  height: inherit;
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

const StyledContentHeaderArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  .title {
    font-family: 'Pretendard-Bold';
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0.7rem;
  }
  .icon-area {
    div {
      display: inline-flex;
      font-family: 'SUIT-Regular';
      margin-right: 1rem;
      svg {
        padding-right: 0.3rem;
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.colors.mainColor[4]};
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
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
      color: ${({ theme }) => theme.colors.mainColor[8]};
    }
    .content {
      display: inline-block;
      color: rgba(27, 27, 27, 0.5);
    }
  }
`;

export default function Post({ post }) {
  const imageUrl = `http://localhost:5050${post.header_image}`;
  const date = new Date(post.created_at);

  console.log(imageUrl);

  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <StyledPostArea>
      <Image
        loader={myLoader}
        src={imageUrl}
        alt="no-img"
        width={1000}
        height={1000}
      ></Image>
      <StyledContentArea>
        <StyledContentHeaderArea>
          <div>
            <span className="title">{post.title}</span>
          </div>
          <div className="icon-area">
            <div>
              <span>
                <LuWaves />
              </span>
              <span>{post.wave}</span>
            </div>
            <div>
              <span>
                <FaRegCommentDots />
              </span>
              <span>0</span>
            </div>
          </div>
        </StyledContentHeaderArea>
        <div className="content">{post.content}</div>
        <StyledAuthorDateArea>
          <div>
            <span className="title">글쓴이:</span>
            <span className="content">{post.author}</span>
          </div>
          <div>
            <span className="title">작성일:</span>
            <span className="content">
              {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
            </span>
          </div>
        </StyledAuthorDateArea>
      </StyledContentArea>
    </StyledPostArea>
  );
}
