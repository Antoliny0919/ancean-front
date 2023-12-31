import { useSelector } from 'react-redux';
import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { initializeEditor } from './EditorJS';
import MarkdownEditorSave from './MarkdownEditorSave';

const StyledEditorContent = styled.div`
  /* padding: 1rem; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  .ce-code__textarea {
    resize: none;
  }
`;

export default function MarkdownEditorContent() {
  const [isMounted, setIsMounted] = useState(false);

  const content = useSelector(({ editor }) => editor.content);

  const editorRef = useRef();

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

  return (
    <StyledEditorContent>
      <div id="editorjs"></div>
      <MarkdownEditorSave editorRef={editorRef} />
    </StyledEditorContent>
  );
}
