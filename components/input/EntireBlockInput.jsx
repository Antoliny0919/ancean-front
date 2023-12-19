import styled from 'styled-components';

const StyledBlockInput = styled.input`
  width: inherit;
  font-size: 32px;
  padding: 1rem 0rem 1rem 1rem;
  border: none;
  outline: none;
`;

export default function EntireBlockInput({ ...props }) {
  return <StyledBlockInput type="text" {...props}></StyledBlockInput>;
}
