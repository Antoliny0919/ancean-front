import styled from 'styled-components';

const StyledIntroduceButton = styled.div`
  font-size: 20px;

  svg {
    width: 4em;
    height: 4em;
  }
`;

export default function IntroduceButton() {
  return <StyledIntroduceButton></StyledIntroduceButton>;
}
