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
    const startPosition = mdRef.current.selectionStart;
    const endPosition = mdRef.current.selectionEnd;
    // const draggedLength = endPosition - startPosition;

    if (mdRef.current.selectionEnd === mdRef.current.selectionStart) {
      console.log(1);
    } else {
      const beforeText = mdRef.current.value.substring(startPosition, 0);
      const draggedText = mdRef.current.value.substring(
        startPosition,
        endPosition,
      );
      const afterText = mdRef.current.value.substring(endPosition);

      console.log(beforeText, '!!!');
      console.log(draggedText, '@@@');
      console.log(afterText, '%%%');

      mdRef.current.value = beforeText + '*' + draggedText + '*' + afterText;
    }
  };

  return <StyledToolBox onClick={onClick}>{children}</StyledToolBox>;
}
