import styled from 'styled-components';
import CardHeader from './CardHeader';

import CardBody from './CardBody';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 0.1rem;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export default function CardMain() {
  return (
    <StyledCard>
      <CardHeader />
      <CardBody />
    </StyledCard>
  );
}
