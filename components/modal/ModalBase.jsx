import { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
`;

export default function ModalBase({ disable, children, style = {} }) {
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
      <StyledModalBase style={style}>{children}</StyledModalBase>
    </StyledBackground>
  );
}
