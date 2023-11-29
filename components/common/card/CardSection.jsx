import styled from 'styled-components';
import CardMain from './CardMain';
import CardSlideButton from './CardSlideButton';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';

const StyledCardArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20rem;
  justify-content: space-around;
`;

export default function CardSection() {
  return (
    <StyledCardArea>
      <CardSlideButton icon={<FaArrowLeftLong />} title={'previous'} />
      <CardMain />
      <CardSlideButton icon={<FaArrowRightLong />} title={'next'} />
    </StyledCardArea>
  );
}
