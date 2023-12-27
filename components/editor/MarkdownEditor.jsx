import styled from 'styled-components';
import MarkdownEditorContent from './MarkdownEditorContent';
import TitleContainer from './container/TitleContainer';
import MarkdownEditorFooter from './MarkdownEditorFooter';
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
  }
`;

export default function MarkdownEditor({ categories }) {
  return (
    <StyledMarkdownEditorArea>
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
      {/* <TestBlock/> */}
      <MarkdownEditorFooter />
    </StyledMarkdownEditorArea>
  );
}
