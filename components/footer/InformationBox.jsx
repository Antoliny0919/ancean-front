import styled from 'styled-components';
import SignatureText from '../common/SignatureText';

const StyledInformationBox = styled.div`
  height: 100%;
  width: 100%;
  border: solid ${(props) => props.$borderColor} 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function InformationBox({
  children,
  boxTitle,
  fontSize,
  borderColor,
  colorHSL,
  signatureTextProps = {},
  signatureTextStyle = {},
}) {
  return (
    <StyledInformationBox $borderColor={borderColor}>
      <SignatureText
        fontSize={fontSize}
        colorHSL={colorHSL}
        props={{ ...signatureTextProps }}
        color={{ ...signatureTextStyle }}
      >
        {boxTitle}
      </SignatureText>
      {children}
    </StyledInformationBox>
  );
}
