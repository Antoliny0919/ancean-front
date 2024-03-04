import styled from 'styled-components';
import { CATEGORY_DATA } from './data';
import { shadow } from '@/styles/variable';

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
  ${shadow.signatureBoxShadow(3)};
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
