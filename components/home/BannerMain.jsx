import Image from 'next/image';
import styled from 'styled-components';
import BannerImage from '@/public/banner-image.jpg';
import Logo from '@/components/common/Logo';
import BannerSectionButton from './items/BannerSectionButton';

const StyledBannerArea = styled.section`
  width: 100%;
  height: 100%;
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
      <Image src={BannerImage} alt="no-image" style={{ width: '100%' }}></Image>
      <div className="banner-content">
        <Logo fontsize={100} />
        <p>안톨리니의 경험으로 만들어진 바다에 당신을 초대합니다.</p>
        <StyledHomePageSectionLink>
          {sections.map((section, index) => {
            return <BannerSectionButton key={index} sectionData={section} />;
          })}
        </StyledHomePageSectionLink>
      </div>
    </StyledBannerArea>
  );
}
