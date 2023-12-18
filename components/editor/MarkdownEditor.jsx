import styled from 'styled-components';
import MarkdownEditorTitle from './MarkdownEditorTitle';
import MarkdownEditorContent from './MarkdownEditorContent';
import MarkdownEditorCategory from './MarkdownEditorCategory';
import MarkdownEditorToolbar from './MarkdownEditorToolbar';
import MarkdownEditorFooter from './MarkdownEditorFooter';

const StyledMarkdownEditorArea = styled.div`
  height: 100vh;
  width: 90%;
  max-height: 100vh;
  overflow: hidden;
  margin: auto;
  margin-top: 10px;
  & > div {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const StyledMarkdownHeaderArea = styled.div`
  height: 25%;
`;

export default function MarkdownEditor({ categories }) {
  return (
    <StyledMarkdownEditorArea>
      <StyledMarkdownHeaderArea>
        <MarkdownEditorTitle />
        <MarkdownEditorCategory categories={categories} />
        <MarkdownEditorToolbar />
      </StyledMarkdownHeaderArea>
      <MarkdownEditorContent />
      <MarkdownEditorFooter />
    </StyledMarkdownEditorArea>
  );
}
