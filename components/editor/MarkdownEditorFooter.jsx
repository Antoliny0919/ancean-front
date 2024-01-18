import { useState } from 'react';
import styled from 'styled-components';
import SavePostContainer from './container/SavePostContainer';
import GetSavedPostsContainer from './container/GetSavedPostsContainer';
import CommonButton from '../button/CommonButton';
import PostFinalPublicationModal from '../modal/PostFinalPublicationModal';

const StyledFooterArea = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  z-index: 50;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 0 3rem;
  .footer-left-item-block {
    button + button {
      margin-left: 3rem;
    }
    display: flex;
    padding: 0.8rem 0 0.8rem 0;
    border-top-right-radius: 10px;
  }
`;

export default function MarkdownEditorFooter() {
  const [modalState, setModalState] = useState(false);

  return (
    <StyledFooterArea>
      <div className="footer-left-item-block">
        <SavePostContainer>임시저장</SavePostContainer>
        <GetSavedPostsContainer>저장된 포스트</GetSavedPostsContainer>
      </div>
      <div>
        <CommonButton props={{ onClick: () => setModalState(true) }}>
          출간하기
        </CommonButton>
        <PostFinalPublicationModal modalState={modalState} />
      </div>
    </StyledFooterArea>
  );
}
