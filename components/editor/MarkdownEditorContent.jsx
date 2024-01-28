import { useSelector } from 'react-redux';
import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { EditorContext } from './MarkdownEditor';
import { initializeEditor } from './EditorJS';

const StyledEditorContent = styled.div`
  /* padding: 1rem; */
  padding-top: 3rem;
  padding-bottom: 3rem;
  position: relative;
  z-index: 15;
  .ce-code__textarea {
    resize: none;
  }
`;

export default function MarkdownEditorContent() {
  const [isMounted, setIsMounted] = useState(false);

  const content = useSelector(({ editor }) => editor.content);

  const editorRef = useContext(EditorContext).editorRef;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor({ editorRef, content });
    };
    if (isMounted) {
      init();

      return () => {
        if (editorRef.current) {
          editorRef.current.destroy();
        }
      };
    }
  }, [isMounted, content]);

  // autoSave logic interval(5minute)
  // useInterval(() => saveOrCreate(), 30000);

  return (
    <StyledEditorContent>
      <div id="editorjs"></div>
    </StyledEditorContent>
  );
}
