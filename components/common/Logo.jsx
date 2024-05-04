import Link from 'next/link';
import styled from 'styled-components';
import Wave from 'react-wavify';
import { flex } from '@/styles/variable';

export const StyledLogo = styled.div`
  font-size: 4em;
  letter-spacing: 0.05em;
  a {
    ${flex('row', 'flex-start', 'center')};
  }
  h1 {
    font-size: inherit;
    font-family: 'Bodoni Moda';
    font-weight: 100;
    color: #205a82;
    margin: 0;
  }
  h1::after {
    content: 'Cean';
    color: #29beaa;
    text-shadow:
      0.5px 0.5px hsl(172, 65%, 40%),
      1px 1px hsl(172, 65%, 35%),
      1.5px 1.5px hsl(172, 65%, 30%),
      2px 2px hsl(172, 65%, 27%);
  }
  h1::before {
    content: 'An';
    color: #205a82;
    text-shadow:
      0.5px 0.5px hsl(199, 47%, 26%),
      1px 1px hsl(199, 47%, 23%),
      1.5px 1.5px hsl(199, 47%, 20%),
      2px 2px hsl(199, 47%, 17%);
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
    margin-right: 0;
  }
`;

export default function Logo({ waveHeight, wave = true, style = {} }) {
  return (
    <StyledLogo style={{ ...style }}>
      <Link href="/">
        {wave && (
          <div className="waterball">
            <Wave
              fill={'#27566B'}
              paused={false}
              className="wave"
              options={{
                height: waveHeight,
                amplitude: 3,
                speed: 0.4,
                points: 2,
              }}
            ></Wave>
          </div>
        )}
        <h1></h1>
      </Link>
    </StyledLogo>
  );
}
