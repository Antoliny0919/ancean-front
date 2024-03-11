import { useState, useEffect, useRef, createContext } from 'react';
import { useDispatch } from 'react-redux';
import { server } from '@/api/client';
import { getPost } from '../../components/editor/modules/editor';
import ModalBase from '../../components/modal/ModalBase';
import EditorNotification from '../../components/editor/EditorNotification';
import ContinueWritingModal from '../../components/editor/ContinueWritingModal';
import AuthContainer from '../../components/auth/AuthContainer';
import UserContainer from '../../components/auth/UserContainer';
import EditorHeader from '../../components/editor/EditorHeader';
import EditorContent from '../../components/editor/EditorContent';
import EditorFooter from '../../components/editor/EditorFooter';

export const EditorContext = createContext();

export default function newpost({ categories }) {
  const dispatch = useDispatch();

  const editorRef = useRef();

  const contextProps = {
    editorRef: editorRef,
    categories: categories,
  };

  const [continueWritingModalState, setContinueWritingModalState] =
    useState(false);

  useEffect(() => {
    const previousWritingPostId = localStorage.getItem('beingWrittenPostId');
    const requestPatchPostId = localStorage.getItem('patchPostId');
    if (requestPatchPostId) {
      // get data of the post to be modified
      const query = `id=${requestPatchPostId}`;
      dispatch(getPost(query));
      localStorage.removeItem('patchPostId');
      return;
    }
    if (previousWritingPostId) {
      // get a post that was previously being created
      setContinueWritingModalState(true);
      return;
    }
  }, []);

  return (
    <AuthContainer>
      <UserContainer>
        <EditorContext.Provider value={contextProps}>
          {/* Notification Save Message */}
          <EditorNotification />
          {continueWritingModalState && (
            <ModalBase
              disable={continueWritingModalState}
              controlModalState={setContinueWritingModalState}
            >
              <ContinueWritingModal
                controlModalState={setContinueWritingModalState}
              />
            </ModalBase>
          )}
          <EditorHeader />
          <EditorContent />
          <EditorFooter categories={categories} />
        </EditorContext.Provider>
      </UserContainer>
    </AuthContainer>
  );
}

export const getServerSideProps = async () => {
  const response = await server.get('/api/category/');
  const categories = response.data;

  return { props: { categories: categories } };
};
