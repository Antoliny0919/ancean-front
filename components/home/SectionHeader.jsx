import styled from 'styled-components';
import SignatureText, { StyledSignatureText } from '../common/SignatureText';
import { flex } from '../../styles/variable';

const StyledSectionHeaderArea = styled.div`
  ${flex('column', 'none', 'center')};
  h5 {
    @media screen and (min-width: 768px) {
      font-size: 16px;
      margin-bottom: 1.5em;
    }
    @media screen and (min-width: 1024px) {
      font-size: 20px;
      margin-bottom: 2em;
    }
    font-size: 12px;
    margin-bottom: 1em;
    margin: 0;
    font-family: 'GmarketSansMedium';
  }
  ${StyledSignatureText} {
    margin-top: 0.7em;
    margin-bottom: 0.3em;
    font-family: 'Raleway';
  }
`;

export default function SectionHeader({
  mainTitle,
  subTitle,
  colorHSL,
  style = {},
}) {
  return (
    <StyledSectionHeaderArea style={{ ...style }}>
      <SignatureText
        fontSize={24}
        colorHSL={colorHSL}
        props={{ className: 'fade-in-slide-down-suspend' }}
      >
        {mainTitle}
      </SignatureText>
      <h5 className="fade-in-slide-down-suspend">{subTitle}</h5>
    </StyledSectionHeaderArea>
  );
}
