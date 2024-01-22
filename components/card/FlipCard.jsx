import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { flexBox } from '../../styles/variable';

const StyledFlipCard = styled.div`
  position: relative;
  display: inline-grid;
  color: white;
  transition: transform 1s;
  transform-style: preserve-3d;
  opacity: 0.5;
  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
    `};
  & > * {
    grid-area: 1 / 1 / 1 / 1;
    ${flexBox.flex()}
    aspect-ratio: 140 / 200;
    font-family: 'Pretendard-Bold';
    font-size: 20px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  &:hover {
    cursor: pointer;
  }
  .flip-card-front {
    width: 100%;
    height: 100%;
  }
  .flip-card-back {
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
  }
`;

export default function FlipCard({
  frontComponent,
  backComponent,
  style = {},
  props = {},
}) {
  const target = useRef(null);

  const flipCategoryCard = () => {
    if (target.current.style.transform === 'rotateY(180deg)') {
      target.current.style.transform = 'rotateY(0deg)';
    } else {
      target.current.style.transform = 'rotateY(180deg)';
    }
  };

  useEffect(() => {
    target.current.style.transform = 'rotateY(0deg)';
  }, [props.isActive]);

  return (
    <StyledFlipCard
      ref={target}
      onClick={flipCategoryCard}
      style={{ ...style }}
      {...props}
    >
      <div className="flip-card-front">{frontComponent}</div>
      <div className="flip-card-back">{backComponent}</div>
    </StyledFlipCard>
  );
}
