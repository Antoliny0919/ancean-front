import styled from 'styled-components';
import { CATEGORY_LOGO } from '../categoryLogo';

// const StyledCategoryCard = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 20rem;
//   padding: 10rem 5rem 10rem 5rem;
//   font-size: 20px;
//   font-family: 'Pretendard-Bold';
//   color: white;
//   background: ${(props) => props.color};
//   border-radius: 10px;
//   box-shadow:
//     1px 1px 0 0 var(--shadow-outline-deep-dark),
//     2px 2px 0 0 var(--shadow-outline-deep-dark),
//     3px 3px 0 0 var(--shadow-outline-deep-dark),
//     4px 4px 0 0 var(--shadow-outline-deep-dark),
//     5px 5px 0 0 var(--shadow-outline-deep-dark),
//     6px 6px 0 0 var(--shadow-outline-deep-dark);
//   svg {
//     margin-bottom: 1rem;
//     width: 50%;
//     height: 50%;
//     color: white;
//   }
//   &:hover {
//     transform: rotateY(180deg);
//   }
// `;

const StyledCategoryCard = styled.div`
  display: inline-grid;
  color: white;
  transition: transform 0.8s;
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  border-radius: 10px;
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-deep-dark),
    2px 2px 0 0 var(--shadow-outline-deep-dark),
    3px 3px 0 0 var(--shadow-outline-deep-dark),
    4px 4px 0 0 var(--shadow-outline-deep-dark),
    5px 5px 0 0 var(--shadow-outline-deep-dark),
    6px 6px 0 0 var(--shadow-outline-deep-dark);

  &:hover {
    transform: rotateY(180deg);
  }
  & > * {
    display: absolute;
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
  }
  .card-front {
    background: ${(props) => props.color};
    svg {
      margin-bottom: 1rem;
      width: 60%;
      height: 60%;
      color: white;
    }
  }
  .card-back {
    color: black;
    background: ${(props) => props.color};
    opacity: 0.5;
    transform: rotateY(180deg);
  }
`;

export default function SwiperCategory({ name, color }) {
  return (
    // <StyledCategoryCard color={color}>
    //   {CATEGORY_LOGO[name]['logo']}
    //   <div>{name}</div>
    // </StyledCategoryCard>
    <StyledCategoryCard color={color}>
      <div className="card-front">
        {CATEGORY_LOGO[name]['logo']}
        <div>{name}</div>
      </div>
      <div className="card-back">
        <div>helloworld</div>
      </div>
    </StyledCategoryCard>
  );
}
