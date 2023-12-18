import styled from 'styled-components';
import { CATEGORY_LOGO } from '../category/categoryLogo';

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
  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  & + & {
    margin-left: 1rem;
  }
`;

export default function CategoryButton({ categoryName }) {
  const categoryColor = CATEGORY_LOGO[categoryName]['color'];

  return (
    <StyledCategoryButton $categoryColor={categoryColor}>
      {categoryName}
    </StyledCategoryButton>
  );
}
