import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';

const StyledEditorContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export default function MarkdownEditorContent2() {
  const [isMounted, setIsMounted] = useState(false);

  const ref = useRef();

  const initializeEditor = async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default;
    const Image = (await import('@editorjs/image')).default;
    const Code = (await import('@editorjs/code')).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editorjs',
        tools: {
          image: Image,
          code: Code,
        },
      });
      ref.current = editor;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };
    if (isMounted) {
      init();

      return () => {
        if (ref.current) {
          ref.current.destroy();
        }
      };
    }
  }, [isMounted]);

  const save = () => {
    if (ref.current) {
      ref.current.save().then((outputData) => {
        console.log('Article data: ', outputData);
        alert(JSON.stringify(outputData));
      });
    }
  };

  return (
    <StyledEditorContent>
      <div id="editorjs">
        <button onClick={save}>Save</button>
      </div>
    </StyledEditorContent>
  );
}
