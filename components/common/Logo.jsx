import { Bodoni_Moda } from 'next/font/google';
import styled from 'styled-components';
import { flexBox } from '@/styles/variable';
import Wave from 'react-wavify';

const BodoniFont = Bodoni_Moda({
  subsets: ['latin'],
});

const StyledLogoArea = styled.div`
  ${flexBox.flex('row', 'flex-start')};
  h1 {
    font-size: ${(props) => props.$fontSize}px;
    letter-spacing: 8px;
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

    .wave {
      width: inherit;
      height: inherit;
    }
  }
  .waterball {
    width: ${(props) => props.$markSize}px;
    height: ${(props) => props.$markSize}px;
    background-color: #29beaa;
    border-radius: 10%;
    box-sizing: content-box;
    margin-right: 10px;
  }
  svg {
    width: ${(props) => props.$markSize}px;
    height: ${(props) => props.$markSize}px;
    border-radius: 10%;
  }
`;

export default function Logo({ fontSize, markSize }) {
  return (
    <StyledLogoArea $fontSize={fontSize} $markSize={markSize}>
      <div className="waterball">
        <Wave
          fill={'#27566B'}
          paused={false}
          className="wave"
          options={{
            height: markSize / 2,
            amplitude: 3,
            speed: 0.4,
            points: 2,
          }}
        ></Wave>
      </div>
      <h1 className={`${BodoniFont.className} before`}>An</h1>
      <h1 className={`${BodoniFont.className} after`}>Cean</h1>
    </StyledLogoArea>
  );
}
