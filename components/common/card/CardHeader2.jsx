import Image from 'next/image';
import styled from 'styled-components';
import TestImage1 from '@/public/call-back-hell.jpeg';
// import TestImage2 from '@/public/js-log.png';
import { LuWaves } from 'react-icons/lu';
import { FaRegCommentDots } from 'react-icons/fa';
import { RxEyeOpen } from 'react-icons/rx';

const StyledCardHeaderArea = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 90%;
    border-top-left-radius: 8px;
  }
`;

const StyledMinibarArea = styled.div`
  padding: 0.5rem;
  font-family: 'GmarketSansMedium';
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 12px;
  svg {
    width: 100%;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.mainColor[4]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

export default function CardHeader2() {
  return (
    <StyledCardHeaderArea>
      <Image src={TestImage1} alt="no-img" height={250}></Image>
      <StyledMinibarArea>
        <IconWrapper>
          <LuWaves />
          <div>302</div>
        </IconWrapper>
        <IconWrapper>
          <FaRegCommentDots />
          <div>22</div>
        </IconWrapper>
        <IconWrapper>
          <RxEyeOpen />
          <div>132k</div>
        </IconWrapper>
      </StyledMinibarArea>
    </StyledCardHeaderArea>
  );
}
