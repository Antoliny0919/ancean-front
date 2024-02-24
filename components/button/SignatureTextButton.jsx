import styled from 'styled-components';
import { shadow } from '@/styles/variable';

const StyledSignatureTextButton = styled.button`
  color: ${(props) => props.color};
  font-size: ${(props) => props.$fontSize}px;
  border: none;
  outline: none;
  background-color: transparent;
  letter-spacing: 2px;
  transition: text-shadow 0.5s;
  font-weight: 700;

  ${(props) => props.$textShadow};
  &:hover {
    cursor: pointer;
    ${(props) => props.$textHoverShadow};
  }
`;

export default function SignatureTextButton({ children, fontSize, hsl }) {
  const { hue, saturation, lightness } = hsl;

  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  const textShadow = shadow.hslShadow({ type: 'text', thickness: 4, hsl: hsl });

  const textHoverShadow = shadow.hslShadow({
    type: 'text',
    thickness: 6,
    hsl: hsl,
  });

  return (
    <StyledSignatureTextButton
      color={color}
      $fontSize={fontSize}
      $textShadow={textShadow}
      $textHoverShadow={textHoverShadow}
    >
      {children}
    </StyledSignatureTextButton>
  );
}
