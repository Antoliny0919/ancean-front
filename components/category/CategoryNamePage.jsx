import styled, { css } from 'styled-components';
import Post from '../minipost/style-simple-post/Post';
import ThreeDimensionalButton from '../button/ThreeDimensionalButton';
import { flexBox } from '../../styles/variable';

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
    ${flexBox.flex('column')};
    padding-bottom: 5rem;
    background: ${(props) => props.$transparentColor};
    .sort-button-area {
      width: 100%;
      ${flexBox.flex('row', 'flex-end')};
      padding-right: 2rem;
      padding-top: 1rem;
      margin-bottom: 4rem;
    }
  }
`;

export default function CategoryNamePage({
  categoryPosts,
  target,
  headerProps = {},
  bodyProps = {},
  sortPosts,
}) {
  return (
    <StyledCategoryPageArea>
      <StyledCategoryPageHeader {...headerProps}>
        <h1 className="name"></h1>
      </StyledCategoryPageHeader>
      <StyledCategoryPageBody {...bodyProps}>
        <div className="posts-border">
          <div className="posts-content">
            <div className="sort-button-area">
              <ThreeDimensionalButton
                color={'hsl(208, 60%, 50%)'}
                shadow={'hsl(208, 60%, 30%)'}
                hoverShadow={'hsl(208, 60%, 65%)'}
                props={{ onClick: () => sortPosts('-wave') }}
              >
                인기순
              </ThreeDimensionalButton>
              <ThreeDimensionalButton
                color={'hsl(225, 54%, 53%)'}
                shadow={'hsl(225, 54%, 33%)'}
                hoverShadow={'hsl(225, 54%, 68%)'}
                props={{ onClick: () => sortPosts('-created_at') }}
              >
                최신순
              </ThreeDimensionalButton>
            </div>
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
