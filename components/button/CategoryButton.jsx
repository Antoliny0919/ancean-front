import styled from 'styled-components';
import { CATEGORY_DATA } from '../category/data';

const StyledCategoryButton = styled.button`
  font-family: 'GmarketSansMedium';
  background: ${(props) => props.$categoryColor};
  color: white;
  border-radius: 10px;
  opacity: 0.8;
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
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
