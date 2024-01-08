import styled, { css } from 'styled-components';
import { CATEGORY_LOGO } from '../categoryLogo';
import Post from '../../minipost/style-simple-post/Post';

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

export default function CategoryPage({ posts, name }) {
  const postsToArray = Object.keys(posts).map((key) => posts[key]);

  const { color, textShadow, transparentColor } =
    CATEGORY_LOGO[name.toUpperCase()];

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
            {postsToArray.map((post, index) => {
              return <Post key={index} post={post} />;
            })}
          </div>
        </div>
      </StyledCategoryPageBody>
    </StyledCategoryPageArea>
  );
}
