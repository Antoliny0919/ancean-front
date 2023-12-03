import styled from 'styled-components';
import Wave from 'react-wavify';

const StyledBannerArea = styled.div`
  h1 {
    padding-left: 10rem;
    font-size: 64px;
    font-family: 'GmarketSansMedium';
    color: rgb(16, 88, 106);
  }
`;

export default function BannerMain() {
  return (
    <StyledBannerArea>
      <h1>ANCean</h1>
      <h1>MAKE BIG WAVES</h1>
      <Wave
        fill={'#155B82'}
        paused={false}
        style={{ display: 'flex', height: '30vw' }}
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.5,
          points: 2,
        }}
      ></Wave>
    </StyledBannerArea>
  );
}
