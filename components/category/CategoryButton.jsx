import styled from 'styled-components';
import { CATEGORY_DATA } from './data';

const StyledCategoryButton = styled.button`
  @media screen and (min-width: 768px) {
    font-size: 8px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
  font-size: 6px;
  font-family: 'GmarketSansMedium';
  background: ${(props) => props.$categoryColor};
  color: white;
  border-radius: 10px;
  opacity: 0.8;
  padding: 0.3em 0.5em;
  border: solid var(--shadow-outline-deep-dark) 0.1rem;
  box-shadow:
    0 1px 0 0 var(--shadow-outline-deep-dark),
    0 2px 0 0 var(--shadow-outline-deep-dark),
    0 3px 0 0 var(--shadow-outline-deep-dark);
  transition: opacity 0.7s;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  & + & {
    margin-left: 5rem;
  }
`;

export default function CategoryButton({
  children,
  name,
  props = {},
  style = {},
}) {
  const categoryColor = CATEGORY_DATA[name]['color'];

  return (
    <StyledCategoryButton
      name={name}
      $categoryColor={categoryColor}
      {...props}
      style={style}
    >
      {children}
    </StyledCategoryButton>
  );
}
