import { useContext } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { EditorContext } from '../MarkdownEditor';
import { savePost, createPost } from '../modules/editor';

export default function SavePostContainer({
  children,
  is_finish,
  buttonComponent,
}) {
  const router = useRouter();

  const editorRef = useContext(EditorContext);

  const dispatch = useDispatch();

  const { title, selectedCategory } = useSelector(({ editor }) => editor);

  const saveOrCreate = () => {
    const postId = localStorage.getItem('beingWrittenPostId');
    const body = {
      title: title,
      author: 'lululala0919',
      is_finish: is_finish,
      ...(selectedCategory && { category: selectedCategory }),
    };
    if (postId) {
      editorRef.current.save().then((outputData) => {
        dispatch(
          savePost({
            id: postId,
            content: outputData.blocks,
            ...body,
          }),
        ).then(({ payload }) => {
          if (is_finish) {
            let { redirect_path } = payload;
            router.push(redirect_path);
          }
        });
      });
    } else {
      editorRef.current.save().then((outputData) => {
        dispatch(
          createPost({
            content: outputData.blocks,
            ...body,
          }),
        ).then(({ payload }) => {
          if (is_finish) {
            let { redirect_path } = payload;
            router.push(redirect_path);
          }
        });
      });
    }
    // if (is_finish) {
    //   localStorage.removeItem('beingWrittenPostId');
    //   router.push('/posts');
    // }
    // else alert('전송했습니다.');
  };

  // autoSave logic interval(5minute)
  // useInterval(() => saveOrCreate(), 30000);

  return (
    <>
      {buttonComponent({
        children: children,
        props: { onClick: saveOrCreate },
      })}
    </>
  );
}
