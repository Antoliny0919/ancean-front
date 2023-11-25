import Image from 'next/image';
import styled from 'styled-components';
import Button from '../Button';

const StyledLogo = styled(Image)`
  width: 30%;
  height: 30%;
  background-color: black;
`;

const StyledBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
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

export default function Modal({ image, title, buttonTitle, buttonLogic }) {
  return (
    <StyledBackground>
      <StyledModal>
        <StyledLogo src={image} alt="no"></StyledLogo>
        <div>{title}</div>
        <Button width={7} onClick={buttonLogic}>
          {buttonTitle}
        </Button>
      </StyledModal>
    </StyledBackground>
  );
}
