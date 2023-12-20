import styled from 'styled-components';

const StyledToolBox = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 0.3rem;
  transition: background-color 0.5s;
  svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: var(--background-shallow);
  }
`;

export default function ToolBase({ children, mdRef }) {
  const onClick = () => {
    // console.log(mdRef.current.selectionEnd == mdRef.current.selectionStart);
    console.log(mdRef);
  };

  return <StyledToolBox onClick={onClick}>{children}</StyledToolBox>;
}
