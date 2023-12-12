import styled, { css } from 'styled-components';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import { CATEGORY_LOGO } from '@/components/category/categoryLogo';

const StyledPostArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  border-radius: 10px;
  ${(props) =>
    props.$categoryColor.includes('linear-gradient')
      ? css`
          background-image: linear-gradient(#fff, #fff),
            ${(props) => props.$categoryColor};
          background-origin: border-box;
          background-clip: content-box, border-box;
          border: solid transparent 0.15rem;
        `
      : css`
          border: solid ${(props) => props.$categoryColor} 0.15rem;
        `}
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 1px rgba(209, 213, 219,1);
`;

export default function Post({ postData }) {
  const { author, category, content, created_at, header_image, title, wave } =
    postData;

  const { logo, color } = CATEGORY_LOGO[category];

  return (
    <StyledPostArea $categoryColor={color}>
      <PostHeader header_image={header_image} wave={wave} categoryLogo={logo} />
      <PostBody content={content} title={title} created_at={created_at} />
      <PostFooter
        author={author}
        categoryName={category}
        categoryColor={color}
      />
    </StyledPostArea>
  );
}
