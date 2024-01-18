import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditorContext } from '../MarkdownEditor';
import FontButton from '../../button/FontButton';
import { savePost, createPost } from '../modules/editor';

export default function SavePostContainer({ children }) {
  const editorRef = useContext(EditorContext);

  const dispatch = useDispatch();

  const { title, selectedCategory } = useSelector(({ editor }) => editor);

  const saveOrCreate = () => {
    const postId = localStorage.getItem('beingWrittenPostId');
    const body = {
      title: title,
      author: 'lululala0919',
      is_finish: false,
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
        );
      });
    } else {
      editorRef.current.save().then((outputData) => {
        dispatch(
          createPost({
            content: outputData.blocks,
            ...body,
          }),
        );
      });
    }
    alert('전송했습니다.');
  };

  // autoSave logic interval(5minute)
  // useInterval(() => saveOrCreate(), 30000);

  return <FontButton props={{ onClick: saveOrCreate }}>{children}</FontButton>;
}
