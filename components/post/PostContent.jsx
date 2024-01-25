import styled from 'styled-components';
import Paragraph from './item/Paragraph';
import Header from './item/Header';
import Code from './item/Code';
import Quote from './item/Quote';
import Warning from './item/Warning';
import ImageTool from './item/ImageTool';

const StyledPostContent = styled.div`
  position: relative;
  bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Pretendard-Light';
`;

const StyledMoveQuote = styled.div``;

export default function PostContent({ content }) {
  const haveContent = Object.keys(content);

  const parser = {
    paragraph: (data) => {
      let { text } = data;
      return <Paragraph>{text}</Paragraph>;
    },
    header: (data) => {
      let { text, level } = data;
      return <Header level={level}>{text}</Header>;
    },
    code: (data) => {
      let { code } = data;
      return <Code>{code}</Code>;
    },
    quote: (data) => {
      const { text } = data;
      return <Quote>{text}</Quote>;
    },
    warning: (data) => {
      const { message, title } = data;
      return <Warning message={message} title={title}></Warning>;
    },
    image: (data) => {
      const { file } = data;

      return <ImageTool url={file.url}></ImageTool>;
    },
  };

  return (
    <>
      {haveContent.length !== 0 ? (
        <>
          <StyledPostContent>
            {content.map(({ data, type }) => {
              return parser[type](data);
            })}
            <StyledMoveQuote>hello</StyledMoveQuote>
          </StyledPostContent>
        </>
      ) : (
        <div>no content</div>
      )}
    </>
  );
}
