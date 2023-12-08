import styled, { css } from 'styled-components';
import PostHeader from './PostHeader';

const StyledPostArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 300px;
  ${(props) =>
    props.color.includes('linear-gradient')
      ? css`
          background-image: linear-gradient(#fff, #fff),
            ${(props) => props.color};
          background-origin: border-box;
          background-clip: content-box, border-box;
          border: solid transparent 0.3rem;
        `
      : css`
          border: solid ${(props) => props.color} 0.3rem;
        `}
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
