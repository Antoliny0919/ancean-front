import Image from 'next/image';
import { useContext } from 'react';
import styled from 'styled-components';
import { SectionRefContext } from '../../pages/index';
import MoveSectionButton from '../button/MoveSectionButton';
import Logo from '../common/Logo';
import OceanWaveButton from '../button/OceanWaveButton';
import BannerAstrounautVer2 from '../../public/banner-astronaut-ver2.png';
import { BANNER_SECTION_BUTTON_DATA } from './data';
import { flex } from '../../styles/variable';

const StyledBannerArea = styled.section`
  @media screen and (min-width: 768px) {
    flex-direction: row;
    font-size: 14px;
  }
  @media screen and (min-width: 1024px) {
    padding: 3em 5em 0 5em;
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 22px;
    padding: 3em 8em 0 8em;
  }
  height: 100%;
  position: relative;
  padding: 3em 2em 0 2em;
  font-size: 10px;
  height: 650px;
  background-color: ${({ theme }) => theme.colors.mainColor[8]};
  ${flex('column', 'none', 'center')}
  font-family: 'GmarketSansMedium';
  color: ${({ theme }) => theme.colors.white};
`;

const StyledBannerInfo = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1 1 0%;
    height: 100%;
  }
  height: 30%;
  .title-text {
    height: 80%;
    font-size: inherit;
    ${flex('column', 'center', 'center')};
  }
  .title-section-link {
    display: flex;
    justify-content: center;
    font-size: inherit;
    & > * {
      margin-right: 1.5em;
    }
  }
`;

const StyledBannerProfile = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1 1 0%;
    height: 100%;
  }
  height: 70%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default function BannerMain() {
  // sectionsRef is used for buttons that can be moved directly to a section
  const sectionsRef = useContext(SectionRefContext);

  return (
    <StyledBannerArea>
      <StyledBannerInfo>
        <div className="title-text">
          <p>Antoliny&#39;s Experience Storage Space</p>
          <Logo />
        </div>
        <div className="title-section-link">
          {Object.keys(BANNER_SECTION_BUTTON_DATA).map((sectionName, index) => {
            return (
              <MoveSectionButton
                key={index}
                buttonComponent={OceanWaveButton}
                reference={sectionsRef[sectionName]}
                rgb={BANNER_SECTION_BUTTON_DATA[sectionName].rgb}
                waveOption={BANNER_SECTION_BUTTON_DATA[sectionName].waveOption}
              >
                {BANNER_SECTION_BUTTON_DATA[sectionName].name}
              </MoveSectionButton>
            );
          })}
        </div>
      </StyledBannerInfo>
      <StyledBannerProfile>
        <Image src={BannerAstrounautVer2} width={0} height={0}></Image>
      </StyledBannerProfile>
    </StyledBannerArea>
  );
}
