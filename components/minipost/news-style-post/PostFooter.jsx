import styled from 'styled-components';

const StyledPostFooterArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 13px;
  border-top: solid rgba(73, 73, 73, 0.2) 0.1rem;
  font-family: 'GmarketSansMedium';
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 1rem;
`;
const StyledCategoryArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-left: 2rem;
  width: 60%;
  span {
    margin-right: 0.2rem;
  }
  .category {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
`;

export default function PostFooter({ author, categoryName }) {
  return (
    <StyledPostFooterArea>
      <div className="author">작성자: {author}</div>
      <StyledCategoryArea>
        <span>카테고리: </span>
        <span className="category">{categoryName}</span>
      </StyledCategoryArea>
    </StyledPostFooterArea>
  );
}
