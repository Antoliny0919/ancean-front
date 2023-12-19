import styled from 'styled-components';

const StyledCommonButton = styled.button`
  font-size: 16px;
  font-family: 'NanumBarunGothic';
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
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

export default function CommonButton({ children, props = {} }) {
  return <StyledCommonButton {...props}>{children}</StyledCommonButton>;
}
