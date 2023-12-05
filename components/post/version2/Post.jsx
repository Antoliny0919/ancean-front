import styled from 'styled-components';

const StyledPost = styled.div`
  display: relative;
  background-image: url(${(props) => props.$imgUrl});
  background-size: 30vw 35vw;
  border-radius: 10px;
  width: 30vw;
  height: 35vw;
  &:hover {
    opacity: 0.5;
  }
`;

export default function Post({ data }) {
  return <StyledPost $imgUrl={data.image}></StyledPost>;
}
