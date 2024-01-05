import styled from 'styled-components';
import Highlight from 'react-highlight';
import '@/node_modules/highlight.js/styles/googlecode.css';

const StyledCodeBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow:
    1px 1px hsl(212, 65%, 35%),
    2px 2px hsl(212, 65%, 32%),
    3px 3px hsl(212, 65%, 29%),
    4px 4px hsl(212, 65%, 26%),
    5px 5px hsl(212, 65%, 23%);
  border-radius: 10px;
  pre {
    margin-top: 0;
  }
  .header {
    width: 100%;
    height: 35px;
    background-color: ${({ theme }) => theme.colors.post[3]};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .content {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  code {
    background-color: ${({ theme }) => theme.colors.post[0]};
    transition: background-color 0.7s;
  }

  code:hover {
    background-color: ${({ theme }) => theme.colors.post[1]};
  }
`;

export default function Code({ children }) {
  return (
    <StyledCodeBlock>
      <div className="header"></div>
      <Highlight className="jsx content">{children}</Highlight>
    </StyledCodeBlock>
  );
}
