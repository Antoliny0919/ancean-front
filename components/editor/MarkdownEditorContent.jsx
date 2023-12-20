import styled from 'styled-components';
import { useState } from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import MARKDOWN from './MarkdownEx.md';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';

const StyledMarkdownEditorBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  & > * {
    overflow-y: auto;
  }
  .content {
    padding: 0rem 1.5rem 0rem 1.5rem;
  }
  .editor-textarea {
    width: 50%;
    border: none;
    resize: none;
  }
  .editor-textarea:focus {
    outline: none;
  }
  .editor-preview {
    width: 50%;
    background-color: #f0f0f0;
    blockquote {
      margin: 2rem 0px;
      border-left: 4px solid var(--ancean-signature);
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      background: var(--background-shallow);
      padding: 1rem 1rem 1rem 2rem;
      color: black;
    }
    p img {
      display: block;
      margin: 2rem auto;
      max-width: 100%;
    }
    h1 {
      width: 100%;
      height: auto;
    }

    /* pre {
      padding-top: 2rem;
      background-color: red;
    } */
  }
`;

export default function MarkdownEditorContent({ reference }) {
  const [value, setValue] = useState(MARKDOWN);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledMarkdownEditorBody>
      <textarea
        className="editor-textarea content"
        onChange={onChange}
        value={value}
        ref={reference}
      ></textarea>
      <ReactMarkdown
        className="editor-preview content"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code(props) {
            const { children, className, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                {...rest}
                style={a11yDark}
                PreTag="div"
                language={match[1]}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {value}
      </ReactMarkdown>
    </StyledMarkdownEditorBody>
  );
}
