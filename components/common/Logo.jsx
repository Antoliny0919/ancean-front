import { Bodoni_Moda } from 'next/font/google';
import styled, { keyframes } from 'styled-components';

const BodoniFont = Bodoni_Moda({
  subsets: ['latin'],
});

const wave = keyframes`
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
`;
const StyledLogoArea = styled.div`
  h1 {
    color: #fff;
    font-size: ${(props) => props.fontsize}px;
    letter-spacing: 5px;
    margin: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    text-shadow:
      1px 1px 0px hsl(205, 52%, 35%),
      2px 2px 0px hsl(205, 52%, 32%),
      3px 3px 0px hsl(205, 52%, 29%),
      4px 4px 0px hsl(205, 52%, 26%),
      5px 5px 0px hsl(205, 52%, 23%);
  }
  h1:nth-child(1) {
    color: transparent;
  }
  h1:nth-child(2) {
    color: #52b8b4;
    animation: ${wave} 3s ease-in-out infinite;
  }
`;

export default function Logo({ fontsize }) {
  return (
    <StyledLogoArea fontsize={fontsize}>
      <h1 className={BodoniFont.className}>ANCean</h1>
      <h1 className={BodoniFont.className}>ANCean</h1>
    </StyledLogoArea>
  );
}
