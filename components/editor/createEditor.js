import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { initializeEditor } from './EditorJS';
// import useInterval from '../../hooks/useInterval';

export default function createEditor(editorRef) {
  // get content data from redux state editor
  const content = useSelector(({ editor }) => editor.content);

  // create Editor or continueWriting Editor or revise Editor(reasons for received content parameter)
  const initEditor = async () => {
    await initializeEditor({ editorRef, content });
  };

  useEffect(() => {
    initEditor();

    return () => {
      // editorRef.current --> remove already have editor
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
      }
    };
  }, [content]);

  // autoSave logic interval(5minute)
  // useInterval(() => saveOrCreate(), 30000);
}
