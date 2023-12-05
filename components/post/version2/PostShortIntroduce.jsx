import styled from 'styled-components';

const StyledPostShortIntroduceArea = styled.div`
  width: 30vw;
  height: 35vw;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 2px;
  border-radius: 10px;
`;

export default function PostShortIntroduce() {
  return (
    <StyledPostShortIntroduceArea>
      <h1>title</h1>
      <div>dfaskdskfakdsflskfd</div>
    </StyledPostShortIntroduceArea>
  );
}
