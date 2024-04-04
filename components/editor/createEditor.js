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
    // if (editorRef === undefined) {
    //   editorRef.current = null;
    // }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        // 이 부분이 호출이 되지 않으면 자꾸 여러개의 에디터가 생성된다.

        editorRef.current.destroy();
      }
    };
  }, [accessToken, content]);
}
