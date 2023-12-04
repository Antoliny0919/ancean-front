import Image from 'next/image';
import styled from 'styled-components';
import Wave from 'react-wavify';
import AnceanLogo from '@/public/ancean-logo.png';

const StyledBannerArea = styled.section`
  padding-top: 5rem;

  h1 {
    margin-top: 1.5rem;
    font-family: 'GmarketSansMedium';
    text-decoration: dotted;
  }
  .banner-content {
    padding-left: 10rem;
  }
  .sub-title {
    font-size: 9vh;
    color: black;
  }
`;

export default function BannerMain() {
  return (
    <StyledBannerArea>
      <Image
        src={AnceanLogo}
        alt="no-img"
        className="banner-content"
        width={900}
        height={160}
      ></Image>
      <h1 className="sub-title banner-content">MAKE BIG WAVES</h1>
      <Wave
        fill={'#155B82'}
        paused={false}
        style={{ display: 'flex', height: '70vh' }}
        options={{
          height: 70,
          amplitude: 50,
          speed: 0.5,
          points: 2,
        }}
      ></Wave>
    </StyledBannerArea>
  );
}
