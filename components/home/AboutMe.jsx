import styled from 'styled-components';
import MySkill from '../skill/MySkill';
import SectionHeader from './items/SectionHeader';
import IntroduceButton from '../introduce/IntroduceButton';

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
          '프로그래밍 개발과 희로애락을 함께하는 Antoliny, 이시현입니다.'
        }
        colorHSL={{ hue: 190, saturation: 48, lightness: 59 }}
      ></SectionHeader>
      <div className="my-introduce">
        <StyledMyInfoSection>
          <IntroduceButton />
        </StyledMyInfoSection>
        <StyledMyInfoSection>
          <MySkill />
        </StyledMyInfoSection>
      </div>
    </StyledAboutMe>
  );
}
