import styled from 'styled-components';
import { shadow } from '../../styles/variable';

const StyledPoster = styled.div`
  @media screen and (min-width: 768px) {
    padding: 3rem 0;
  }
  @media screen and (min-width: 1024px) {
    padding: 5rem 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  border: solid ${(props) => props.$borderColor} 0.2rem;
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 10px;
  ${shadow.signatureBoxShadow(4)};
`;

export default function Poster({
  children,
  borderColor,
  backgroundColor,
  props = {},
}) {
  return (
    <StyledPoster
      $borderColor={borderColor}
      $backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledPoster>
  );
}
