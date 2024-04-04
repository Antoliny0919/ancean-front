import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { createPost, savePost } from './modules/editor';

export default function editorContainer(editorRef) {
  const router = useRouter();

  const dispatch = useDispatch();

  // get data from redux editor store
  const { title, selectedCategory, headerImagePath, introduce } = useSelector(
    ({ editor }) => editor,
  );

  const accessToken = useSelector(({ auth }) => auth.user.token.access);

  const author = useSelector(({ auth }) => auth.user.info.name);

  const headers = {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  };

  // if isFinish state is true --> first publishing post or modified a post that has already been published
  // redirect to the post page
  const isPublishedMovePage = (path, isFinish) => {
    if (isFinish) {
      router.push(path);
    }
  };

  // set up data for HTTP
  const setBodyData = () => {
    let body = {
      title: title,
      // ancean only one user exist --> antoliny0919
      author: author,
      // introduce, headerImage, selectedCategory --> it's optional field
      ...(introduce && { introduce: introduce }),
      ...(headerImagePath && { header_image: headerImagePath }),
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
          body: { content: outputData.blocks, ...body },
          headers: headers,
        }),
      ).then(({ payload }) => {
        // if the first post to be publishing redirect post page
        let redirectPath = `/posts/${payload.id}`;
        isPublishedMovePage(redirectPath, isFinish);
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
          body: { content: outputData.blocks },
          headers: headers,
        }),
      ).then(({ payload }) => {
        // if already published post redirect post page
        let redirectPath = `/posts/${payload.id}`;
        isPublishedMovePage(redirectPath, isFinish);
      });
    });
  };

  const createOrSave = (isFinish) => {
    const postId = localStorage.getItem('beingWrittenPostId');
    // it is temporarily, so isFinish value is false
    if (postId) {
      save(postId, isFinish);
    } else {
      create(isFinish);
    }
  };

  return { create, save, createOrSave };
}
