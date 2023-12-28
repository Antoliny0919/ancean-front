import { useState, useCallback } from 'react';
import * as postAPI from '@/api/post';
import CommonButton from '../../button/CommonButton';
import ModalBase from '../../modal/ModalBase';
import SavedPostsModal from '../../modal/SavedPostsModal';

export default function GetSavedPostsContainer() {
  const [savedPosts, setSavedPosts] = useState();

  const [modalState, setModalState] = useState(false);

  const getSavedPosts = useCallback(async () => {
    const response = await postAPI.getSavedPosts();
    const posts = response.data;
    setSavedPosts(posts);
    setModalState(true);
  }, [modalState]);

  return (
    <>
      <CommonButton props={{ onClick: getSavedPosts }}>
        저장된 포스트
      </CommonButton>
      {modalState && (
        <ModalBase disable={modalState} controlModalState={setModalState}>
          <SavedPostsModal posts={savedPosts} />
        </ModalBase>
      )}
    </>
  );
}
