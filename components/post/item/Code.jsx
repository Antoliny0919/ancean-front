import { useState } from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import { FaRegCopy } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import { flexBox, codeBlock } from '../../../styles/variable';
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

// const StyledCodeBlockInfo = styled.div`
//   ${flexBox()}
//   border-radius: 5px;
//   padding: 2.5px 8px;

// `

const StyledCodeBlockHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Pretendard-Bold';
  align-items: center;
  width: 100%;
  height: 35px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.post.deep};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0px 15px;
  .header-left-side {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    .mac-web-interface {
      display: flex;
      align-items: center;
      width: 10%;
      height: 100%;
      margin-right: 10px;
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
  }
  .header-right-side {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #f8f8f8;
    svg {
      width: 14px;
      height: 14px;
      margin-right: 5px;
    }
    & > * {
      margin-left: 10px;
    }
    .code-language {
      ${flexBox.flex()};
      ${codeBlock.info('#3AB0CF')};
    }
    .copy-code {
      ${flexBox.flex()};
      ${codeBlock.info('#5196E5')};
      transition:
        color 0.7s,
        background-color 0.7s;
    }
    .copy-code:hover {
      cursor: pointer;
      background-color: #5aa7ff;
    }
  }
`;

export default function Code({ children }) {
  const [copied, setCopied] = useState(false);

  const [language, code] = children.split('#$*');
  const className = `${language} content`;

  const onClickCopyCode = () => {
    window.navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
      })
      .then(() => {
        setTimeout(() => setCopied(false), 3000);
      });
  };

  return (
    <StyledCodeBlock>
      <StyledCodeBlockHeader>
        <div className="header-left-side">
          <div className="mac-web-interface">
            <span className="circle close"></span>
            <span className="circle minimise"></span>
            <span className="circle maximise"></span>
          </div>
        </div>
        <div className="header-right-side">
          <div className="code-language">
            <MdLanguage />
            {language}
          </div>
          <div className="copy-code" onClick={onClickCopyCode}>
            {copied ? (
              <>
                <FaCheck />
                COPIED
              </>
            ) : (
              <>
                <FaRegCopy />
                COPY
              </>
            )}
          </div>
        </div>
      </StyledCodeBlockHeader>
      <Highlight className={className}>{code}</Highlight>
    </StyledCodeBlock>
  );
}
