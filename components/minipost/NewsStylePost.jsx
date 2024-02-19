import Link from 'next/link';
import styled, { css } from 'styled-components';
import PostHeader from './news-style-post/PostHeader';
import PostBody from './news-style-post/PostBody';
import PostFooter from './news-style-post/PostFooter';
import { shadow } from '../../styles/variable';

const StyledPostArea = styled.article`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 25em;
  }
  font-size: 12px;
  width: 20em;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.lightWhite};
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid #273237;
  ${shadow.signatureBoxShadow(6)};
  transition:
    transform 0.5s ease-out,
    background-color 0.35s,
    box-shadow 0.5s ease-out;
  // have rotate attribute tilt the post
  ${(props) =>
    props.rotate && props.rotate === 'under-degree'
      ? css`
          transform: rotateZ(-1deg);
        `
      : css`
          transform: rotateZ(1deg);
        `}
  &:hover {
    transform: rotateZ(0deg);
    background-color: white;
    ${shadow.signatureBoxShadow(9)};
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
