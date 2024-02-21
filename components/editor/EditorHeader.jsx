import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from './modules/editor';
import styled from 'styled-components';

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
  input {
    width: inherit;
    font-size: inherit;
    border: none;
    outline: none;
  }
  & > * {
    padding: 0.5em 1em 0.5em 1em;
  }
`;

export default function EditorHeader() {
  const value = useSelector(({ editor }) => editor.title);

  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeValue(e));
  };

  return (
    <StyledMarkdownHeaderArea>
      {/* EditorHeader have post title input area */}
      <input
        type="text"
        placeholder="제목을 입력해주세요.."
        name="title"
        value={value}
        onChange={onChange}
      ></input>
    </StyledMarkdownHeaderArea>
  );
}
