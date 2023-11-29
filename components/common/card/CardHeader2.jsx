import Image from 'next/image';
import styled from 'styled-components';
import TestImage1 from '@/public/call-back-hell.jpeg';
// import TestImage2 from '@/public/js-log.png';
import { LuWaves } from 'react-icons/lu';
import { FaRegCommentDots } from 'react-icons/fa';

const StyledCardHeaderArea = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 90%;
    border-top-left-radius: 8px;
  }
`;

const StyledMinibarArea = styled.div`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  padding: 0.5rem;
  font-family: 'GmarketSansMedium';
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 12px;
  margin-bottom: 1rem;
  svg {
    width: 100%;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.mainColor[4]};
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
      </StyledMinibarArea>
    </StyledCardHeaderArea>
  );
}
