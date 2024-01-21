import styled from 'styled-components';
import SignatureText from './SignatureText';

const StyledFooterBox = styled.div`
  text-align: center;
`;

export default function FooterBox({
  children,
  boxTitle,
  fontSize,
  colorHSL,
  signatureTextProps = {},
  signatureTextStyle = {},
}) {
  return (
    <StyledFooterBox>
      <SignatureText
        fontSize={fontSize}
        colorHSL={colorHSL}
        props={{ ...signatureTextProps }}
        color={{ ...signatureTextStyle }}
      >
        {boxTitle}
      </SignatureText>
      {children}
    </StyledFooterBox>
  );
}
