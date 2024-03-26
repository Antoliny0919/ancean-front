import { useSelector } from 'react-redux';
import { useContext } from 'react';
import styled from 'styled-components';
import createEditor from './createEditor';
import { EditorContext } from '../../pages/posts/newpost';
import useInterval from '../../hooks/useInterval';
import editorContainer from './editorContainer';

const StyledEditorContent = styled.main`
  padding: 2rem 1rem;
  position: relative;
  z-index: 15;
`;

export default function EditorContent() {
  const accessToken = useSelector(({ auth }) => auth.user.token.access);

  const editorRef = useContext(EditorContext).editorRef;

  // content part is the area of the EditorJS
  createEditor({ editorRef, accessToken });

  const { createOrSave } = editorContainer(editorRef);

  // autoSave logic interval(10minute --> 600000ms)
  useInterval(() => createOrSave(false), 600000);

  return (
    <StyledEditorContent>
      <div id="editorjs"></div>
    </StyledEditorContent>
  );
}
