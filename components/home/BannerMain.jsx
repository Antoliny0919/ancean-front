// import Image from 'next/image';
import Image from '../common/Image';
import styled from 'styled-components';
import BannerImage from '@/public/banner-image.jpg';
import Logo from '@/components/common/Logo';
import MoveSectionButtonContainer from './container/MoveSectionButtonContainer';

const StyledBannerArea = styled.section`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  .banner-content {
    position: relative;
    flex-direction: column;
    width: 50%;
    bottom: 350px;
    left: 10%;
    p {
      margin: 0;
    }
  }
`;

const StyledHomePageSectionLink = styled.div`
  margin-top: 1rem;
`;

export default function BannerMain({ sections }) {
  return (
    <StyledBannerArea>
      <Image src={BannerImage}></Image>
      <div className="banner-content">
        <Logo fontSize={100} markSize={80} />
        <p>안톨리니의 경험으로 만들어진 바다에 당신을 초대합니다.</p>
        <StyledHomePageSectionLink>
          {sections.map((section, index) => {
            return (
              <MoveSectionButtonContainer
                key={index}
                color={section.color}
                shadow={section.shadow}
                hoverShadow={section.hoverShadow}
                reference={section.ref}
              >
                {section.name}
              </MoveSectionButtonContainer>
            );
          })}
        </StyledHomePageSectionLink>
      </div>
    </StyledBannerArea>
  );
}
