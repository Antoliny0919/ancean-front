import { useRef } from 'react';
import styled from 'styled-components';
import { CATEGORY_LOGO } from '../categoryLogo';

const StyledCategoryCard = styled.div`
  position: relative;
  display: inline-grid;
  color: white;
  transition: transform 1s;
  transform-style: preserve-3d;
  border-radius: 10px;
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-deep-dark),
    2px 2px 0 0 var(--shadow-outline-deep-dark),
    3px 3px 0 0 var(--shadow-outline-deep-dark),
    4px 4px 0 0 var(--shadow-outline-deep-dark),
    5px 5px 0 0 var(--shadow-outline-deep-dark),
    6px 6px 0 0 var(--shadow-outline-deep-dark);
  & > * {
    grid-area: 1 / 1 / 1 / 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    padding: 10rem 5rem 10rem 5rem;
    font-family: 'Pretendard-Bold';
    font-size: 20px;
    border-radius: 10px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  &:hover {
    cursor: pointer;
  }
  .flip-card-front {
    background: ${(props) => props.color};
    svg {
      margin-bottom: 1rem;
      width: 60%;
      height: 60%;
      color: white;
    }
  }
  .flip-card-back {
    color: black;
    background: ${(props) => props.color};
    transform: rotateY(180deg);
  }
`;

export default function CategoryCard({ name, color }) {
  const target = useRef(null);

  const flipCategoryCard = (e) => {
    e.preventDefault();
    // console.log(target.current.style.transform);
    // if (target.current.style.transform === 'rotateY(180deg) translate(35vw, 0vw)') {
    //   target.current.style.transform = 'rotateY(0deg) translate(0, 0)';
    // } else {
    //   target.current.style.transform = 'rotateY(180deg) translate(35vw, 0vw)';
    // }
  };

  return (
    <StyledCategoryCard color={color} ref={target} onClick={flipCategoryCard}>
      <div className="flip-card-front">
        {CATEGORY_LOGO[name]['logo']}
        <div>{name}</div>
      </div>
      <div className="flip-card-back">
        <div>helloworld</div>
      </div>
    </StyledCategoryCard>
  );
}
