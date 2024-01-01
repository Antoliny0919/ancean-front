import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalBase from '../modal/ModalBase';
import ContinueWritingContainer from './container/ContinueWritingContainer';
import MarkdownEditorContent from './MarkdownEditorContent';
import TitleContainer from './container/TitleContainer';
import CategoryInputContainer from './container/CategoryInputContainer';

const StyledMarkdownEditorArea = styled.div`
  height: 100vh;
  width: 100vw;
`;

const StyledMarkdownHeaderArea = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: solid ${({ theme }) => theme.colors.mainColor[4]} 2px;
  & > * {
    flex: 0.5;
    padding: 1rem 0rem 1rem 1rem;
    margin-right: 1rem;
  }
`;

export default function MarkdownEditor({ categories }) {
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    const previousWritingPostId = localStorage.getItem('beingWrittenPostId');
    if (previousWritingPostId) {
      setModalState(true);
      return;
    }
  }, []);

  return (
    <StyledMarkdownEditorArea>
      {modalState && (
        <ModalBase
          disable={modalState}
          controlModalState={setModalState}
          styleProps={{ width: '30vw' }}
        >
          <ContinueWritingContainer controlModalState={setModalState} />
        </ModalBase>
      )}
      <StyledMarkdownHeaderArea>
        {/* titleInput */}
        <TitleContainer />
        {/* categoryInput */}
        <CategoryInputContainer
          placeholder={'카테고리를 입력해주세요..'}
          categories={categories}
        />
      </StyledMarkdownHeaderArea>
      <MarkdownEditorContent />
    </StyledMarkdownEditorArea>
  );
}
