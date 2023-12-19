import Image from 'next/image';
import styled from 'styled-components';
import { WaveLogo, CommentLogo } from '../../common/Icon';

const StyledPostHeaderArea = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 90%;
    border-top-left-radius: 8px;
  }
`;

const StyledMinibarArea = styled.div`
  font-family: 'SUIT-Regular';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 10%;
  margin-bottom: 1rem;
  .state {
    text-align: center;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${({ theme }) => theme.colors.mainColor[8]};
    }
  }
  .state + .state {
    margin-top: 1rem;
  }
`;

export default function PostHeader({ header_image, wave, categoryColor }) {
  const imageSRC = header_image.replace(
    'http://api-local:8000',
    'http://localhost:5050',
  );

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
      <StyledMinibarArea $categoryColor={categoryColor}>
        <div className="state">
          {WaveLogo}
          <div>{wave}</div>
        </div>
        <div className="state">
          {CommentLogo}
          <div>22</div>
        </div>
      </StyledMinibarArea>
    </StyledPostHeaderArea>
  );
}