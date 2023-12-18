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
  height: 77%;
  width: 100%;
  & > * {
    overflow-y: auto;
  }

  .editor-textarea {
    width: 50%;
    border: solid blue 2px;
  }
  .editor-preview {
    width: 50%;
    border: solid red 2px;
  }
`;

export default function MarkdownEditorContent() {
  const [value, setValue] = useState(MARKDOWN);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledMarkdownEditorBody>
      <textarea
        className="editor-textarea"
        onChange={onChange}
        value={value}
      ></textarea>
      <ReactMarkdown
        className="editor-preview"
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
