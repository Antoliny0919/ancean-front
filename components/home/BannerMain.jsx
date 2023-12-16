import Image from 'next/image';
import styled from 'styled-components';
import BannerImage from '@/public/istock-banner-image.jpg';
import Logo from '@/components/common/Logo';

const StyledBannerArea = styled.section`
  width: 100%;
  height: 100%;
  .banner-content {
    position: absolute;
    flex-direction: column;
    width: 30%;
    top: 420px;
    left: 25%;
    /* h3 {
      right: 100px;
      top: 200px;
      font-size: 26px;
      font-weight: 400;
      margin: 0;
    } */
    h3 {
      position: absolute;
    }
  }
`;

export default function BannerMain() {
  return (
    <StyledBannerArea>
      <Image src={BannerImage} alt="no-image" style={{ width: '100%' }}></Image>
      <div className="banner-content">
        {/* <h1 className={BodoniFont.className}>ANCean</h1> */}
        <Logo fontsize={150} />
        <h3>Antoliny Make Big Waves</h3>
      </div>
    </StyledBannerArea>
  );
}
