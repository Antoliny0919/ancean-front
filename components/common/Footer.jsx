import styled from 'styled-components';
import FooterBox from './FooterBox';
// import CategoryText from '../category/CategoryText';
// import SignatureText from "./SignatureText";
// import Logo from './Logo';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 0 2rem;
  border-top: 2px solid ${({ theme }) => theme.colors.mainColor[4]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor[4]};
  font-family: 'Pretendard-Bold';
  & > * {
    width: 33%;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterBox
        boxTitle={'site.'}
        fontSize={50}
        colorHSL={{ hue: 182, saturation: 58, lightness: 50 }}
      />
      <FooterBox
        boxTitle={'creator.'}
        fontSize={50}
        colorHSL={{ hue: 205, saturation: 54, lightness: 61 }}
      />
      <FooterBox
        boxTitle={'with.'}
        fontSize={50}
        colorHSL={{ hue: 221, saturation: 54, lightness: 51 }}
      />
    </StyledFooter>
  );
}
