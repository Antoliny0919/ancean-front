import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaRegTrashCan } from 'react-icons/fa6';
import { getPost } from './modules/editor';
import postContainer from '../post/postContainer';
import * as postAPI from '../../api/post';

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
  border-bottom: solid ${({ theme }) => theme.colors.lightGray} 1.5px;
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

export default function NonePublishedPostsModal({ closeModal }) {
  const dispatch = useDispatch();
  // the id of the post currently writing --> exclude posts currently being created
  const beingWrittenPostId = Number(localStorage.getItem('beingWrittenPostId'));

  const userName = useSelector(({ auth }) => auth.user.name);

  // nonePublishedPosts --> publish field value of the model field is false
  const [nonePublishedPosts, setNonePublishedPosts] = useState();

  const { deletePost } = postContainer();

  useEffect(() => {
    // every time client open a modal, it fetches nonePublishedPosts associated with the connected user
    const getNonePublishedPosts = async () => {
      const query = `is_finish=False&author__name=${userName}`;
      const response = await postAPI.getPost(query);
      const posts = response.data;
      setNonePublishedPosts(posts);
      return posts;
    };
    getNonePublishedPosts();
  }, []);

  return (
    <StyledSavedPostsModal>
      <h1>저장된 포스트</h1>
      <div className="content">
        {/* nonePublishedPosts are get after rendering is in progress(call from useEffect) */}
        {nonePublishedPosts &&
          nonePublishedPosts.map((post, index) => {
            let updatedAt = new Date(post.updated_at);
            // except currently writing post
            if (beingWrittenPostId === post.id) return;
            return (
              <StyledSavedPost
                key={index}
                id={post.id}
                onClick={(e) => {
                  const query = `id=${e.currentTarget.id}`;
                  dispatch(getPost(query));
                  closeModal();
                }}
              >
                <div className="date">
                  <p>
                    {updatedAt.getFullYear()}.{updatedAt.getMonth() + 1}.
                    {updatedAt.getDate()}
                  </p>
                </div>
                <div className="title">
                  <p>제목: {post.title}</p>
                </div>
                <div
                  className="delete"
                  id={post.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    deletePost(e.currentTarget.id);
                    closeModal();
                  }}
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
