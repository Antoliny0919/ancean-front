import styled from 'styled-components';
import MySkill from '../skill/MySkill';
import HomeSectionHeader from './HomeSectionHeader';
import MyIntroduce from '../introduce/MyIntroduce';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const StyledAboutMe = styled.div`
  width: 100%;
  font-size: 18px;
  padding-bottom: 5em;
  .my-introduce {
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const StyledMyInfoSection = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export default function AboutMe() {
  return (
    <StyledAboutMe>
      <HomeSectionHeader
        mainTitle={'About Me'}
        subTitle={
          '프로그래밍 개발과 희로애락을 함께하는 이시현, Antoliny입니다.'
        }
        colorHSL={{ hue: 190, saturation: 48, lightness: 59 }}
      ></HomeSectionHeader>
      <div className="my-introduce">
        <StyledMyInfoSection>
          <MyIntroduce />
        </StyledMyInfoSection>
        <StyledMyInfoSection>
          <MySkill />
        </StyledMyInfoSection>
      </div>
    </StyledAboutMe>
  );
}
