import Image from 'next/image';
import styled from 'styled-components';
import Logo from '@/components/common/Logo';
import BannerAstrounautVer2 from '../../public/banner-astronaut-ver2.png';
import OceanWaveButton from '../button/OceanWaveButton';
import { StyledLogoArea } from '@/components/common/Logo';

const StyledBannerArea = styled.section`
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 26px;
  }
  position: relative;
  padding: 0 5rem 0 10rem;
  background-color: ${({ theme }) => theme.colors.mainColor[8]};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'GmarketSansMedium';
  color: #f8f8f8;
  .title {
    flex: 1 1 0%;
    height: 100%;
  }
  .banner-logo {
  }
  .profile {
    display: flex;
    align-items: flex-end;
    height: 100%;
    flex: 1 1 0%;
    img {
      width: 100%;
      height: 45vw;
    }
  }
  .section-link {
    display: flex;
    & > * {
      margin-right: 1em;
    }
  }
  ${StyledLogoArea} {
    @media screen and (min-width: 768px) {
      font-size: 50px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 64px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 80px;
    }
  }
`;

export default function BannerMain({ sections }) {
  return (
    <StyledBannerArea>
      <div className="title">
        <div className="banner-logo">
          Antoliny&#39;s Experience Storage Space
          <Logo />
        </div>
        <div className="section-link">
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
