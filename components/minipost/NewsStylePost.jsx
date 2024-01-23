import styled, { css } from 'styled-components';
import PostHeader from './news-style-post/PostHeader';
import PostBody from './news-style-post/PostBody';
import PostFooter from './news-style-post/PostFooter';
import { post } from '@/styles/variable';
import Link from 'next/link';

const StyledPostArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  border-radius: 0.5rem;
  background-color: #fcfcfc;
  color: #171717;
  ${post.shadowBorder()};
  ${post.shadow()};
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
    ${post.hoverShadow()};
  }
`;

export default function NewsStylePost({ postData, rotate }) {
  const {
    id,
    author,
    category,
    introduce,
    created_at,
    header_image,
    title,
    wave,
  } = postData;

  return (
    <Link href={`/posts/${id}`}>
      <StyledPostArea rotate={rotate}>
        <PostHeader header_image={header_image} wave={wave} />
        <PostBody content={introduce} title={title} created_at={created_at} />
        <PostFooter author={author} categoryName={category} />
      </StyledPostArea>
    </Link>
  );
}
