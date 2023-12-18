import styled from 'styled-components';
import { useState } from 'react';
import remarkGfm from 'remark-gfm';
import MarkdownEditorTitle from './MarkdownEditorTitle';
import ReactMarkdown from 'react-markdown';
import MARKDOWN from './MarkdownEx.md';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const StyledMarkdownEditorBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  .editor-body {
    width: 50%;
    border: solid blue 2px;
  }
  .editor-preview {
    width: 50%;
    border: solid red 2px;
  }
`;

export default function MarkdownEditor() {
  const [value, setValue] = useState(MARKDOWN);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // useEffect(() => {
  //   fetch(MARKDOWN)
  //   .then((res) => res.text())
  //   .then((md) => {
  //     setValue(md);
  //   })
  // }, [])

  return (
    <>
      <MarkdownEditorTitle />
      <StyledMarkdownEditorBody>
        <textarea
          className="editor-body"
          onChange={onChange}
          value={value}
        ></textarea>
        <ReactMarkdown
          className="editor-preview"
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const { children, className, ...rest } = props;
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  style={dracula}
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
    </>
  );
}
