import styled from 'styled-components';
import SectionHeader from './items/SectionHeader';

const StyledAboutMe = styled.div`
  width: 100%;
  font-size: 16px;
`;

const StyledMyInfo = styled.div``;

const StyledMySkill = styled.div``;

export default function AboutMe() {
  return (
    <StyledAboutMe>
      <SectionHeader
        mainTitle={'About Me'}
        subTitle={'프로그래밍 개발을 사랑하는 Antoliny, 이시현입니다.'}
        colorHSL={{ hue: 190, saturation: 48, lightness: 59 }}
      ></SectionHeader>
      <StyledMyInfo></StyledMyInfo>
      <StyledMySkill></StyledMySkill>
    </StyledAboutMe>
  );
}
