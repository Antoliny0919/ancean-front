import Link from 'next/link';
import styled from 'styled-components';
import Wave from 'react-wavify';
import { flexBox } from '@/styles/variable';

export const StyledLogoArea = styled.div`
  ${flexBox.flex('row', 'flex-start')};
  @media screen and (min-width: 768px) {
    font-size: 48px;
    letter-spacing: 7px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 64px;
    letter-spacing: 10px;
  }
  font-size: 32px;
  letter-spacing: 5px;
  h1 {
    font-size: inherit;
    font-family: 'Bodoni Moda';
    font-weight: 100;
    color: #205a82;
    margin: 0;
  }
  .before {
    color: #205a82;
    text-shadow:
      0.5px 0.5px hsl(199, 47%, 26%),
      1px 1px hsl(199, 47%, 23%),
      1.5px 1.5px hsl(199, 47%, 20%),
      2px 2px hsl(199, 47%, 17%);
  }
  .after {
    color: #29beaa;
    text-shadow:
      0.5px 0.5px hsl(172, 65%, 40%),
      1px 1px hsl(172, 65%, 35%),
      1.5px 1.5px hsl(172, 65%, 30%),
      2px 2px hsl(172, 65%, 27%);
  }
  .waterball {
    position: relative;
    width: 1em;
    height: 1em;
    background-color: #29beaa;
    border-radius: 10%;
    margin-right: 10px;
    .wave {
      width: 100%;
      height: 100%;
    }
  }
  svg {
    width: 100%;
    height: 100%;
    border-radius: 10%;
    position: absolute;
    bottom: 0;
  }
`;

export default function Logo({ style = {} }) {
  return (
    <Link href="/">
      <StyledLogoArea style={{ ...style }}>
        <div className="waterball">
          <Wave
            fill={'#27566B'}
            paused={false}
            className="wave"
            options={{
              height: 30,
              amplitude: 3,
              speed: 0.4,
              points: 2,
            }}
          ></Wave>
        </div>
        <h1 className={`before`}>An</h1>
        <h1 className={`after`}>Cean</h1>
      </StyledLogoArea>
    </Link>
  );
}
