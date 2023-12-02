import styled from 'styled-components';

const StyledTestCategory = styled.div`
  height: 500px;
  width: 350px;
  background-color: white;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 0.15rem;
  border-radius: 5px;
`;

export default function SwiperPost({ color }) {
  return <StyledTestCategory color={color}></StyledTestCategory>;
}
