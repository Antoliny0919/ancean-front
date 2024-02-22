import { useState, useEffect, useRef, createContext } from 'react';
import { useDispatch } from 'react-redux';
import { server } from '@/api/client';
import { getPost } from '../../components/editor/modules/editor';
import ModalBase from '../../components/modal/ModalBase';
import EditorNotification from '../../components/editor/EditorNotification';
import ContinueWritingModal from '../../components/editor/ContinueWritingModal';
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
      dispatch(getPost(requestPatchPostId));
      localStorage.removeItem('patchPostId');
      return;
    }
    if (previousWritingPostId) {
      setContinueWritingModalState(true);
      return;
    }
  }, []);

  return (
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
  );
}

export const getServerSideProps = async () => {
  const response = await server.get('/api/category/');
  const categories = response.data;

  return { props: { categories: categories } };
};
