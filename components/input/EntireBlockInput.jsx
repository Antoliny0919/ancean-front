import styled from 'styled-components';

const StyledBlockInput = styled.input`
  width: inherit;
  font-size: inherit;
  border: none;
  outline: none;
`;

export default function EntireBlockInput({ props = {}, styleProps = {} }) {
  return (
    <StyledBlockInput
      type="text"
      {...props}
      style={styleProps}
    ></StyledBlockInput>
  );
}
