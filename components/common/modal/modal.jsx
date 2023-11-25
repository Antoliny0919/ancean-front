import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const StyledBackground = styled.div`
  position: absolute;
  width: ${(props) => props.$totalWidth}px;
  height: ${(props) => props.$totalHeight}px;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  width: 400px;
  height: 250px;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 0.2vw;
  border-radius: 10px;
`;

const StyledLogo = styled(Image)`
  width: 50%;
  height: 30%;
`;

export default function Modal({
  disable,
  image,
  title,
  buttonTitle,
  buttonLogic,
}) {
  const [totalWidth, setTotalWidth] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    if (disable) {
      document.body.style = 'overflow: hidden';
      setTotalWidth(window.outerWidth);
      setTotalHeight(window.outerHeight);
    } else {
      document.body.style = 'overflow: none';
    }
  }, [disable]);

  return (
    <>
      {disable && (
        <StyledBackground $totalWidth={totalWidth} $totalHeight={totalHeight}>
          <StyledModal>
            <StyledLogo src={image} alt="no" />
            <div>{title}</div>
            <Button width={7} onClick={buttonLogic}>
              {buttonTitle}
            </Button>
          </StyledModal>
        </StyledBackground>
      )}
    </>
  );
}
