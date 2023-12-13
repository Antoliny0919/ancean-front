import styled, { css } from 'styled-components';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import { CATEGORY_LOGO } from '@/components/category/categoryLogo';

const StyledPostArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  border-radius: 0.5rem;
  border: 2px solid var(--shadow-outline-deep-dark);
  background-color: #fcfcfc;
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-deep-dark),
    2px 2px 0 0 var(--shadow-outline-deep-dark),
    3px 3px 0 0 var(--shadow-outline-deep-dark),
    4px 4px 0 0 var(--shadow-outline-deep-dark),
    5px 5px 0 0 var(--shadow-outline-deep-dark),
    6px 6px 0 0 var(--shadow-outline-deep-dark);
  transition:
    transform 0.5s ease-out,
    background-color 0.35s,
    box-shadow 0.5s ease-out;

  ${(props) =>
    props.rotate === 'under-degree'
      ? css`
          transform: rotateZ(-1deg);
        `
      : css`
          transform: rotateZ(1deg);
        `}
  &:hover {
    transform: rotateZ(0deg);
    background-color: white;
    box-shadow:
      1px 1px 0 0 var(--shadow-outline-deep-dark),
      2px 2px 0 0 var(--shadow-outline-deep-dark),
      3px 3px 0 0 var(--shadow-outline-deep-dark),
      4px 4px 0 0 var(--shadow-outline-deep-dark),
      5px 5px 0 0 var(--shadow-outline-deep-dark),
      6px 6px 0 0 var(--shadow-outline-deep-dark),
      7px 7px 0 0 var(--shadow-outline-deep-dark),
      8px 8px 0 0 var(--shadow-outline-deep-dark),
      9px 9px 0 0 var(--shadow-outline-deep-dark);
  }
`;

export default function Post({ postData, rotate }) {
  const { author, category, content, created_at, header_image, title, wave } =
    postData;

  const { logo, color } = CATEGORY_LOGO[category];

  return (
    <StyledPostArea
      $categoryColor={color}
      // className="fade-in-slide-down-suspend"
      rotate={rotate}
    >
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
