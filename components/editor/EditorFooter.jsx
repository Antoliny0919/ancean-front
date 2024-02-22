import { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { EditorContext } from '../../pages/posts/newpost';
import usePost from './usePost';
import ModalBase from '../modal/ModalBase';
import NonePublishedPostsModal from './NonePublishedPostsModal';
import PostFinalPublicationModal from '../modal/PostFinalPublicationModal';
import CommonButton, { StyledCommonButton } from '../button/CommonButton';
import FontButton, { StyledFontButton } from '../button/FontButton';

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
  // EditorFooter Area have 3 button -> save temporarily, saved posts, publishing
  // saved posts(nonePublishedModal) and publishing(publishingModal)button is modal style(click to turn on the modal)
  const [nonePublishedModalState, setNonePublishedModalState] = useState(false);

  const [postPublishingModalState, setPostPublishingModalState] =
    useState(false);

  const { title } = useSelector(({ editor }) => editor);

  const editorRef = useContext(EditorContext).editorRef;

  const [createOrSavePost] = usePost(editorRef);

  return (
    <StyledFooterArea>
      {/* leftArea */}
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
        <CommonButton
          props={{ onClick: () => setNonePublishedModalState(true) }}
        >
          저장된 포스트
        </CommonButton>
        {nonePublishedModalState && (
          <ModalBase
            disable={nonePublishedModalState}
            controlModalState={setNonePublishedModalState}
            styleProps={{ width: '700px' }}
          >
            <NonePublishedPostsModal
              closeModal={() => setNonePublishedModalState(false)}
            />
          </ModalBase>
        )}
      </div>
      {/* rightArea */}
      <div>
        <CommonButton
          props={
            title
              ? { onClick: () => setPostPublishingModalState(true) }
              : { disabled: true }
          }
        >
          출간하기
        </CommonButton>
        <PostFinalPublicationModal
          modalState={postPublishingModalState}
          closeModal={() => setPostPublishingModalState(false)}
        />
      </div>
    </StyledFooterArea>
  );
}
