import styled, { css } from 'styled-components';
import { CATEGORY_LOGO } from '../categoryLogo';

const StyledCategoryPageHeader = styled.div`
  padding: 3rem 5rem 0rem 5rem;
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

export default function CategoryPageHeader({ name, postCnt }) {
  console.log(postCnt);

  const categoryName = name.toUpperCase();

  console.log(categoryName);

  const { color, textShadow } = CATEGORY_LOGO[categoryName];

  return (
    <StyledCategoryPageHeader
      color={color}
      $textShadow={textShadow}
      $categoryName={categoryName}
    >
      <h1 className="name"></h1>
    </StyledCategoryPageHeader>
  );
}
