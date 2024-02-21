import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { createPost, savePost } from './modules/editor';

export default function usePost(editorRef) {
  const router = useRouter();

  const dispatch = useDispatch();

  // get data from redux editor store
  const { title, selectedCategory, headerImage, introduce } = useSelector(
    ({ editor }) => editor,
  );

  // if isFinish state is true --> first publishing post or modified a post that has already been published
  // redirect to the post page
  const redirectPost = (path, isFinish) => {
    if (isFinish) {
      router.push(path);
    }
  };

  // set up data for HTTP
  const setBodyData = () => {
    let body = {
      title: title,
      // ancean only one user exist --> antoliny0919
      author: 'antoliny0919',
      // introduce, headerImage, selectedCategory --> it's optional field
      ...(introduce && { introduce: introduce }),
      ...(headerImage && { header_image: headerImage }),
      ...(selectedCategory && { category: selectedCategory }),
    };
    return body;
  };

  const create = (isFinish) => {
    let body = setBodyData();
    body['is_finish'] = isFinish;
    editorRef.current.save().then((outputData) => {
      dispatch(
        createPost({
          content: outputData.blocks,
          ...body,
        }),
      ).then(({ payload: { redirect_path } }) => {
        // if the first post to be publishing redirect post page
        redirectPost(redirect_path);
      });
    });
  };

  const save = (postId, isFinish) => {
    // get the post id current being created
    let body = setBodyData();
    body['is_finish'] = isFinish;
    editorRef.current.save().then((outputData) => {
      dispatch(
        savePost({
          id: postId,
          content: outputData.blocks,
          ...body,
        }),
      ).then(({ payload: { redirect_path } }) => {
        // if already published post redirect post page
        redirectPost(redirect_path);
      });
    });
  };

  const createOrSavePost = (isFinish) => {
    // isFinish is very important value --> meaning the status of the publication of the post
    // localStorage beingWrittenPostId value --> determining whether to create or save post
    const postId = localStorage.getItem('beingWrittenPostId');
    if (postId) {
      save(postId, isFinish);
    } else {
      create(isFinish);
    }
  };

  return [createOrSavePost];
}
