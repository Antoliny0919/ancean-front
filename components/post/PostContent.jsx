import styled from 'styled-components';
import Paragraph from './item/Paragraph';
import Header from './item/Header';
import Code from './item/Code';
import Quote from './item/Quote';
import Warning from './item/Warning';
import ImageTool from './item/ImageTool';
import { post } from '../../styles/variable';
import Link from 'next/link';

const StyledPostContent = styled.div`
  position: relative;
  bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Pretendard-Light';
`;

const StyledMoveQuote = styled.div`
  position: sticky;
  z-index: 10;
  top: 100px;
  left: 100%;
  width: 240px;
  border-left: solid ${({ theme }) => theme.colors.mainColor[4]} 3px;
  font-size: 12px;
  padding: 1rem 0;
  .move-quote-text {
    margin-left: 10px;
    color: #e7e7e7;
    padding: 0.2rem 0;
    ${post.titleEllipsis()};
  }
`;

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
      <StyledMoveQuote>
        {content.map(({ data, type }, index) => {
          if (type === 'quote') {
            const { text } = data;
            return (
              <div className="move-quote-text" key={index}>
                <Link href={`#${text}`}>{text}</Link>
              </div>
            );
          }
        })}
      </StyledMoveQuote>
      {haveContent.length !== 0 ? (
        <>
          <StyledPostContent>
            {content.map(({ data, type }) => {
              return parser[type](data);
            })}
          </StyledPostContent>
        </>
      ) : (
        <div>no content</div>
      )}
    </>
  );
}
