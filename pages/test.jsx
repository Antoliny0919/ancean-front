import dynamic from 'next/dynamic';
import { useState } from 'react';

const EditorBlock = dynamic(() => import('../components/editor/TestEditor'), {
  ssr: false,
});

export default function Test() {
  const [data, setData] = useState();

  return (
    <EditorBlock data={data} onChange={setData} holder="editorjs-container" />
  );
}
