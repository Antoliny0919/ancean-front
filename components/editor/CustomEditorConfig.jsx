import EditorJs from 'react-editor-js';
import Image from '@editorjs/image';
import CodeTool from '@editorjs/code';
import Header from '@editorjs/header';
import InlineCode from '@editorjs/inline-code';
import Warning from '@editorjs/warning';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import { useSelector } from 'react-redux';

import { uploadImage } from '../../api/image';

export default function CustomEditorConfig({ handleInstance }) {
  const content = useSelector(({ editor }) => editor.content);

  const accessToken = useSelector(({ auth }) => auth.user.token.access);

  const headers = { Authorization: `Bearer ${accessToken}` };

  const EDITOR_JS_TOOLS = {
    header: Header,
    code: CodeTool,
    warning: Warning,
    marker: Marker,
    image: {
      class: Image,
      config: {
        uploader: {
          async uploadByFile(file) {
            const formData = new FormData();
            formData.append('file', file);
            const postId = localStorage.getItem('beingWrittenPostId');
            formData.append('id', postId);
            try {
              const response = await uploadImage({ formData, headers });
              return response.data;
            } catch (err) {
              const errorMessage = err.response.data.detail;
              alert(errorMessage);
            }
          },
        },
      },
    },
    quote: Quote,
    inlineCode: InlineCode,
  };

  // Editor.js This will show block editor in component
  // pass EDITOR_JS_TOOLS in tools props to configure tools with editor.js
  return (
    <EditorJs
      instanceRef={(instance) => handleInstance(instance)}
      tools={EDITOR_JS_TOOLS}
      data={content}
      placeholder={`Write from here...`}
    />
  );
}
