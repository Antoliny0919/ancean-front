import styled from 'styled-components';
import MySkill from '../skill/MySkill';
import SectionHeader from './items/SectionHeader';
import MyIntroduce from '../introduce/MyIntroduce';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const StyledAboutMe = styled.div`
  width: 100%;
  font-size: 18px;
  .my-introduce {
    display: flex;
  }
`;

const StyledMyInfoSection = styled.div`
  width: 50%;
`;

export default function AboutMe() {
  return (
    <StyledAboutMe>
      <SectionHeader
        mainTitle={'About Me'}
        subTitle={
          '프로그래밍 개발과 희로애락을 함께하는 이시현, Antoliny입니다.'
        }
        colorHSL={{ hue: 190, saturation: 48, lightness: 59 }}
      ></SectionHeader>
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
