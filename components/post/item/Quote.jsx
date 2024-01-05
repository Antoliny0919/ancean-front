import styled from 'styled-components';

const StyledQuote = styled.div`
  .ce-block__content {
    margin: 2rem 0;
    .cdx-quote {
      font-family: 'Pretendard-Bold';
      font-size: 20px;
      padding: 0.7rem 0.7rem 0.7rem 1.5rem;
      border-left: solid ${({ theme }) => theme.colors.post[3]} 4px;
      background-color: ${({ theme }) => theme.colors.post[0]};
    }
  }
`;

export default function Quote({ children }) {
  return (
    <StyledQuote>
      <div className="ce-block__content">
        <blockquote className="cdx-quote">
          <div className="cdx-input cdx-quote__text">{children}</div>
        </blockquote>
      </div>
    </StyledQuote>
  );
}
