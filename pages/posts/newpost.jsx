import { useState, useEffect, useRef, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server } from '@/api/client';
import { getPost } from '../../components/editor/modules/editor';
import ModalBase from '../../components/modal/ModalBase';
import AuthModal from '../../components/auth/AuthModal';
import EditorNotification from '../../components/editor/EditorNotification';
import ContinueWritingModal from '../../components/editor/ContinueWritingModal';
import AuthGateway from '../../components/auth/AuthGateway';
import UserGateway from '../../components/auth/UserGateway';
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

  const { user } = useSelector(({ auth }) => auth);

  const accessToken = user.token.access;

  const [continueWritingModalState, setContinueWritingModalState] =
    useState(false);

  useEffect(() => {
    const previousWritingPostId = localStorage.getItem('beingWrittenPostId');
    const requestPatchPostId = localStorage.getItem('patchPostId');

    if (accessToken) {
      const headers = { Authorization: `Bearer ${accessToken}` };
      if (requestPatchPostId) {
        const query = `id=${requestPatchPostId}`;
        dispatch(getPost({ query, headers }));
        localStorage.removeItem('patchPostId');
        return;
      } else if (previousWritingPostId) {
        // get a post that was previously being created
        setContinueWritingModalState(true);
        return;
      }
    }
  }, [accessToken]);

  return (
    <AuthGateway>
      <UserGateway>
        <AuthModal></AuthModal>
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
      </UserGateway>
    </AuthGateway>
  );
}

export const getServerSideProps = async () => {
  const response = await server.get('/api/category/');
  const categories = response.data;

  return { props: { categories: categories } };
};
