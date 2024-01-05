import styled from 'styled-components';
import Paragraph from './item/Paragraph';
import Header from './item/Header';
import Code from './item/Code';
import Quote from './item/Quote';

const StyledPostContent = styled.div`
  width: 650px;
  position: relative;
  bottom: 220px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Pretendard-Light';
`;

export default function PostContent({ content }) {
  console.log(content);
  console.log(content[0]['data']);

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
    // 'checklist': (data) => console.log(4),
    // 'table': (data) => console.log(5),
    // 'linkTool': (data) => console.log(6),
    // 'warning': (data) => console.log(7),
  };

  return (
    <StyledPostContent>
      {content.map(({ data, type }) => {
        return parser[type](data);
      })}
    </StyledPostContent>
  );
}
