import { useState, useEffect, useRef, createContext } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getPost } from './modules/editor';
import ModalBase from '../modal/ModalBase';
import ContinueWritingContainer from './container/ContinueWritingContainer';
import MarkdownEditorContent from './MarkdownEditorContent';
import MarkdownEditorFooter from './MarkdownEditorFooter';
import TitleContainer from './container/TitleContainer';
import NotificationContainer from './container/NotificationContainer';

const StyledMarkdownHeaderArea = styled.div`
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
  position: relative;
  width: 100%;
  font-size: 16px;
  z-index: 10;
  border-bottom: solid ${({ theme }) => theme.colors.mainColor[4]} 2px;
  & > * {
    padding: 0.5em 1em 0.5em 1em;
  }
`;

export const EditorContext = createContext();

export default function MarkdownEditor({ categories }) {
  const dispatch = useDispatch();

  const editorRef = useRef();

  const contextProps = {
    editorRef: editorRef,
    categories: categories,
  };

  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    const previousWritingPostId = localStorage.getItem('beingWrittenPostId');
    const requestPatchPostId = localStorage.getItem('patchPostId');
    if (requestPatchPostId) {
      dispatch(getPost(requestPatchPostId));
      localStorage.removeItem('patchPostId');
      return;
    }
    if (previousWritingPostId) {
      setModalState(true);
      return;
    }
  }, []);

  return (
    <>
      <EditorContext.Provider value={contextProps}>
        {/* Notification Save Message */}
        <NotificationContainer />
        {modalState && (
          <ModalBase disable={modalState} controlModalState={setModalState}>
            <ContinueWritingContainer controlModalState={setModalState} />
          </ModalBase>
        )}
        <StyledMarkdownHeaderArea>
          {/* titleInput */}
          <TitleContainer />
          {/* categoryInput */}
        </StyledMarkdownHeaderArea>
        <MarkdownEditorContent />
        <MarkdownEditorFooter categories={categories} />
      </EditorContext.Provider>
    </>
  );
}
