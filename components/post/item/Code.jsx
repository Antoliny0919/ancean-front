import styled from 'styled-components';
import Highlight from 'react-highlight';
// import { FaRegCopy } from "react-icons/fa";

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
  .content {
    padding-bottom: 1rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  code {
    background-color: ${({ theme }) => theme.colors.post.shallow};
    transition: background-color 0.7s;
  }
`;

const StyledCodeBlockHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.post.deep};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  .mac-web-interface {
    display: flex;
    align-items: center;
    margin: 0 15px;
    width: 10%;
    height: 100%;
    .circle {
      height: 14px;
      width: 14px;
      border-radius: 50%;
    }
    .circle + .circle {
      margin-left: 10px;
    }
    .close {
      background-color: #ff605c;
    }
    .minimise {
      background-color: #ffbd44;
    }
    .maximise {
      background-color: #00ca42;
    }
  }
  .code-language-web {
    height: 80%;
    width: 15%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;
    background-color: ${({ theme }) => theme.colors.post.shallow};
    color: ${({ theme }) => theme.colors.post.deep};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-family: 'Pretendard-Bold';
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export default function Code({ children }) {
  const [language, code] = children.split('<-- [input code language]');
  const className = `${language} content`;

  return (
    <StyledCodeBlock>
      <StyledCodeBlockHeader>
        <div className="mac-web-interface">
          <span className="circle close"></span>
          <span className="circle minimise"></span>
          <span className="circle maximise"></span>
        </div>
        <div className="code-language-web">{language}</div>
        <div className="code-copy"></div>
      </StyledCodeBlockHeader>
      <Highlight className={className}>{code}</Highlight>
    </StyledCodeBlock>
  );
}
