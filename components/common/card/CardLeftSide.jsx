import Image from 'next/image';
import styled from 'styled-components';
import TestImage from '@/public/js-log.png';

const StyledCardLeftSideArea = styled.div`
  width: 50%;
`;

export default function CardLeftSide() {
  return (
    <StyledCardLeftSideArea>
      <Image src={TestImage} alt={'no-image'} width={500} height={500}></Image>
    </StyledCardLeftSideArea>
  );
}
