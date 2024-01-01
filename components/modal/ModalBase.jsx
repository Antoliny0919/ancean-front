import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';

const StyledBackground = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: ${(props) => props.$totalWidth}px;
  height: ${(props) => props.$totalHeight}px;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 10;
`;

const StyledModalBase = styled.div`
  position: fixed;
  width: 30vw;
  aspect-ratio: 1 / 0.7;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 0.2vw;
  border-radius: 10px;
  font-family: 'NanumBarunGothic';
  .close-bar {
    display: flex;
    flex-direction: row-reverse;
    svg {
      width: 20px;
      height: 20px;
      color: #fe4949;
    }
    svg:hover {
      cursor: pointer;
    }
  }
`;

export function closeModal(controlModalState) {
  controlModalState(false);
  document.body.style = 'overflow: none';
}

export default function ModalBase({
  disable,
  controlModalState,
  children,
  styleProps = {},
}) {
  const [totalWidth, setTotalWidth] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    if (disable) {
      document.body.style = 'overflow: hidden';
      setTotalWidth(window.outerWidth);
      setTotalHeight(window.outerHeight);
    }
  }, [disable]);

  return (
    <StyledBackground $totalWidth={totalWidth} $totalHeight={totalHeight}>
      <StyledModalBase style={styleProps}>
        <div className="close-bar">
          <IoIosCloseCircle onClick={() => closeModal(controlModalState)} />
        </div>
        {children}
      </StyledModalBase>
    </StyledBackground>
  );
}
