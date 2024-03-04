import { useContext } from 'react';
import styled from 'styled-components';
import createEditor from './createEditor';
import { EditorContext } from '../../pages/posts/newpost';
import useInterval from '../../hooks/useInterval';
import useEditor from './useEditor';

const StyledEditorContent = styled.main`
  padding: 2rem 1rem;
  position: relative;
  z-index: 15;
`;

export default function EditorContent() {
  const editorRef = useContext(EditorContext).editorRef;

  // content part is the area of the EditorJS
  createEditor(editorRef);

  const [create, save] = useEditor(editorRef);

  const saveTemporarily = () => {
    // it is temporarily, so isFinish value is false
    const postId = localStorage.getItem('beingWrittenPostId');
    if (postId) {
      save(postId, false);
    } else {
      create(false);
    }
  };

  // autoSave logic interval(10minute --> 600000ms)
  useInterval(() => saveTemporarily(), 600000);

  return (
    <StyledEditorContent>
      <div id="editorjs"></div>
    </StyledEditorContent>
  );
}
