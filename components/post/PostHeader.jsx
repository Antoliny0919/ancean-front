import Image from 'next/image';
import styled from 'styled-components';
import { LuWaves } from 'react-icons/lu';
import { FaRegCommentDots } from 'react-icons/fa';
import { RxEyeOpen } from 'react-icons/rx';

const StyledPostHeaderArea = styled.div`
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

export default function PostHeader({ header_image }) {
  const imageSRC = header_image.replace(
    'http://api-local:8000',
    'http://localhost:5050',
  );
  console.log(imageSRC);

  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <StyledPostHeaderArea>
      <Image
        loader={myLoader}
        src={imageSRC}
        alt="no-img"
        height={250}
        width={200}
      ></Image>
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
    </StyledPostHeaderArea>
  );
}
