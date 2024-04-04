import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import dynamic from 'next/dynamic';
import { savePost } from './modules/editor';

let CustomEditorConfig = dynamic(() => import('./CustomEditorConfig'), {
  ssr: false,
});

const Editor = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector(({ auth }) => auth.user.token.access);

  const headers = { Authorization: `Bearer ${accessToken}` };

  let [editorInstance, setEditorInstance] = useState({}); // to get the instance of editor.Js

  const handleInstance = (instance) => {
    setEditorInstance(instance);
  };

  const save = () => {
    const postId = localStorage.getItem('beingWrittenPostId');
    editorInstance.save().then((outputData) => {
      dispatch(
        savePost({ id: postId, body: { content: outputData }, headers }),
      );
    });
  };
  return (
    <Fragment>
      <button onClick={save}>내용확인</button>
      {CustomEditorConfig && (
        <CustomEditorConfig handleInstance={handleInstance} />
      )}
    </Fragment>
  );
};

export default connect((state) => state)(Editor);
