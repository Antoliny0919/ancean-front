import { useContext } from 'react';
import styled from 'styled-components';
import createEditor from './createEditor';
import { EditorContext } from '../../pages/posts/newpost';

const StyledEditorContent = styled.main`
  padding: 2rem 1rem;
  position: relative;
  z-index: 15;
`;

export default function EditorContent() {
  const editorRef = useContext(EditorContext).editorRef;

  // content part is the area of the EditorJS
  createEditor(editorRef);

  // autoSave logic interval(5minute)
  // useInterval(() => saveOrCreate(), 30000);

  return (
    <StyledEditorContent>
      <div id="editorjs"></div>
    </StyledEditorContent>
  );
}
