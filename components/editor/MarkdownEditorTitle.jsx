import styled from 'styled-components';

const StyledMarkdownEditorTitle = styled.div`
  width: 100%;
  input {
    width: inherit;
    font-size: 32px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: none;
    outline: none;
  }
`;

export default function MarkdownEditorTitle() {
  return (
    <StyledMarkdownEditorTitle>
      <input placeholder="제목을 입력하세요.."></input>
    </StyledMarkdownEditorTitle>
  );
}
