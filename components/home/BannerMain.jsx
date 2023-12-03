import styled from 'styled-components';
import Wave from 'react-wavify';

const StyledBannerArea = styled.section`
  padding-top: 5rem;
  h1 {
    padding-left: 10rem;
    margin: 1rem;
    font-family: 'GmarketSansMedium';
  }
  .main-title {
    font-size: 13vh;
    color: ${({ theme }) => theme.colors.mainColor[0]};
  }
  .sub-title {
    font-size: 8vh;
    color: black;
  }
`;

export default function BannerMain() {
  return (
    <StyledBannerArea>
      <h1 className="main-title">ANCean</h1>
      <h1 className="sub-title">MAKE BIG WAVES</h1>
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
