import styled from 'styled-components';

const StyledPostContent = styled.div`
  width: 50%;
  position: relative;
  bottom: 230px;
  margin-left: auto;
  margin-right: auto;
  font-size: 9px;
  font-family: 'Pretendard-Light';
`;

export default function PostContent({ content }) {
  console.log(content);

  return (
    <StyledPostContent>
      <h1>한국의 삶</h1>
    </StyledPostContent>
  );
}
