import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { initializeEditor } from './EditorJS';

export default function createEditor({ editorRef, accessToken }) {
  // get content data from redux state editor
  const content = useSelector(({ editor }) => editor.content);

  // create Editor or continueWriting Editor or revise Editor(reasons for received content parameter)
  const initEditor = async ({ content, editorRef, headers }) => {
    await initializeEditor({ content, editorRef, headers });
  };

  useEffect(() => {
    const headers = { Authorization: `Bearer ${accessToken}` };

    accessToken && initEditor({ content, editorRef, headers });
    if (editorRef === undefined) {
      editorRef.current = null;
    }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
      }
    };
  }, [accessToken, content]);
}
