import styled from 'styled-components';

const StyledCategoryCard = styled.div`
  .card {
    display: inline-grid;
    color: white;
    transition: transform 0.8s;
    transform: rotateY(0deg);
    transform-style: preserve-3d;
  }
  .card:hover {
    transform: rotateY(180deg);
  }
  .card > * {
    grid-area: 1 / 1 / 1 / 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    padding: 10rem 5rem 10rem 5rem;
    font-family: 'Pretendard-Bold';
    font-size: 20px;
    border-radius: 10px;
    backface-visibility: hidden;
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
  /* .card {
    grid-area: 1 / 1 / 1 / 1;
    color: white;
    backface-visibility: hidden;
  }
  .card-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.color};
    transform: perspective(800px) rotateY(0deg);
  }
  .card-back {
    background: red;
    transform: rotateY(180deg);
  }
  svg {
    margin-bottom: 1rem;
    width: 50%;
    height: 50%;
    color: white;
  }
  &:hover .card{
    transform: perspective(800px) rotateY(180deg);
  } */
`;

export default function SwiperCategory({ logo, title, color }) {
  return (
    <StyledCategoryCard color={color}>
      <div className="card">
        <div className="card-front">
          {logo}
          <div>{title}</div>
        </div>
        <div className="card-back">
          <div>helloworld</div>
        </div>
      </div>
    </StyledCategoryCard>
  );
}
