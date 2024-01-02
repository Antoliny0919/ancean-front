import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { savePost, createPost } from './modules/editor';
import { initializeEditor } from './EditorJS';
import MarkdownEditorSave from './MarkdownEditorSave';
import NotificationContainer from './container/NotificationContainer';
// import useInterval from '../../hooks/useInterval';

const StyledEditorContent = styled.div`
  /* padding: 1rem; */
  padding-top: 3rem;
  padding-bottom: 3rem;
  position: relative;
  z-index: 50;
  .ce-code__textarea {
    resize: none;
  }
`;

export default function MarkdownEditorContent() {
  const dispatch = useDispatch();

  const [isMounted, setIsMounted] = useState(false);

  const content = useSelector(({ editor }) => editor.content);

  const editorRef = useRef();

  const { title, selectedCategory } = useSelector(({ editor }) => editor);

  const saveOrCreate = () => {
    const postId = localStorage.getItem('beingWrittenPostId');
    console.log(title, selectedCategory);
    const body = {
      title: title,
      author: 'lululala0919',
      is_finish: false,
      ...(selectedCategory && { category: selectedCategory }),
    };
    if (postId) {
      editorRef.current.save().then((outputData) => {
        dispatch(
          savePost({
            id: postId,
            content: outputData.blocks,
            ...body,
          }),
        );
      });
    } else {
      editorRef.current.save().then((outputData) => {
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
      <NotificationContainer />
      <div id="editorjs"></div>
      <MarkdownEditorSave saveLogic={saveOrCreate} />
    </StyledEditorContent>
  );
}
