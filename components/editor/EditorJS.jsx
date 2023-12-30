export const initializeEditor = async ({ ref, content }) => {
  const EditorJS = (await import('@editorjs/editorjs')).default;
  const Image = (await import('@editorjs/image')).default;
  const Code = (await import('@editorjs/code')).default;
  const Header = (await import('@editorjs/header')).default;
  const InlineCode = (await import('@editorjs/inline-code')).default;
  const Checklist = (await import('@editorjs/checklist')).default;
  const Quote = (await import('@editorjs/quote')).default;
  const Table = (await import('@editorjs/table')).default;
  const Marker = (await import('@editorjs/marker')).default;
  const Warning = (await import('@editorjs/warning')).default;
  const LinkTool = (await import('@editorjs/link')).default;
  ref.current = null;
  if (!ref.current) {
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
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+W',
          config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message',
          },
        },
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: 'http://localhost:5050',
          },
        },
      },
      placeholder: 'Let`s write an awesome story!',
    });
    ref.current = editor;
  }
};
