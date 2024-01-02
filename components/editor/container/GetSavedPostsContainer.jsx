import { useDispatch } from 'react-redux';
import { useState, useCallback, useMemo } from 'react';
import * as postAPI from '@/api/post';
import { getPost, deletePost } from '../modules/editor';
import CommonButton from '../../button/CommonButton';
import ModalBase from '../../modal/ModalBase';
import SavedPostsModal from '../../modal/SavedPostsModal';
import { closeModal } from '../../modal/ModalBase';

export default function GetSavedPostsContainer() {
  const dispatch = useDispatch();

  const [savedPosts, setSavedPosts] = useState();

  const [modalState, setModalState] = useState(false);

  let currentWritingPostId = useMemo(() => {
    if (typeof window !== 'undefined') {
      let postId = Number(localStorage.getItem('beingWrittenPostId'));
      return postId;
    }
  }, [dispatch, savedPosts]);

  const getSavedPosts = useCallback(async () => {
    const response = await postAPI.getSavedPosts();
    const posts = response.data;
    setSavedPosts(posts);
    setModalState(true);
  }, [dispatch, modalState]);

  const rewriteSavedPost = useCallback((e) => {
    const postId = e.currentTarget.id;
    dispatch(getPost(postId));
    closeModal(setModalState);
  }, []);

  const selectDeleteSavedPost = (e) => {
    e.stopPropagation();
    let response = confirm('정말 삭제하시겠습니까?');
    if (response) {
      let postId = e.currentTarget.id;
      dispatch(deletePost({ id: postId }));
      closeModal(setModalState);
    }
  };

  return (
    <>
      <CommonButton props={{ onClick: getSavedPosts }}>
        저장된 포스트
      </CommonButton>
      {modalState && (
        <ModalBase
          disable={modalState}
          controlModalState={setModalState}
          styleProps={{ width: '45vw' }}
        >
          <SavedPostsModal
            posts={savedPosts}
            currentWritingPostId={currentWritingPostId}
            selectDeleteSavedPost={selectDeleteSavedPost}
            postProps={{ onClick: rewriteSavedPost }}
          />
        </ModalBase>
      )}
    </>
  );
}
