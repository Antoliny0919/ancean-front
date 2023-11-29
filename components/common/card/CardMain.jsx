import styled from 'styled-components';
import CardLeftSide from './CardLeftSide';
import CardRightSide from './CardRightSide';

const StyledCard = styled.div`
  width: 30rem;
  background-color: black;
`;

export default function CardMain() {
  return (
    <StyledCard>
      <CardLeftSide />
      <CardRightSide />
    </StyledCard>
  );
}
