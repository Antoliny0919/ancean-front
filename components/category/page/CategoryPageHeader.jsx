import styled, { css } from 'styled-components';
import { CATEGORY_LOGO } from '../categoryLogo';

const StyledCategoryPageHeader = styled.div`
  padding: 3rem 5rem 3rem 5rem;
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
    content: 'PYTHON';
    position: relative;
    text-shadow:
      1px 1px hsl(237, 46%, 52%),
      2px 2px hsl(237, 46%, 52%),
      3px 3px hsl(237, 46%, 48%),
      4px 4px hsl(237, 46%, 44%),
      5px 5px hsl(237, 46%, 40%),
      6px 6px hsl(237, 46%, 36%),
      7px 7px hsl(237, 46%, 32%),
      8px 8px hsl(237, 46%, 28%),
      9px 9px hsl(237, 46%, 24%),
      10px 10px 30px rgba(0, 0, 0, 0.7);
  }
  .name::before {
    content: 'PYTHON';
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

  const { color, logo } = CATEGORY_LOGO[categoryName];

  return (
    <StyledCategoryPageHeader color={color}>
      <div className="logo">{logo}</div>
      <h1 className="name"></h1>
    </StyledCategoryPageHeader>
  );
}
