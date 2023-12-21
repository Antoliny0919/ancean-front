import styled from 'styled-components';
// import MarkdownEditorContent from './MarkdownEditorContent';
import MarkdownEditorContent2 from './MarkdownEditorContent2';
// import MarkdownEditorToolbar from './MarkdownEditorToolbar';
import MarkdownEditorFooter from './MarkdownEditorFooter';
import EntireBlockInput from '../input/EntireBlockInput';
import CategoryInputContainer from './container/CategoryInputContainer';

const StyledMarkdownEditorArea = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
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
        <EntireBlockInput placeholder={'제목을 입력해주세요..'} />
        {/* categoryInput */}
        <CategoryInputContainer
          placeholder={'카테고리를 입력해주세요..'}
          categories={categories}
        />
      </StyledMarkdownHeaderArea>
      <MarkdownEditorContent2 />
      <MarkdownEditorFooter />
    </StyledMarkdownEditorArea>
  );
}
