import styled from 'styled-components';
import FooterBox from './FooterBox';
import { CATEGORY_DATA } from '../category/data';
import Logo from './Logo';

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

const StyledWithCreater = styled.div`
  font-family: 'Bodoni Moda';
  font-weight: 700;
  font-size: 40px;
  color: #262626;
  text-decoration: underline;
  margin-top: 15px;
`;

const StyledWithStack = styled.span`
  svg {
    width: 55px;
    height: 55px;
    padding: 10px;
    background-color: ${(props) => props.$backgroundColor};
    color: white;
    border-radius: 5px;
    margin-top: 15px;
  }
  & + & {
    margin-left: 20px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterBox
        boxTitle={'site.'}
        fontSize={50}
        colorHSL={{ hue: 182, saturation: 58, lightness: 50 }}
      >
        <Logo
          fontSize={50}
          markSize={40}
          style={{ 'justify-content': 'center' }}
        />
      </FooterBox>
      <FooterBox
        boxTitle={'creator.'}
        fontSize={50}
        colorHSL={{ hue: 205, saturation: 54, lightness: 61 }}
      >
        <StyledWithCreater>Antoliny0919</StyledWithCreater>
      </FooterBox>
      <FooterBox
        boxTitle={'with.'}
        fontSize={50}
        colorHSL={{ hue: 221, saturation: 54, lightness: 51 }}
      >
        <StyledWithStack $backgroundColor={CATEGORY_DATA['DJANGO']['color']}>
          {CATEGORY_DATA['DJANGO']['logo']}
        </StyledWithStack>
        <StyledWithStack $backgroundColor={CATEGORY_DATA['NEXT.JS']['color']}>
          {CATEGORY_DATA['NEXT.JS']['logo']}
        </StyledWithStack>
      </FooterBox>
    </StyledFooter>
  );
}
