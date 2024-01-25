import styled from 'styled-components';

export const StyledSignatureText = styled.h1`
  font-size: 24px;
  letter-spacing: 3px;
  @media screen and (min-width: 450px) {
    font-size: 36px;
    letter-spacing: 7px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
    letter-spacing: 10px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 64px;
    letter-spacing: 15px;
  }
  font-family: 'Pretendard-Bold';
  text-transform: uppercase;
  color: ${(props) => props.$fontColor};
  text-shadow: ${(props) => props.$textShadow};
`;

export default function SignatureText({
  children,
  fontSize,
  props = {},
  style = {},
  colorHSL = {},
}) {
  const shadowSize = fontSize * 0.01;

  const { hue, saturation, lightness } = colorHSL;

  const lightnessDecrease = lightness * 0.08;

  const fontColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  let textShadow = ``;
  for (let step = 1; step <= 10; step++) {
    if (step === 10) {
      textShadow += `${shadowSize * step}px ${shadowSize * step}px ${
        shadowSize * step * 3
      }px rgba(0,0,0,.7);`;
    }
    textShadow += `${shadowSize * step}px ${
      shadowSize * step
    }px hsl(${hue}, ${saturation}%, ${lightness - lightnessDecrease * step}%),`;
  }

  return (
    <StyledSignatureText
      $colorHSL={colorHSL}
      $fontSize={fontSize}
      $fontColor={fontColor}
      $textShadow={textShadow}
      {...props}
      style={{ ...style }}
    >
      {children}
    </StyledSignatureText>
  );
}
