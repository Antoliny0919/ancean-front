import { useDispatch, useSelector } from 'react-redux';
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
import { useEffect } from 'react';

export default function CustomEditorConfig({ onUploadImage, data }) {
  const dispatch = useDispatch();

  const TOOLS = {
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

  const { instance } = useSelector(({ editor }) => editor);

  useEffect(() => {
    if (instance && Object.hasOwn(instance, 'render')) {
      instance.render({ blocks: data });
    }
    return () => {
      instance && instance.destroy;
    };
  }, [data]);

  return (
    <EditorJs
      instanceRef={(instance) =>
        dispatch(forcedChangeValue({ name: 'instance', value: instance }))
      }
      tools={TOOLS}
      data={{ blocks: data }}
      placeholder={'포스트 작성...'}
    />
  );
}
