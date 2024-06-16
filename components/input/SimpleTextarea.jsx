import styled from 'styled-components';
import { flex } from '../../styles/variable';

const StyledSimpleTextarea = styled.div`
  ${flex('column', 'center', 'flex-start')};
  margin: 1.5em;
  width: 20em;
  height: 8em;
  label {
    font-size: 0.8em;
    color: ${({ theme }) => theme.colors.mainColor[7]};
    margin-bottom: 0.5em;
  }

  textarea {
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.colors.mainColor[0]};
    resize: none;
    font-size: 0.7em;
    font-family: inherit;
    border-radius: 5px;
    outline: none;
    background-color: ${({ theme }) => theme.colors.white};
    &:focus {
      border: 3px solid ${({ theme }) => theme.colors.mainColor[4]};
      background-color: ${({ theme }) => theme.colors.lightWhite};
    }
  }
`;

export default function SimpleTextarea({
  labelProps = {},
  textareaProps = {},
}) {
  return (
    <StyledSimpleTextarea>
      <label {...labelProps}></label>
      <textarea {...textareaProps}></textarea>
    </StyledSimpleTextarea>
  );
}
