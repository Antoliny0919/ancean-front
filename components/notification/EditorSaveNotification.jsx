import styled, { css } from 'styled-components';

const StyledEditorSaveNotification = styled.div`
  position: relative;
  width: 100%;
  opacity: 0;
  transform: translateY(-50px);
  text-align: center;
  color: white;
  z-index: 0;
  padding: 0.5vw 0 0.5vw 0;
  transition:
    transform 0.7s ease-in-out,
    opacity 0.7s;
  ${(props) =>
    props.$notificationState
      ? css`
          background-color: ${({ theme }) => theme.colors.state.success};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.state.fail};
        `}
  &.show {
    opacity: 1;
    transform: translateY(-20px);
  }
`;

export default function EditorSaveNotification({ disable, notificationState }) {
  return (
    <StyledEditorSaveNotification
      className={disable && 'show'}
      $notificationState={notificationState}
    >
      {notificationState ? (
        <div className="success content">포스트가 임시저장되었습니다.</div>
      ) : (
        <div className="fail content">포스트가 임시저장에 실패하였습니다.</div>
      )}
    </StyledEditorSaveNotification>
  );
}
