import styled from 'styled-components';

const StyledPostFooterArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 8px;
  padding: 0.5em 1em 0.5em 1em;
  @media screen and (min-width: 768px) {
    font-size: 13px;
    padding: 0.5em 1em 0.5em 1em;
  }
  border-top: solid rgba(73, 73, 73, 0.2) 0.1em;
  font-family: 'GmarketSansMedium';
  align-items: center;
`;
const StyledCategoryArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  span {
    margin-right: 0.2em;
  }
  .category {
    padding-left: 0.3em;
    padding-right: 0.3em;
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
