import styled from 'styled-components';

export const StyledCommonButton = styled.button`
  font-size: 16px;
  font-family: 'NanumBarunGothic';
  padding: 0.7em 1em 0.7em 1em;
  border-radius: 5px;
  outline: none;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 2px;
  background-color: ${({ theme }) => theme.colors.mainColor[6]};
  transition:
    color 0.7s,
    background-color 0.7s;
  color: white;
  &:hover {
    color: black;
    background-color: white;
  }
`;

export default function CommonButton({
  children,
  props = {},
  styleProps = {},
}) {
  return (
    <StyledCommonButton style={styleProps} {...props}>
      {children}
    </StyledCommonButton>
  );
}
