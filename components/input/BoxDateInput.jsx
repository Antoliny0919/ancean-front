import styled from 'styled-components';
import { flex } from '../../styles/variable';

export const StyledBoxDateInput = styled.div`
  width: 20em;
  background-color: white;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 3px;
  border-radius: 5px;
  font-size: inherit;
  ${flex('row', 'center', 'center')};
  .date-box {
    flex: 1;
    line-height: 2.3em;
  }
  .divide-line::after {
    font-size: inherit;
    content: '/';
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledDateInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: inherit;
`;

export default function BoxDateInput() {
  return (
    <>
      <label>시작일</label>
      <StyledBoxDateInput>
        <div className="date-box">
          <StyledDateInput placeholder="YYYY" maxLength={4}></StyledDateInput>
        </div>
        <span className="divide-line" />
        <div className="date-box">
          <StyledDateInput placeholder="MM" maxLength={2}></StyledDateInput>
        </div>
        <span className="divide-line" />
        <div className="date-box">
          <StyledDateInput placeholder="DD" maxLength={2}></StyledDateInput>
        </div>
      </StyledBoxDateInput>
    </>
  );
}
