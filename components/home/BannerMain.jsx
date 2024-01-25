import Image from 'next/image';
import { useContext } from 'react';
import styled from 'styled-components';
import Logo from '@/components/common/Logo';
import { SectionRefContext } from '@/pages';
import BannerAstrounautVer2 from '../../public/banner-astronaut-ver2.png';
import MoveSectionButtonContainer from './container/MoveSectionButtonContainer';
import { StyledLogoArea } from '@/components/common/Logo';
import { StyledOceanWaveButton } from '../button/OceanWaveButton';

const StyledBannerArea = styled.section`
  @media screen and (min-width: 768px) {
    flex-direction: row;
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    padding: 3em 5em 0 5em;
    font-size: 20px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 26px;
    padding: 3em 8em 0 8em;
  }
  height: 100%;
  position: relative;
  padding: 3em 2em 0 2em;
  font-size: 12px;
  height: 650px;
  background-color: ${({ theme }) => theme.colors.mainColor[8]};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'GmarketSansMedium';
  color: #f8f8f8;
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
    font-size: 40px;
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
    font-size: 8px;
  }
`;

const StyledBannerInfo = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1 1 0%;
    height: 100%;
  }
  height: 30%;
  .title-text {
    @media screen and (min-width: 768px) {
      align-items: flex-start;
      height: 80%;
      margin-bottom: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .title-section-link {
    display: flex;
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
  display: flex;
  align-items: flex-end;
  height: 70%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default function BannerMain() {
  const sectionsRef = useContext(SectionRefContext);

  const sections = [
    {
      name: 'About Me',
      rgb: {
        red: 100,
        green: 184,
        blue: 201,
      },
      waveOption: {
        height: 5,
        amplitude: 10,
        speed: 0.3,
        points: 2,
      },
      ref: sectionsRef.aboutMe,
    },
    {
      name: 'Popular Writing',
      rgb: {
        red: 90,
        green: 140,
        blue: 211,
      },
      waveOption: {
        height: 15,
        amplitude: 3,
        speed: 0.5,
        points: 2,
      },
      ref: sectionsRef.popularWriting,
    },
    {
      name: 'Top Categories',
      rgb: {
        red: 19,
        green: 181,
        blue: 185,
      },
      waveOption: {
        height: 7,
        amplitude: 5,
        speed: 0.3,
        points: 2,
      },
      ref: sectionsRef.topCategories,
    },
    {
      name: 'Latest Posts',
      rgb: {
        red: 104,
        green: 111,
        blue: 200,
      },
      waveOption: {
        height: 15,
        amplitude: 1,
        speed: 0.8,
        points: 2,
      },
      ref: sectionsRef.latestPosts,
    },
  ];

  return (
    <StyledBannerArea>
      <StyledBannerInfo>
        <div className="title-text">
          <p>Antoliny&#39;s Experience Storage Space</p>
          <Logo />
        </div>
        <div className="title-section-link">
          {sections.map((section, index) => {
            return (
              // MoveSectionButton used OceanWaveButton Style
              <MoveSectionButtonContainer
                key={index}
                rgb={section.rgb}
                waveOption={section.waveOption}
                reference={section.ref}
              >
                {section.name}
              </MoveSectionButtonContainer>
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
