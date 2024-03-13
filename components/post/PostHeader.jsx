import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Wave from 'react-wavify';
import styled from 'styled-components';
import { FaPen } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import usePost from './usePost';
import CategoryButton from '../category/CategoryButton';
import FontButton from '../button/FontButton';
import { miniPostContent, flex } from '../../styles/variable';

const StyledPostHeader = styled.div`
  @media screen and (min-width: 768px) {
    font-size: 32px;
    padding-top: 4em;
  }
  position: relative;
  z-index: 10;
  width: 80%;
  font-size: 20px;
  padding-top: 1em;
  margin-right: auto;
  margin-left: auto;
  height: 20em;
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Pretendard-Bold';
  .post-main {
    position: relative;
    z-index: 100;
    h1 {
      @media screen and (min-width: 450px) {
        font-size: 32px;
      }
      @media screen and (min-width: 768px) {
        font-size: 64px;
        text-align: start;
      }
      ${miniPostContent.contentEllipsis(2)};
      font-size: 24px;
      max-height: 300px;
      text-align: center;
    }
  }
  .sub-title {
    @media screen and (min-width: 450px) {
      font-size: 12px;
    }
    @media screen and (min-width: 768px) {
      font-size: 16px;
      justify-content: flex-start;
    }
    ${flex('row', 'center', 'center')};
    font-size: 8px;
    & > * {
      margin-right: 1.5em;
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: 5px;
    }
  }
  .control-post {
    margin: 1em 0;
  }
`;

const StyledHeaderWave = styled.div`
  position: relative;
  bottom: 250px;
  .wave {
    @media screen and (min-width: 450px) {
      height: 300px;
    }
    @media screen and (min-width: 768px) {
      height: 400px;
    }
    height: 250px;
    z-index: 0;
  }
`;

export default function PostHeader({
  id,
  title,
  updated_at,
  author,
  category,
}) {
  const router = useRouter();

  const updatedAt = useMemo(() => {
    return new Date(updated_at);
  }, [updated_at]);

  const [, patchPost, deletePost] = usePost();

  const client = useSelector(({ auth }) => auth.user.name);

  const onPatchPost = () => patchPost(id);

  // delete post and go homepage('/')
  const onDeletePost = () => deletePost(id, () => router.push('/'));

  return (
    <>
      <StyledPostHeader>
        <div className="title post-main">
          <h1>{title}</h1>
        </div>
        <div className="sub-title post-main">
          <div className="author">
            <FaPen />
            <span>{author}</span>
          </div>
          <div className="calendar">
            <FaRegCalendarAlt />
            <span>
              {updatedAt.getFullYear()}년{updatedAt.getMonth() + 1}월
              {updatedAt.getDate()}일
            </span>
          </div>
          {category && (
            <CategoryButton name={category}>{category}</CategoryButton>
          )}
        </div>
        {/* it the client accessed is the owner of the post, the edit and delete interface is visible */}
        {author === client && (
          <div className="sub-title control-post">
            <FontButton props={{ onClick: onPatchPost }}>수정</FontButton>
            <FontButton props={{ onClick: onDeletePost }}>삭제</FontButton>
          </div>
        )}
      </StyledPostHeader>
      <StyledHeaderWave>
        <Wave
          fill={'#27566B'}
          paused={false}
          className="wave"
          options={{
            height: 70,
            amplitude: 50,
            speed: 0.5,
            points: 2,
          }}
        ></Wave>
      </StyledHeaderWave>
    </>
  );
}
