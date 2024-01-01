import styled, { css } from 'styled-components';

const StyledEditorSaveNotification = styled.div`
  position: relative;
  width: 100%;
  opacity: 0;
  transform: translateY(-50px);
  text-align: center;
  color: #f8f8f8;
  z-index: 0;
  padding: 0.5vw 0 0.5vw 0;
  transition:
    transform 0.7s ease-in-out,
    opacity 0.7s;
  ${(props) =>
    props.$notificationColor
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

export default function EditorSaveNotification({
  disable,
  notificationState,
  notificationMessage,
  notificationColor,
}) {
  return (
    <StyledEditorSaveNotification
      className={disable && 'show'}
      $notificationState={notificationState}
      $notificationColor={notificationColor}
    >
      <div>{notificationMessage}</div>
    </StyledEditorSaveNotification>
  );
}
