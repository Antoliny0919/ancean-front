export const initializeEditor = async ({ editorRef, content }) => {
  const EditorJS = (await import('@editorjs/editorjs')).default;
  const Image = (await import('@editorjs/image')).default;
  const Code = (await import('@editorjs/code')).default;
  const Header = (await import('@editorjs/header')).default;
  const InlineCode = (await import('@editorjs/inline-code')).default;
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
        header: {
          class: Header,
          shortcut: 'CMD+SHIFT+H',
        },
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+M',
        },
        image: {
          class: Image,
          config: {
            endpoints: {
              byFile: 'http://localhost:5050/media/docker-container.png', // Your backend file uploader endpoint
            },
          },
        },
        code: Code,
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: "Quote's author",
          },
        },
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        },
      },
      placeholder: 'Let`s write an awesome story!',
    });
    editorRef.current = editor;
  }
};
