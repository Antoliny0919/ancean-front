import styled, { css, keyframes } from 'styled-components';

const spreadSlideAnimation = (direction) => keyframes`
  0% {
    left: 50%;
    transform: translateX(-50%);
    width: 2.5em;
  }
  50% {
    left: ${direction === 'left' ? 0 : 100}%;
    transform: translateX(0%);
    width: 2.5em;
  }
  100% {
    width: 80%;
  }
`;

const StyledSpreadSlideAnimation = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  transition: width 1s;
  &.odd {
    flex-direction: row-reverse;
    ${(props) =>
      props.$animationState &&
      css`
        animation: ${spreadSlideAnimation('left')} 3s 0s 1;
        animation-fill-mode: forwards;
      `}
  }
  &.even {
    ${(props) =>
      props.$animationState &&
      css`
        animation: ${spreadSlideAnimation('right')} 3s 0s 1;
        animation-fill-mode: forwards;
      `}
  }
`;

export default function SpreadSlideAnimation({
  children,
  animationState,
  isOdd,
  props = {},
}) {
  return (
    <StyledSpreadSlideAnimation
      $animationState={animationState}
      className={isOdd ? 'odd' : 'even'}
      {...props}
    >
      {children}
    </StyledSpreadSlideAnimation>
  );
}
