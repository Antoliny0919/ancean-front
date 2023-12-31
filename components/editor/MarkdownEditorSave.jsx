import styled from 'styled-components';
import SaveButtonContainer from './container/SaveButtonContainer';
import GetSavedPostsContainer from './container/GetSavedPostsContainer';

const StyledFooterArea = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  .footer-item-block {
    button + button {
      margin-left: 3rem;
    }
    display: flex;
    padding: 0.8rem 2rem 0.8rem 3rem;
    border-top-right-radius: 10px;
    background-color: #f2f2f2;
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export default function MarkdownEditorSave({ editorRef }) {
  return (
    <StyledFooterArea>
      <div className="footer-item-block">
        <SaveButtonContainer editorRef={editorRef} />
        <GetSavedPostsContainer />
      </div>
      {/* <div> */}
      {/* <button>출간하기</button> */}
      {/* </div> */}
    </StyledFooterArea>
  );
}
