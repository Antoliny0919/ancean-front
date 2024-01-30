import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const slideAnimation = (direction) => keyframes`
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

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledIntroduceMiniBlock = styled.div`
  position: relative;
  width: 2.5em;
  display: flex;
  font-size: 20px;
  left: 50%;
  transform: translateX(-50%);
  transition: width 1s;
  ${(props) =>
    props.$isOdd
      ? css`
          animation: ${slideAnimation('left')} 3s 0s 1;
          animation-fill-mode: forwards;
          svg {
            position: relative;
          }
        `
      : css`
          animation: ${slideAnimation('right')} 3s 0s 1;
          animation-fill-mode: forwards;
          flex-direction: row-reverse;
        `}
  ${(props) =>
    props.color
      ? css`
          background-color: ${(props) => props.color};
          color: ${({ theme }) => theme.colors.white};
          svg {
            color: white;
          }
        `
      : css`
          background-color: ${({ theme }) => theme.colors.white};
        `}
  box-sizing: content-box;
  padding: 1em;
  border-radius: 10px;
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-deep-dark),
    2px 2px 0 0 var(--shadow-outline-deep-dark),
    3px 3px 0 0 var(--shadow-outline-deep-dark),
    4px 4px 0 0 var(--shadow-outline-deep-dark);
  margin: 0.5em 0em;
  svg {
    width: 2.5em;
    height: 2.5em;
  }
  .short-introduce {
    width: 100%;
    display: flex;
    justify-content: center;
    transition: width 1s;
    ${(props) =>
      props.$textState &&
      css`
        animation: ${fadeInAnimation} 1s 0s 1;
      `}
  }
`;

export default function IntroduceMiniBlock({
  children,
  position,
  isOdd,
  color,
}) {
  const [textState, setTextState] = useState(false);

  return (
    <StyledIntroduceMiniBlock
      position={position}
      color={color}
      $isOdd={isOdd}
      $textState={textState}
      onAnimationEnd={() => setTextState(true)}
    >
      {children}
      {textState && (
        <div className="short-introduce">hello this is my world</div>
      )}
    </StyledIntroduceMiniBlock>
  );
}
