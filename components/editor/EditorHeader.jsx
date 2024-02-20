import styled from 'styled-components';
import TitleContainer from './container/TitleContainer';

const StyledMarkdownHeaderArea = styled.header`
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
  position: relative;
  width: 100%;
  font-size: 16px;
  z-index: 10;
  border-bottom: solid ${({ theme }) => theme.colors.mainColor[4]} 2px;
  & > * {
    padding: 0.5em 1em 0.5em 1em;
  }
`;

export default function EditorHeader() {
  return (
    <StyledMarkdownHeaderArea>
      <TitleContainer />
    </StyledMarkdownHeaderArea>
  );
}
