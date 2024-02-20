import { useContext } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
// import useInterval from '../../../hooks/useInterval';
import { EditorContext } from '../../../pages/posts/newpost';
import { savePost, createPost } from '../modules/editor';

export default function SavePostContainer({
  children,
  is_finish,
  buttonComponent,
}) {
  const router = useRouter();

  const editorRef = useContext(EditorContext).editorRef;

  const dispatch = useDispatch();

  const { title, selectedCategory, headerImage, introduce } = useSelector(
    ({ editor }) => editor,
  );

  const saveOrCreate = () => {
    const postId = localStorage.getItem('beingWrittenPostId');
    const body = {
      title: title,
      author: 'antoliny0919',
      is_finish: is_finish,
      ...(introduce && { introduce: introduce }),
      ...(headerImage && { header_image: headerImage }),
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
        ).then(async ({ payload }) => {
          if (is_finish) {
            let { redirect_path } = payload;
            router.push(redirect_path);
            editorRef.current.distroy();
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
  };

  // autoSave logic interval(5minute)
  // useInterval(() => saveOrCreate(false), 30000);

  return (
    <>
      {buttonComponent({
        children: children,
        props: title ? { onClick: saveOrCreate } : { disabled: true },
      })}
    </>
  );
}
