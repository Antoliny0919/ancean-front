import styled from 'styled-components';
import GetSavedPostsContainer from './container/GetSavedPostsContainer';
import FontButton from '../button/FontButton';

const StyledFooterArea = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  z-index: 1;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  .footer-item-block {
    button + button {
      margin-left: 3rem;
    }
    display: flex;
    padding: 0.8rem 2rem 0.8rem 3rem;
    border-top-right-radius: 10px;
  }
`;

export default function MarkdownEditorSave({ saveLogic }) {
  return (
    <StyledFooterArea>
      <div className="footer-item-block">
        <FontButton props={{ onClick: saveLogic }}>임시저장</FontButton>
        <GetSavedPostsContainer />
      </div>
    </StyledFooterArea>
  );
}
