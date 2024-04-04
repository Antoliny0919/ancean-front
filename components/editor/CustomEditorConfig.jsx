import { useSelector, useDispatch } from 'react-redux';
import EditorJs from 'react-editor-js';
import Image from '@editorjs/image';
import CodeTool from '@editorjs/code';
import Header from '@editorjs/header';
import InlineCode from '@editorjs/inline-code';
import Warning from '@editorjs/warning';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import { forcedChangeValue } from './modules/editor';
import { uploadImage } from '../../api/image';

export default function CustomEditorConfig({ onUploadImage }) {
  const dispatch = useDispatch();

  const { content } = useSelector(({ editor }) => editor);

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
            return onUploadImage(file, uploadImage, false);
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
      instanceRef={(instance) =>
        dispatch(forcedChangeValue({ name: 'instance', value: instance }))
      }
      tools={EDITOR_JS_TOOLS}
      data={content}
      placeholder={`Write from here...`}
    />
  );
}
