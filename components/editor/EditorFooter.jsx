import { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import usePost from './useEditor';
import GetSavedPostsContainer from './container/GetSavedPostsContainer';
import CommonButton from '../button/CommonButton';
import FontButton from '../button/FontButton';
import PostFinalPublicationModal from '../modal/PostFinalPublicationModal';
import { EditorContext } from '../../pages/posts/newpost';
import { StyledCommonButton } from '../button/CommonButton';
import { StyledFontButton } from '../button/FontButton';

const StyledFooterArea = styled.footer`
  @media screen and (min-width: 768px) {
    padding: 0 3rem;
  }
  position: fixed;
  bottom: 0%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 50;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 0 1em;
  .footer-left-item-block {
    button + button {
      margin-left: 3em;
    }
    display: flex;
    padding: 0.8em 0 0.8em 0;
    border-top-right-radius: 10px;
  }
  ${StyledCommonButton} {
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
    font-size: 10px;
  }
  ${StyledFontButton} {
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
    font-size: 12px;
  }
`;

export default function EditorFooter() {
  const [modalState, setModalState] = useState(false);

  const { title } = useSelector(({ editor }) => editor);

  const editorRef = useContext(EditorContext).editorRef;

  const [createOrSavePost] = usePost(editorRef);

  return (
    <StyledFooterArea>
      <div className="footer-left-item-block">
        <FontButton
          props={
            title
              ? { onClick: () => createOrSavePost(false) }
              : { disabled: true }
          }
        >
          임시저장
        </FontButton>
        <GetSavedPostsContainer>
          <p>저장된 포스트</p>
        </GetSavedPostsContainer>
      </div>
      <div>
        {/* publishing button must have a title entered */}
        <CommonButton
          props={
            title ? { onClick: () => setModalState(true) } : { disabled: true }
          }
        >
          <p>출간하기</p>
        </CommonButton>
        <PostFinalPublicationModal
          modalState={modalState}
          closeModal={() => setModalState(false)}
        />
      </div>
    </StyledFooterArea>
  );
}
