import styled from 'styled-components';

const StyledLabelSlideInput = styled.div`
  font-family: 'SUIT-Regular';
  label {
    position: absolute;
    font-size: inherit;
    color: ${({ theme }) => theme.colors.mainColor[7]};
  }
  input {
    border: none;
    outline: none;
    font-size: inherit;
    width: 20em;
    padding: 0.5em;
    border-bottom: solid ${({ theme }) => theme.colors.mainColor[4]} 0.15em;
  }
  margin-bottom: 1.5rem;
`;

export default function LabelSlideInput({ labelProps = {}, inputProps = {} }) {
  return (
    <StyledLabelSlideInput>
      <label {...labelProps}></label>
      <input {...inputProps}></input>
    </StyledLabelSlideInput>
  );
}
