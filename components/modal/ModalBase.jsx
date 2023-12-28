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
  height: 40vh;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 0.2vw;
  border-radius: 10px;
  ${(props) =>
    props.style && {
      ...props.style,
    }}
  .close-bar {
    display: flex;
    flex-direction: row-reverse;
    svg {
      width: 20px;
      height: 20px;
      color: #fe4949;
    }
  }
`;

export default function ModalBase({
  disable,
  controlModalState,
  children,
  style = {},
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
    <StyledBackground $totalWidth={totalWidth} $totalHeight={totalHeight}>
      <StyledModalBase style={style}>
        <div className="close-bar">
          <IoIosCloseCircle onClick={() => controlModalState(false)} />
        </div>
        {children}
      </StyledModalBase>
    </StyledBackground>
  );
}
