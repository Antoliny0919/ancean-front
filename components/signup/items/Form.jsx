import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  &:last-child {
    margin-top: 2rem;
  }
`;

export default function Form({ children, onSubmit }) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}
