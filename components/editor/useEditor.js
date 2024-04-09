import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { client } from '../../api/client';
import { createPost, patchPost } from './modules/editor';

export default function useEditor() {
  const dispatch = useDispatch();

  const router = useRouter();

  const fields = useSelector(({ editor }) => editor);

  const { instance, title, introduce, headerImagePath, selectedCategory } =
    fields;

  const { token, info } = useSelector(({ auth }) => auth.user);

  const headers = { Authorization: `Bearer ${token.access}` };

  // set up data for HTTP
  const setBodyData = (isFinish) => {
    let body = {
      title: title,
      // ancean only one user exist --> antoliny0919
      author: info.name,
      is_finish: isFinish,
      // introduce, headerImage, selectedCategory --> it's optional field
      ...(introduce && { introduce: introduce }),
      ...(headerImagePath
        ? { header_image: headerImagePath }
        : {
            header_image: `${client.defaults.baseURL}/media/ancean-no-header-image.png`,
          }),
      ...(selectedCategory && { category: selectedCategory }),
    };
    return body;
  };

  const isPublishedMovePage = useCallback((path, isFinish) => {
    if (isFinish) {
      router.push(path);
    }
  }, []);

  const save = async (isFinish) => {
    const postId = localStorage.getItem('beingWrittenPostId');
    const content = await instance.save().then((outputData) => outputData);
    const body = { ...setBodyData(isFinish), content };
    let response = null;
    if (postId) {
      response = dispatch(patchPost({ id: postId, body, headers }));
    } else {
      response = dispatch(createPost({ body, headers }));
    }
    response.then(({ payload }) => {
      let redirectPath = `/posts/${payload.id}`;
      isPublishedMovePage(redirectPath, isFinish);
    });
  };

  const imageUploader = async (file, func, isDispatch) => {
    const formData = new FormData();
    const postId = localStorage.getItem('beingWrittenPostId');
    formData.append('file', file);
    formData.append('id', postId);
    console.log(headers);
    try {
      const response = isDispatch
        ? await dispatch(func({ formData, headers }))
        : await func({ formData, headers });
      return response.data;
    } catch (err) {
      const errorMessage = err.response.data.detail;
      alert(errorMessage);
    }
  };

  return { save, imageUploader };
}
