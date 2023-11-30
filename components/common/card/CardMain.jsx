import styled, { keyframes } from 'styled-components';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-190%);
  }
`;

const slideRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(190%);
  }
`;

const StyledCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 30rem;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 0.1rem;
  border-radius: 10px;
  box-shadow:
    rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px,
    rgba(17, 17, 26, 0.1) 0px 24px 80px;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
  &.start {
    right: 95%;
    opacity: 0.5;
  }
  &.end {
    left: 95%;
    opacity: 0.5;
  }
  &.slide-left {
    animation-name: ${slideLeft};
  }
  &.slide-right {
    animation-name: ${slideRight};
  }
`;

export default function CardMain({ postData, position }) {
  const { header_image, content, title, author } = postData;

  return (
    <StyledCard className={position}>
      <CardHeader header_image={header_image} />
      <CardBody content={content} title={title} />
      <CardFooter author={author} />
    </StyledCard>
  );
}
