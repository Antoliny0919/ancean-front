import { Bodoni_Moda } from 'next/font/google';
import styled from 'styled-components';

const BodoniFont = Bodoni_Moda({
  subsets: ['latin'],
});

const StyledLogoArea = styled.div`
  h1 {
    font-size: ${(props) => props.fontsize}px;
    letter-spacing: 5px;
    color: #205a82;
    margin: 0;
    text-shadow:
      0.25px 0.25px 0 var(--shadow-logo-color),
      0.5px 0.5px 0 var(--shadow-logo-color),
      0.75px 0.75px 0 var(--shadow-logo-color),
      1px 1px 0 var(--shadow-logo-color),
      1.25px 1.25px 0 var(--shadow-logo-color),
      1.5px 1.5px 0 var(--shadow-logo-color),
      1.75px 1.75px 0 var(--shadow-logo-color),
      2px 2px 0 var(--shadow-logo-color),
      2.25px 2.25px 0 var(--shadow-logo-color),
      2.5px 2.5px 0 var(--shadow-logo-color),
      2.75px 2.75px 0 var(--shadow-logo-color),
      3px 3px 0 var(--shadow-logo-color),
      3.25px 3.25px 0 var(--shadow-logo-color),
      3.5px 3.5px 0 var(--shadow-logo-color),
      3.75px 3.75px 0 var(--shadow-logo-color),
      4px 4px 0 var(--shadow-logo-color);
  }
`;

export default function Logo({ fontsize }) {
  return (
    <StyledLogoArea fontsize={fontsize}>
      <h1 className={BodoniFont.className}>AnCean</h1>
    </StyledLogoArea>
  );
}
