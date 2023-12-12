import styled from 'styled-components';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import { CATEGORY_LOGO } from '@/components/category/categoryLogo';

const StyledPostArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  border-radius: 0.5rem;
  transform: rotateZ(-1deg);
  border: 2px solid var(--offering-outline-color);
  box-shadow:
    1px 1px 0 0 var(--offering-outline-color),
    2px 2px 0 0 var(--offering-outline-color),
    3px 3px 0 0 var(--offering-outline-color),
    4px 4px 0 0 var(--offering-outline-color),
    5px 5px 0 0 var(--offering-outline-color),
    6px 6px 0 0 var(--offering-outline-color);
  transition:
    transform 0.3s ease-out,
    background-color 0.35s,
    box-shadow 0.3s ease-out;
  &:hover {
    transform: rotateZ(0);
    background-color: var(--offering-active-color);
    box-shadow:
      1px 1px 0 0 var(--offering-outline-color),
      2px 2px 0 0 var(--offering-outline-color),
      3px 3px 0 0 var(--offering-outline-color),
      4px 4px 0 0 var(--offering-outline-color),
      5px 5px 0 0 var(--offering-outline-color),
      6px 6px 0 0 var(--offering-outline-color),
      7px 7px 0 0 var(--offering-outline-color),
      8px 8px 0 0 var(--offering-outline-color),
      9px 9px 0 0 var(--offering-outline-color);
  }
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
