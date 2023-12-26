import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import { createPost, savePost } from './modules/editor';
import { initializeEditor } from './EditorJS';

const StyledEditorContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  .ce-code__textarea {
    resize: none;
  }
`;

export default function MarkdownEditorContent() {
  const [isMounted, setIsMounted] = useState(false);

  const ref = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor(ref);
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

  const dispatch = useDispatch();

  const { title, selectedCategory } = useSelector(({ editor }) => editor);

  const save = () => {
    const postId = localStorage.getItem('beingWrittenPostId');
    const body = {
      title: title,
      author: 'lululala0919',
      is_finish: false,
      ...(selectedCategory && { category: selectedCategory }),
    };
    if (postId) {
      ref.current.save().then((outputData) => {
        dispatch(
          savePost({
            postId: postId,
            content: outputData.blocks,
            ...body,
          }),
        );
      });
    } else {
      ref.current.save().then((outputData) => {
        dispatch(
          createPost({
            content: outputData.blocks,
            ...body,
          }),
        );
      });
    }
    alert('전송했습니다.');
  };

  return (
    <StyledEditorContent>
      <div id="editorjs"></div>
      <button onClick={save}>Save</button>
    </StyledEditorContent>
  );
}
