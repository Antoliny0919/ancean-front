import { useRef } from 'react';
import styled from 'styled-components';
import { flexBox } from '../../styles/variable';

const StyledFlipCard = styled.div`
  position: relative;
  display: inline-grid;
  color: white;
  transition: transform 1s;
  transform-style: preserve-3d;
  & > * {
    grid-area: 1 / 1 / 1 / 1;
    ${flexBox.flex()}
    height: 60vh;
    aspect-ratio: 100 / 140;
    font-family: 'Pretendard-Bold';
    font-size: 20px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  &:hover {
    cursor: pointer;
  }
  .flip-card-front {
  }
  .flip-card-back {
    transform: rotateY(180deg);
  }
`;

export default function FlipCard({
  frontComponent,
  backComponent,
  cardStyle = {},
}) {
  const target = useRef(null);

  const flipCategoryCard = (e) => {
    e.preventDefault();
    if (target.current.style.transform === 'rotateY(180deg)') {
      target.current.style.transform = 'rotateY(0deg)';
    } else {
      target.current.style.transform = 'rotateY(180deg)';
    }
  };

  return (
    <StyledFlipCard
      ref={target}
      onClick={flipCategoryCard}
      style={{ ...cardStyle }}
    >
      <div className="flip-card-front">{frontComponent}</div>
      <div className="flip-card-back">{backComponent}</div>
    </StyledFlipCard>
  );
}
