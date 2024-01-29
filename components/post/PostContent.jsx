import styled from 'styled-components';
import Paragraph from './item/Paragraph';
import Header from './item/Header';
import Code from './item/Code';
import Quote from './item/Quote';
import Warning from './item/Warning';
import ImageTool from './item/ImageTool';
import Link from 'next/link';

const StyledPostContent = styled.div`
  position: relative;
  bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Pretendard-Light';
`;

const StyledMoveQuoteSidebar = styled.div`
  @media screen and (max-width: 1280px) {
    display: none;
  }
  position: sticky;
  font-family: 'NanumBarunGothic';
  top: 100px;
  left: 80%;
  z-index: 10;
  width: 240px;
  /* max-height: calc(100vh - 256px); */
  padding: 1rem 0;
  font-size: 12px;
  border-left: solid ${({ theme }) => theme.colors.mainColor[4]} 3px;
  .move-quote-text {
    margin-left: 10px;
    padding: 0.2rem 0;
    transition:
      transform 0.7s,
      color 0.7s;
    color: #bbbbbb;
  }
  .move-quote-text:hover {
    transform: scale(1.05);
    color: #626262;
  }
`;

export default function PostContent({ content }) {
  const haveContent = Object.keys(content);

  const contentTypes = haveContent.map((index) => {
    let { type } = content[index];
    return type;
  });

  const haveQuote = contentTypes.includes('quote');

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

      console.log(file);
      return <ImageTool url={file.url}></ImageTool>;
    },
  };

  return (
    <>
      {haveQuote && (
        <StyledMoveQuoteSidebar>
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
        </StyledMoveQuoteSidebar>
      )}
      {haveContent.length !== 0 ? (
        <>
          <StyledPostContent>
            {content.map(({ data, type }) => {
              return parser[type](data);
            })}
          </StyledPostContent>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
