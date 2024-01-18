import styled, { css } from 'styled-components';
import { CATEGORY_DATA } from './data';

const StyledCategoryText = styled.div`
  font-family: 'Pretendard-Bold';
  /* font-size: 3vw; */
  &::after {
    content: '${(props) => props.name}';
    position: relative;
    text-shadow: ${(props) => props.shadow};
  }
  &::before {
    content: '${(props) => props.name}';
    position: absolute;
    ${(props) =>
      props.color && props.color.includes('linear-gradient')
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

export default function CategoryText({ name, style = {} }) {
  return (
    <StyledCategoryText
      name={name}
      color={CATEGORY_DATA[name]['color']}
      shadow={CATEGORY_DATA[name]['textShadow']}
      style={{ ...style }}
    />
  );
}
