import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { savePost, createPost } from '../modules/editor';
import FontButton from '../../button/FontButton';

export default function SaveButtonContainer() {
  const dispatch = useDispatch();

  const ref = useRef();

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
      ref.current.save().then((outputData) => {
        dispatch(
          savePost({
            id: postId,
            content: outputData.blocks,
            ...body,
          }),
        );
      });
    } else {
      ref.current.save().then((outputData) => {
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

  return <FontButton props={{ onClick: saveOrCreate }}>임시저장</FontButton>;
}
