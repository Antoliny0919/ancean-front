import styled from 'styled-components';

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
`;

const StyledSavedPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: solid rgba(230, 230, 230, 0.8) 1.5px;
  width: 100%;
  .date {
    width: 20%;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80%;
  }
  & + & {
    margin-top: 1.2rem;
  }
`;

export default function SavedPostsModal({ posts, postProps = {} }) {
  return (
    <StyledSavedPostsModal>
      <h1>저장된 포스트</h1>
      {posts.map((post, index) => {
        let updatedAt = new Date(post.updated_at);
        return (
          <StyledSavedPost key={index} id={post.id} {...postProps}>
            <div className="date">
              {updatedAt.getFullYear()}.{updatedAt.getMonth() + 1}.
              {updatedAt.getDate()}
            </div>
            <div className="title">제목: {post.title}</div>
          </StyledSavedPost>
        );
      })}
    </StyledSavedPostsModal>
  );
}
