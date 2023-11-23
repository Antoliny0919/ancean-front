import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}px;
    `};
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}rem;
    `};
  border: solid ${({ theme }) => theme.colors.mainColor[3]} 0.1rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.mainColor[4]};
  color: #f8f8f8;
  transition: all 0.5s;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #f8f8f8;
    color: ${({ theme }) => theme.colors.mainColor[6]};
  }
  /* is button disabled true */
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      &:hover {
        cursor: default;
        color: #f8f8f8;
        background-color: ${({ theme }) => theme.colors.mainColor[4]};
      }
    `}
`;

export default function Button({
  children,
  buttonLogic,
  type = 'button',
  width = 5,
  fontSize = 14,
  ...rest
}) {
  return (
    <StyledButton
      width={width}
      fontSize={fontSize}
      onClick={buttonLogic}
      type={type}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
