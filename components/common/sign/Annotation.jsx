import styled from 'styled-components';

const StyledAnnotation = styled.div`
  font-size: 13px;
  padding-left: 0.3rem;
  .success {
    color: ${({ theme }) => theme.colors.state.success};
  }
  .warning {
    color: ${({theme}) => theme.colors.state.fail};
  }
  .fail {
    color: ${({ theme }) => theme.colors.state.fail};
  }
`;

export default function Annotation({ children, state }) {
  return <StyledAnnotation className={state}>{children}</StyledAnnotation>;
}
