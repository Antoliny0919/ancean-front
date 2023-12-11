import styled from 'styled-components';
import { CATEGORY_LOGO } from '@/components/category/categoryLogo';

const StyledPostFooterArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
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
  color: #2e80a9;
  width: 100%;
  svg {
    height: 10%;
    width: 10%;
  }
`;

export default function PostFooter({ author, category }) {
  return (
    <StyledPostFooterArea>
      <div className="author">작성자: {author}</div>
      <StyledCategoryArea>
        <span>카테고리: </span>
        {CATEGORY_LOGO[category]['logo']}
        <span>{category}</span>
      </StyledCategoryArea>
    </StyledPostFooterArea>
  );
}
