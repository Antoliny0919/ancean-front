import styled from 'styled-components';
import InformationBox from './InformationBox';
import Logo from '../common/Logo';
import { CATEGORY_DATA } from '../category/data';

const StyledSiteInformationBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-top: 2px solid ${({ theme }) => theme.colors.mainColor[4]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor[4]};
  & > * {
    width: 33.3333333%;
  }
`;

const StyledWithCreater = styled.span`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 700;
  font-size: 45px;
  color: #262626;
  letter-spacing: 3px;
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

export default function SiteInformation() {
  return (
    <StyledSiteInformationBlock>
      <InformationBox
        boxTitle={'site.'}
        fontSize={50}
        colorHSL={{ hue: 182, saturation: 58, lightness: 50 }}
        borderColor={'rgba(54, 197, 201, 0.3)'}
      >
        <Logo
          fontSize={50}
          markSize={40}
          style={{ 'justify-content': 'center' }}
        />
      </InformationBox>
      <InformationBox
        boxTitle={'creator.'}
        fontSize={50}
        colorHSL={{ hue: 205, saturation: 54, lightness: 61 }}
        borderColor={'rgba(102, 165, 209, 0.3)'}
      >
        <StyledWithCreater>
          <i>Antoliny0919</i>
        </StyledWithCreater>
      </InformationBox>
      <InformationBox
        boxTitle={'with.'}
        fontSize={50}
        colorHSL={{ hue: 221, saturation: 54, lightness: 51 }}
        borderColor={'rgba(63, 105, 198, 0.3)'}
      >
        <div>
          <StyledWithStack $backgroundColor={CATEGORY_DATA['DJANGO']['color']}>
            {CATEGORY_DATA['DJANGO']['logo']}
          </StyledWithStack>
          <StyledWithStack $backgroundColor={CATEGORY_DATA['NEXT.JS']['color']}>
            {CATEGORY_DATA['NEXT.JS']['logo']}
          </StyledWithStack>
        </div>
      </InformationBox>
    </StyledSiteInformationBlock>
  );
}
