import styled, { css } from 'styled-components';

const StyledEditorSaveNotification = styled.div`
  position: absolute;
  opacity: 0;
  transition:
    transform 0.7s ease-in-out,
    opacity 0.7s;
  ${(props) =>
    props.$notificationState
      ? css`
          background-color: green;
        `
      : css`
          background-color: red;
        `}
  &.show {
    opacity: 1;
    transform: translateY(-4vw);
  }
`;

export default function EditorSaveNotification({ disable, notificationState }) {
  return (
    <StyledEditorSaveNotification
      className={disable && 'show'}
      $notificationState={notificationState}
    >
      hello
    </StyledEditorSaveNotification>
  );
}
