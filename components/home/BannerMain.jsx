import Image from 'next/image';
import styled from 'styled-components';
// import Wave from 'react-wavify';
import AnceanLogo from '@/public/ancean-logo.png';
import WaveVideo from '@/public/wave-video-ver2.mp4';

const StyledBannerArea = styled.section`
  video {
    position: relative;
  }
  img {
    position: absolute;
    top: 20%;
  }

  h1 {
    position: absolute;
    top: 50%;
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
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        src={WaveVideo}
        style={{ width: '100%', height: '100%' }}
      ></video>
      <Image
        src={AnceanLogo}
        alt="no-img"
        className="banner-content"
        width={900}
        height={160}
      ></Image>
      <h1 className="sub-title banner-content">MAKE BIG WAVES</h1>
      {/* <Wave
        fill={'#155B82'}
        paused={false}
        style={{ display: 'flex', height: '70vh' }}
        options={{
          height: 70,
          amplitude: 50,
          speed: 0.5,
          points: 2,
        }}
      ></Wave> */}
    </StyledBannerArea>
  );
}
