import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import ProgressBar from '../common/ProgressBar';
import SectionHeader from './items/SectionHeader';
import { CATEGORY_DATA } from '../category/data';

const StyledAboutMe = styled.div`
  width: 100%;
  font-size: 18px;
  .my-introduce {
    display: flex;
  }
`;

const StyledMyInfo = styled.div`
  width: 50%;
`;

const StyledMySkill = styled.div`
  font-size: inherit;
  height: 500px;
  font-family: 'Pretendard-Bold';
  width: 50%;
  .swiper {
    width: 70%;
    height: inherit;
    background-color: ${({ theme }) => theme.colors.mainColor[4]};
    border: solid ${({ theme }) => theme.colors.mainColor[4]} 2px;
    border-radius: 10px;
  }
  .swiper-slide {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: center;
    font-size: 24px;
  }
  li {
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 0 1em;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }
`;

const StyledProgressLabel = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  margin-bottom: 0.3em;
  svg {
    width: 1.5em;
    height: 1.5em;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    background: ${(props) => props.color};
  }
`;

export default function AboutMe() {
  const mySkillPercentage = {
    LANGUAGE: [
      {
        name: 'PYTHON',
        percentage: '65%',
      },
      {
        name: 'TYPESCRIPT',
        percentage: '46%',
      },
      {
        name: 'RUST',
        percentage: '23%',
      },
    ],
    INFRASTRUCTURE: [
      {
        name: 'DOCKER',
        percentage: '70%',
      },
      {
        name: 'KUBERNETES',
        percentage: '60%',
      },
      {
        name: 'HELM',
        percentage: '45%',
      },
      {
        name: 'PROMETHEUS',
        percentage: '43%',
      },
      {
        name: 'GRAFANA',
        percentage: '39%',
      },
      {
        name: 'JENKINS',
        percentage: '32%',
      },
    ],
    FRONTEND: [
      {
        name: 'REACT',
        percentage: '67%',
      },
      {
        name: 'SCSS',
        percentage: '62%',
      },
      {
        name: 'REDUX',
        percentage: '55%',
      },
      {
        name: 'NEXT.JS',
        percentage: '53%',
      },
    ],
    BACKEND: [
      {
        name: 'DJANGO',
        percentage: '80%',
      },
      {
        name: 'FLASK',
        percentage: '32%',
      },
    ],
  };

  return (
    <StyledAboutMe>
      <SectionHeader
        mainTitle={'About Me'}
        subTitle={
          '프로그래밍 개발과 희로애락을 함께하는 Antoliny, 이시현입니다.'
        }
        colorHSL={{ hue: 190, saturation: 48, lightness: 59 }}
      ></SectionHeader>
      <div className="my-introduce">
        <StyledMyInfo>
          <div>hello</div>
        </StyledMyInfo>
        <StyledMySkill>
          <Swiper
            onSlideChange={(swiper) => {
              console.log(swiper);
            }}
          >
            {Object.keys(mySkillPercentage).map((name, index) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <ul>{name}</ul>
                    {mySkillPercentage[name].map((skill, index) => {
                      return (
                        <li key={index}>
                          <StyledProgressLabel
                            color={CATEGORY_DATA[skill.name]['color']}
                          >
                            <div className="logo">
                              {CATEGORY_DATA[skill.name]['logo']}
                            </div>
                            <div className="name">{skill.name}</div>
                          </StyledProgressLabel>
                          <ProgressBar
                            percentage={skill.percentage}
                            color={CATEGORY_DATA[skill.name]['color']}
                          />
                        </li>
                      );
                    })}
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </StyledMySkill>
      </div>
    </StyledAboutMe>
  );
}
