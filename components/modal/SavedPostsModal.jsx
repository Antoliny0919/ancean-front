import styled from 'styled-components';
import { FaRegTrashCan } from 'react-icons/fa6';

const StyledSavedPostsModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  h1 {
    margin-top: 0;
    margin-bottom: 2rem;
    border-bottom: solid black 2px;
  }
  .content {
    width: 100%;
    height: 25vw;
    overflow: scroll;
  }
`;

const StyledSavedPost = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: solid rgba(230, 230, 230, 0.8) 1.5px;
  transition: border-bottom 0.7s;
  width: 100%;
  .date {
    width: 20%;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 70%;
  }
  .delete {
    width: 10%;
    position: relative;
    display: none;
  }
  & + & {
    margin-top: 1.2rem;
  }
  &:hover {
    cursor: pointer;
    border-bottom: solid ${({ theme }) => theme.colors.mainColor[4]} 1.5px;
  }
  &:hover .delete {
    display: block;
  }
`;

export default function SavedPostsModal({
  posts,
  currentWritingPostId,
  selectDeleteSavedPost,
  postProps = {},
}) {
  return (
    <StyledSavedPostsModal>
      <h1>저장된 포스트</h1>
      <div className="content">
        {posts.map((post, index) => {
          let updatedAt = new Date(post.updated_at);
          if (currentWritingPostId === post.id) return;
          return (
            <StyledSavedPost key={index} id={post.id} {...postProps}>
              <div className="date">
                {updatedAt.getFullYear()}.{updatedAt.getMonth() + 1}.
                {updatedAt.getDate()}
              </div>
              <div className="title">제목: {post.title}</div>
              <div
                className="delete"
                id={post.id}
                onClick={selectDeleteSavedPost}
              >
                <FaRegTrashCan />
              </div>
            </StyledSavedPost>
          );
        })}
      </div>
    </StyledSavedPostsModal>
  );
}
