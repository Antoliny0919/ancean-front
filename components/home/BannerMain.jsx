import Image from 'next/image';
import styled from 'styled-components';
import Logo from '@/components/common/Logo';
import BannerAstrounautVer2 from '../../public/banner-astronaut-ver2.png';
import OceanWaveButton from '../button/OceanWaveButton';
import { StyledLogoArea } from '@/components/common/Logo';
import { StyledOceanWaveButton } from '../button/OceanWaveButton';

const StyledBannerArea = styled.section`
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    padding: 3em 8em 0 8em;
    font-size: 20px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 26px;
    padding: 3em 10em 0 10em;
  }
  height: 100%;
  position: relative;
  padding: 3em 5em 0 5em;
  height: 650px;
  background-color: ${({ theme }) => theme.colors.mainColor[8]};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'GmarketSansMedium';
  color: #f8f8f8;
  .title {
    flex: 1 1 0%;
    height: 100%;
    .title-text {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .title-section-link {
      display: flex;
      & > * {
        margin-right: 1em;
      }
    }
  }
  .profile {
    display: flex;
    flex: 1 1 0%;
    align-items: flex-end;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  ${StyledLogoArea} {
    @media screen and (min-width: 768px) {
      font-size: 60px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 75px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 95px;
    }
  }
  ${StyledOceanWaveButton} {
    @media screen and (min-width: 768px) {
      font-size: 10px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 12px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 14px;
    }
  }
`;

export default function BannerMain({ sections }) {
  return (
    <StyledBannerArea>
      <div className="title">
        <div className="title-text">
          <p>Antoliny&#39;s Experience Storage Space</p>
          <Logo />
        </div>
        <div className="title-section-link">
          {sections.map((section, index) => {
            return (
              <OceanWaveButton
                key={index}
                waveColor={section.color}
                backgroundColor={section.background}
                waveOption={section.waveOption}
              >
                {section.name}
              </OceanWaveButton>
            );
          })}
        </div>
      </div>
      <div className="profile">
        <Image src={BannerAstrounautVer2} width={0} height={0}></Image>
      </div>
    </StyledBannerArea>
  );
}
