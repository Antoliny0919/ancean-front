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
  height: 2.5em;
  width: 2.5em;
  max-width: 600px;
  display: flex;
  font-size: inherit;
  font-family: 'NanumBarunGothic';
  left: 50%;
  transform: translateX(-50%);
  transition: width 1s;
  box-sizing: content-box;
  padding: 1em;
  border-radius: 10px;
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-deep-dark),
    2px 2px 0 0 var(--shadow-outline-deep-dark),
    3px 3px 0 0 var(--shadow-outline-deep-dark),
    4px 4px 0 0 var(--shadow-outline-deep-dark);
  margin: 1em 0em;
  &.odd {
    flex-direction: row-reverse;
    ${(props) =>
      props.$animationState &&
      css`
        animation: ${slideAnimation('left')} 3s 0s 1;
        animation-fill-mode: forwards;
      `}
  }
  &.even {
    ${(props) =>
      props.$animationState &&
      css`
        animation: ${slideAnimation('right')} 3s 0s 1;
        animation-fill-mode: forwards;
      `}
  }
  ${(props) =>
    props.color
      ? css`
          background-color: ${(props) => props.color};
          color: ${({ theme }) => theme.colors.white};
          svg {
            color: ${({ theme }) => theme.colors.white};
          }
        `
      : css`
          background-color: ${({ theme }) => theme.colors.white};
        `}
  svg {
    width: 2.5em;
    height: 2.5em;
  }
  .short-introduce {
    width: 100%;
    display: flex;
    font-size: inherit;
    opacity: 0;
    flex-direction: column;
    justify-content: center;
    transition: width 1s;
    ${(props) =>
      props.$textState &&
      css`
        animation: ${fadeInAnimation} 1s 0s 1;
        animation-fill-mode: forwards;
      `}
    .sub-title {
      @media screen and (min-width: 768px) {
        font-size: 10px;
      }
      @media screen and (min-width: 1024px) {
        font-size: 13px;
      }
      margin-top: 0.5em;
      font-size: 8px;
      color: ${({ theme }) => theme.colors.subTitleBlack};
    }
  }
`;

export default function IntroduceMiniBlock({
  children,
  position,
  animationState,
  title,
  subTitle,
  isOdd,
  color,
}) {
  const [textState, setTextState] = useState(false);

  return (
    <StyledIntroduceMiniBlock
      className={isOdd ? 'odd' : 'even'}
      position={position}
      color={color}
      $animationState={animationState}
      $textState={textState}
      onAnimationEnd={() => setTextState(true)}
    >
      {children}
      <div className="short-introduce">
        <div className="title">{title}</div>
        <div className="sub-title">{subTitle}</div>
      </div>
    </StyledIntroduceMiniBlock>
  );
}
