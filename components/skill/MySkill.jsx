import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import SkillProgress from './SkillProgress';
import SwiperButton from '../button/SwiperButton';
import { MY_SKILL_DATA } from './data';

const StyledMySkill = styled.div`
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Pretendard-Bold';
  height: 35em;
  width: 100%;
  .swiper {
    width: 28em;
    height: inherit;
    background-color: ${({ theme }) => theme.colors.mainColor[4]};
    border: solid ${({ theme }) => theme.colors.mainColor[4]} 2px;
    border-radius: 10px;
    box-shadow:
      1px 1px 0 0 var(--shadow-outline-deep-dark),
      2px 2px 0 0 var(--shadow-outline-deep-dark),
      3px 3px 0 0 var(--shadow-outline-deep-dark),
      4px 4px 0 0 var(--shadow-outline-deep-dark),
      5px 5px 0 0 var(--shadow-outline-deep-dark),
      6px 6px 0 0 var(--shadow-outline-deep-dark),
      7px 7px 0 0 var(--shadow-outline-deep-dark),
      8px 8px 0 0 var(--shadow-outline-deep-dark),
      9px 9px 0 0 var(--shadow-outline-deep-dark);
    overflow-y: scroll;
  }
  .swiper-slide {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .skill-section {
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 32px;
    }
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 1em 0;
    font-size: 20px;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.colors.lightWhite};
    text-shadow:
      1px 1px hsl(0, 0%, 14%),
      2px 2px hsl(0, 0%, 12%),
      3px 3px hsl(0, 0%, 10%),
      4px 4px hsl(0, 0%, 8%);
  }
  ul {
    width: 100%;
  }
`;

const StyledSwiperButtonArea = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em 2em;
  z-index: 15;
  bottom: 0;
`;

export default function MySkill() {
  const [slideNumber, setSlideNumber] = useState(0);

  const lastSlideNum = Object.keys(MY_SKILL_DATA).length;

  return (
    <StyledMySkill>
      <Swiper onSlideChange={(slide) => setSlideNumber(slide.activeIndex)}>
        {Object.keys(MY_SKILL_DATA).map((name, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <div className="skill-section">&lt;{name}&#47;&gt;</div>
                <ul>
                  {MY_SKILL_DATA[name].map((skill, index) => {
                    return <SkillProgress key={index} skill={skill} />;
                  })}
                </ul>
              </SwiperSlide>
            </>
          );
        })}
        <StyledSwiperButtonArea>
          <SwiperButton
            color={({ theme }) => theme.colors.white}
            direction="previous"
            currentSlide={slideNumber}
            lastSlideNum={lastSlideNum}
          />
          <SwiperButton
            color={({ theme }) => theme.colors.white}
            direction="next"
            currentSlide={slideNumber}
            lastSlideNum={lastSlideNum - 1}
          />
        </StyledSwiperButtonArea>
      </Swiper>
    </StyledMySkill>
  );
}
