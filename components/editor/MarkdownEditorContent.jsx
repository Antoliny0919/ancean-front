import { useSelector } from 'react-redux';
import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { initializeEditor } from './EditorJS';

const StyledEditorContent = styled.div`
  padding: 1rem;
  .ce-code__textarea {
    resize: none;
  }
`;

export default function MarkdownEditorContent() {
  const [isMounted, setIsMounted] = useState(false);

  const content = useSelector(({ editor }) => editor.content);

  const ref = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor({ ref, content });
    };
    if (isMounted) {
      console.log('init start');
      init();

      return () => {
        if (ref.current) {
          ref.current.destroy();
        }
      };
    }
  }, [isMounted, content]);

  return (
    <StyledEditorContent>
      <div id="editorjs"></div>
      {/* <StyledFooterButtonArea>
        <CommonButton props={{ onClick: saveOrCreate }}>저장하기</CommonButton>
        <CommonButton>저장된 포스트</CommonButton>
      </StyledFooterButtonArea> */}
    </StyledEditorContent>
  );
}
