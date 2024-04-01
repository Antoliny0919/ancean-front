import { useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { EditorContext } from '../../pages/posts/newpost';
import editorContainer from './editorContainer';
import useModal from '../../hooks/useModal';
import NonePublishedPostsModal from './NonePublishedPostsModal';
import PublishingPostModal from './PublishingPostModal';
import CommonButton, { StyledCommonButton } from '../button/CommonButton';
import FontButton, { StyledFontButton } from '../button/FontButton';

const StyledFooterArea = styled.footer`
  @media screen and (min-width: 768px) {
    padding: 0.7rem 3rem;
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
  padding: 0.7rem 1em;
  .footer-left-item-block {
    button + button {
      margin-left: 3em;
    }
    display: flex;
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

  const { title } = useSelector(({ editor }) => editor);

  const nonePublishedPostsModal = useModal(false);

  const publishingPostModal = useModal(false);

  const editorRef = useContext(EditorContext).editorRef;

  const { createOrSave } = editorContainer(editorRef);

  return (
    <StyledFooterArea>
      {/* leftArea */}
      <div className="footer-left-item-block">
        <FontButton
          props={
            title ? { onClick: () => createOrSave(false) } : { disabled: true }
          }
        >
          임시저장
        </FontButton>
        <CommonButton props={{ onClick: () => nonePublishedPostsModal.open() }}>
          저장된 포스트
        </CommonButton>
        <NonePublishedPostsModal
          state={nonePublishedPostsModal.state}
          close={nonePublishedPostsModal.close}
        ></NonePublishedPostsModal>
      </div>
      {/* rightArea */}
      <div>
        <CommonButton
          props={
            title
              ? { onClick: () => publishingPostModal.open() }
              : { disabled: true }
          }
        >
          출간하기
        </CommonButton>
        <PublishingPostModal
          state={publishingPostModal.state}
          close={publishingPostModal.close}
        />
      </div>
    </StyledFooterArea>
  );
}
