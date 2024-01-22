import styled from 'styled-components';

const StyledSignatureText = styled.div`
  font-size: ${(props) => `${props.$fontSize}px`};
  letter-spacing: 5px;
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
