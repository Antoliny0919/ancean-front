import styled, { css } from 'styled-components';

const StyledSignInputSet = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin: 1rem 0rem;
`;

const filledText = css`
  color: ${({ theme }) => theme.colors.mainColor[2]};
  font-weight: 900;
  transform: translate(-5rem, 0.5rem);
  padding: 0 0.3rem 0 0.3rem;
  background-color: #fff;
  /* &.success {
    color: ${({ theme }) => theme.colors.state.success};
  }
  &.fail {
    color: ${({ theme }) => theme.colors.state.fail};
  } */
`;

const StyledLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mainColor[9]};
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(0rem, 0.5rem);
  transition: all 0.3s;
  font-weight: 900;
  ${({ $isFilled }) =>
    $isFilled &&
    css`
      ${filledText}
    `}
`;

const StyledInput = styled.input`
  outline: none;
  font-size: 16px;
  width: 10rem;
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}rem;
    `}
  height: 2.5rem;
  border: none;
  border-bottom: solid ${({ theme }) => theme.colors.mainColor[4]} 0.1rem;
  /* &.success {
    border-bottom: solid ${({ theme }) => theme.colors.state.success} 0.15rem;
    background-color: rgba(148, 190, 159, 0.5);
    border-radius: 0.15rem;
  } */
  &:focus {
    border-bottom: solid ${({ theme }) => theme.colors.mainColor[7]} 0.15rem;
  }
  &:focus + label {
    ${filledText}
  }
`;

export default function Input({ value, onChange, inputData, width, ...rest }) {
  const { name, type, placeholder } = inputData;

  return (
    <StyledSignInputSet>
      <StyledInput
        width={width}
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        className={rest.$classState}
        {...rest}
      />
      <StyledLabel className={rest.$classState} $isFilled={value}>
        {placeholder}
      </StyledLabel>
    </StyledSignInputSet>
  );
}
