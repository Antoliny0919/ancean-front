import styled, { css } from 'styled-components';
import VerticalPaginationPost from '../../post/swiper/VerticalPaginationPost';
import { CATEGORY_LOGO } from '../categoryLogo';

const StyledVerticalPaginationPostArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 300px;
  // border color linear-gradeint or hex code
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
    margin-top: 5rem;
  }
`;

const StyledLabelArea = styled.div`
  position: absolute;
  font-size: 18px;
  pointer-events: none;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  transform: translate(1.5rem, -1.5rem);
  transition: all 0.3s;
  font-family: 'Pretendard-Bold';
  color: white;
  background: ${(props) => props.color};
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 10px;
  z-index: 9;
  svg {
    margin-right: 0.5rem;
  }
`;

export default function VerticalPaginationPostByCategory({
  color,
  name,
  posts,
}) {
  return (
    <StyledVerticalPaginationPostArea
      color={color}
      className="fade-in-slide-down-suspend"
    >
      <StyledLabelArea color={color}>
        {CATEGORY_LOGO[name]['logo']}
        <span>{name}</span>
      </StyledLabelArea>
      <VerticalPaginationPost posts={posts}></VerticalPaginationPost>
    </StyledVerticalPaginationPostArea>
  );
}
