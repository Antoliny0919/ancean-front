import styled from 'styled-components';

const StyledPost = styled.div`
  display: relative;
  background-image: url(${(props) => props.imgUrl});
  background-size: 30vw 35vw;
  border-radius: 10px;
  width: 30vw;
  height: 35vw;
  .post-title {
    display: absolute;
    z-index: 10;
    font-size: 32px;
    color: white;
  }
`;

export default function Post({ data }) {
  return (
    <StyledPost imgUrl={data.image}>
      {/* <div className='post-title'>{data.title}</div> */}
    </StyledPost>
  );
}
