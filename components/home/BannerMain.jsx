import Image from 'next/image';
import styled from 'styled-components';
import BannerImage from '@/public/istock-banner-image.jpg';

const StyledBannerArea = styled.section`
  width: 100%;
  height: 100%;
  .title {
    font-size: 64px;
  }
`;

export default function BannerMain() {
  return (
    <StyledBannerArea>
      <Image src={BannerImage} alt="no-image" style={{ width: '100%' }}></Image>
      <div className="title">Ancean</div>
      <div>개발을 사랑하는 Antoliny의 경험으로 만들어진 바다</div>
    </StyledBannerArea>
  );
}
