import styled from 'styled-components';
// import MarkdownEditorTitle from './MarkdownEditorTitle';
import MarkdownEditorContent from './MarkdownEditorContent';
// import MarkdownEditorCategory from './MarkdownEditorCategory';
// import MarkdownEditorToolbar from './MarkdownEditorToolbar';
import MarkdownEditorFooter from './MarkdownEditorFooter';
import EntireBlockInput from '../input/EntireBlockInput';
import CategoryInputContainer from './container/CategoryInputContainer';

const StyledMarkdownEditorArea = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  & > div {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const StyledMarkdownHeaderArea = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: solid green 2px;
  & > * {
    flex: 0.5;
  }
`;

export default function MarkdownEditor({ categories }) {
  return (
    <StyledMarkdownEditorArea>
      <StyledMarkdownHeaderArea>
        {/* titleInput */}
        <EntireBlockInput placeholder={'제목을 입력해주세요..'} />
        {/* categoryInput */}
        <CategoryInputContainer
          placeholder={'카테고리를 입력해주세요..'}
          categories={categories}
        />
      </StyledMarkdownHeaderArea>
      <MarkdownEditorContent />
      <MarkdownEditorFooter />
    </StyledMarkdownEditorArea>
  );
}
