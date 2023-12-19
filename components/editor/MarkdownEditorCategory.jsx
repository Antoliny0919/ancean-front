import styled from 'styled-components';
// import CategoryButton from '../button/CategoryButton';

const StyledCategoryArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-bottom: solid rgba(44, 91, 124, 0.8) 2px;
  & > * {
    padding: 0.5rem;
  }
  input {
    padding: 0.2rem;
  }
  .title {
    font-size: 16px;
    text-align: center;
    font-family: 'NanumBarunGothic';
    margin-right: 0.5rem;
  }
  .categories {
    display: flex;
    width: 60%;
    overflow-x: auto;
  }
`;

export default function MarkdownEditorCategory() {
  return (
    <StyledCategoryArea>
      <div className="title">카테고리를 입력해주세요: </div>
      <input></input>
      {/* <div className="categories">
        {categories.map(({ name }, index) => {
          return <CategoryButton key={index} categoryName={name} />;
        })}
      </div> */}
    </StyledCategoryArea>
  );
}
