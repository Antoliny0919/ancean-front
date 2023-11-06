import styled, { keyframes, css } from 'styled-components';

const FadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeIn = styled.div`
  display: none;
  ${({ $fadeIn }) =>
    $fadeIn &&
    css`
      display: block;
    `};
  animation-name: ${FadeInAnimation};
  animation-duration: 1s;
`;

export default function FadeInEffect({ children, ...rest }) {
  return <FadeIn {...rest}>{children}</FadeIn>;
}
