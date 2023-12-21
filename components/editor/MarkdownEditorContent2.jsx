import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';

const StyledEditorContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  .ce-code__textarea {
    resize: none;
  }
`;

export default function MarkdownEditorContent2() {
  const [isMounted, setIsMounted] = useState(false);

  const ref = useRef();

  const initializeEditor = async () => {
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

    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editorjs',
        data: {
          blocks: [
            {
              id: 'g6_S1HYrl7',
              type: 'paragraph',
              data: { text: 'hello my name is sihyun' },
            },
            {
              id: 'wdhkwO0NRk',
              type: 'paragraph',
              data: { text: 'it is test post with editor js' },
            },
            {
              id: '1kbB7KgskN',
              type: 'paragraph',
              data: {
                text: '<code class="inline-code">npm install @editor/editorjs</code>',
              },
            },
            {
              id: 'm3DGlrWgh1',
              type: 'quote',
              data: {
                text: 'test quote block',
                caption: 'quote author: antoliny0919',
                alignment: 'left',
              },
            },
            {
              id: 'jfolhs19lG',
              type: 'table',
              data: {
                withHeadings: false,
                content: [
                  ['score', 'name', 'graduate'],
                  ['100', 'sihyun', '5'],
                ],
              },
            },
            {
              id: 'pUkM1akpc_',
              type: 'checklist',
              data: { items: [{ text: 'done homework?', checked: true }] },
            },
            {
              id: 'D_2wOBTk9U',
              type: 'warning',
              data: { title: '!!!! Warning', message: 'warning warning' },
            },
            {
              id: 'bwOrrQi7O6',
              type: 'code',
              data: { code: 'code block test' },
            },
            {
              id: '994YDkgCMY',
              type: 'header',
              data: { text: 'Headline', level: 2 },
            },
          ],
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };
    if (isMounted) {
      init();

      return () => {
        if (ref.current) {
          ref.current.destroy();
        }
      };
    }
  }, [isMounted]);

  const save = () => {
    if (ref.current) {
      ref.current.save().then((outputData) => {
        console.log('Article data: ', outputData);
        alert(JSON.stringify(outputData));
      });
    }
  };

  return (
    <StyledEditorContent>
      <div id="editorjs"></div>
      <button onClick={save}>Save</button>
    </StyledEditorContent>
  );
}
