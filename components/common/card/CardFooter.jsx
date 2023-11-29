import styled from 'styled-components';
import { FaDocker } from 'react-icons/fa';

const StyledCardFooterArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  border-top: solid rgba(73, 73, 73, 0.2) 0.1rem;
  font-family: 'GmarketSansMedium';
  align-items: center;
  /* background-color: rgba(73, 73, 73, 0.1); */
  padding: 0.5rem 1rem 0.5rem 1rem;
`;
const StyledCategoryArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  color: #2e80a9;
  svg {
    height: 1.5rem;
    width: 100%;
    margin-left: 0.5rem;
  }
`;

export default function CardFooter() {
  return (
    <StyledCardFooterArea>
      <div className="author">작성자: antoliny0919</div>
      <StyledCategoryArea>
        <FaDocker />
      </StyledCategoryArea>
    </StyledCardFooterArea>
  );
}
