import styled from 'styled-components';
import PostHeader from './PostHeader';

const StyledPostArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 300px;
  /* background: ${(props) => props.color}; */
  border: solid ${(props) => props.color} 0.3rem;
  background-origin: border-box;
  /* background-image: ${(props) => props.color}; */
  border-radius: 10px;
  & + & {
    margin-top: 3rem;
  }
`;

export default function Post({ category }) {
  return (
    <StyledPostArea color={category.color}>
      <PostHeader title={category.title} logo={category.logo} />
    </StyledPostArea>
  );
}
