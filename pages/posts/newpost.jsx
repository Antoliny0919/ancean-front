import { useEffect, useRef, createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server } from '@/api/client';
import { getPost } from '../../components/editor/modules/editor';
import AuthModal from '../../components/auth/AuthModal';
import EditorNotification from '../../components/editor/EditorNotification';
import ContinueWritingModal from '../../components/editor/ContinueWritingModal';
import AuthGateway from '../../components/auth/AuthGateway';
import {
  EditorContent,
  EditorFooter,
  EditorHeader,
} from '../../components/editor';

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

  useEffect(() => {
    const requestPatchPostId = localStorage.getItem('patchPostId');

    if (accessToken) {
      const headers = { Authorization: `Bearer ${accessToken}` };
      if (requestPatchPostId) {
        const query = `id=${requestPatchPostId}`;
        dispatch(getPost({ query, headers }));
        localStorage.removeItem('patchPostId');
        return;
      }
    }
  }, [accessToken]);

  return (
    <AuthGateway>
      <EditorContext.Provider value={contextProps}>
        {/* Notification Save Message */}
        <EditorNotification />
        <AuthModal permit="is_staff" />
        <ContinueWritingModal />
        <EditorHeader />
        <EditorContent />
        <EditorFooter categories={categories} />
      </EditorContext.Provider>
    </AuthGateway>
  );
}

export const getStaticProps = async () => {
  const response = await server.get('/api/category/');
  const categories = response.data;

  return { props: { categories: categories } };
};
