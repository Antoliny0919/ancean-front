import client from '../../api/client';
import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { CATEGORY_LOGO } from './categoryLogo';
import Post from '../minipost/style-simple-post/Post';

const StyledCategoryPageArea = styled.div`
  padding: 3rem 5rem;
`;

const StyledCategoryPageHeader = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Pretendard-Bold';
  .logo {
    width: 15%;
    height: 15%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    font-size: 100px;
    margin-left: 2rem;
    letter-spacing: 15px;
    font-weight: 700;
  }
  .name::after {
    content: '${(props) => props.$categoryName}';
    position: relative;
    text-shadow: ${(props) => props.$textShadow};
  }
  .name::before {
    content: '${(props) => props.$categoryName}';
    position: absolute;
    ${(props) =>
      props.color.includes('linear-gradient')
        ? css`
            background: ${(props) => props.color};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `
        : css`
            color: ${(props) => props.color};
          `}
    z-index: 10;
  }
`;

const StyledCategoryPageBody = styled.div`
  .posts-border {
    border-radius: 10px;
    ${(props) =>
      props.color.includes('linear-gradient')
        ? css`
            background: linear-gradient(#fff, #fff), ${(props) => props.color};
            background-origin: border-box;
            background-clip: content-box, border-box;
            border: solid transparent 0.2rem;
          `
        : css`
            border: solid ${(props) => props.color} 0.2rem;
          `}
    box-shadow: ${(props) => props.$boxShadow};
  }
  .posts-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background: ${(props) => props.$transparentColor};
  }
`;

export default function CategoryPage({ posts, name, nextPost }) {
  const [categoryPosts, setCategoryPosts] = useState(posts);

  const [nextPosts, setNextPosts] = useState(nextPost);

  const target = useRef(null);

  const { color, textShadow, transparentColor } =
    CATEGORY_LOGO[name.toUpperCase()];

  const readMorePosts = async () => {
    const response = await client.get(nextPosts);
    const posts = response.data;
    return posts;
  };

  const entries = (entries) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        let { next, results } = await readMorePosts();
        setNextPosts(next);
        setCategoryPosts([...categoryPosts, ...results]);
      }
    });
  };

  useEffect(() => {
    const lastPostObserver = new IntersectionObserver(entries, {
      threshold: 0.5,
    });
    lastPostObserver.observe(target.current);
  }, [categoryPosts, nextPosts]);

  return (
    <StyledCategoryPageArea>
      <StyledCategoryPageHeader
        color={color}
        $textShadow={textShadow}
        $categoryName={name.toUpperCase()}
      >
        <h1 className="name"></h1>
      </StyledCategoryPageHeader>
      <StyledCategoryPageBody
        color={color}
        $transparentColor={transparentColor}
        $boxShadow={textShadow}
      >
        <div className="posts-border">
          <div className="posts-content">
            {categoryPosts.map((post, index) => {
              return (
                <Post
                  key={index}
                  post={post}
                  reference={categoryPosts.length === index + 1 ? target : null}
                />
              );
            })}
          </div>
        </div>
      </StyledCategoryPageBody>
    </StyledCategoryPageArea>
  );
}
