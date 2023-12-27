import styled from 'styled-components';

const StyledFontButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.mainColor[4]};
  font-size: 18px;
  font-weight: 900;
  transition: color 0.7s;
  &:hover {
    cursor: pointer;
    color: #28baaf;
  }
`;

export default function FontButton({ children, props = {} }) {
  return <StyledFontButton {...props}>{children}</StyledFontButton>;
}
