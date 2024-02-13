import { uploadImage } from '../../api/image';

export const initializeEditor = async ({ editorRef, content }) => {
  const EditorJS = (await import('@editorjs/editorjs')).default;
  const Image = (await import('@editorjs/image')).default;
  const CodeTool = (await import('@editorjs/code')).default;
  const Header = (await import('@editorjs/header')).default;
  const InlineCode = (await import('@editorjs/inline-code')).default;
  const Warning = (await import('@editorjs/warning')).default;
  const Quote = (await import('@editorjs/quote')).default;
  const Marker = (await import('@editorjs/marker')).default;
  editorRef.current = null;
  if (!editorRef.current) {
    const editor = new EditorJS({
      holder: 'editorjs',
      data: {
        blocks: content,
      },
      tools: {
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+M',
        },
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: "Quote's author",
          },
        },
        header: {
          class: Header,
          shortcut: 'CMD+SHIFT+H',
        },
        code: {
          class: CodeTool,
          config: {
            placeholder:
              'First, enter the code language you want to use, then enter the "#$*" character and write the code.',
          },
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
          config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message',
          },
        },
        image: {
          class: Image,
          config: {
            uploader: {
              async uploadByFile(file) {
                const formData = new FormData();
                formData.append('file', file);
                const response = await uploadImage({ formData: formData });
                if (response.data.success === 1) {
                  return response.data;
                }
              },
            },
          },
        },
      },
      placeholder: 'Let`s write an awesome story!',
    });
    editorRef.current = editor;
  }
};
