import styled from 'styled-components';
import CategoryButton from '../category/CategoryButton';

const StyledCategoryArea = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function MarkdownEditorCategory({ categories }) {
  return (
    <StyledCategoryArea>
      {categories.map(({ name }, index) => {
        return <CategoryButton key={index} categoryName={name} />;
      })}
    </StyledCategoryArea>
  );
}
