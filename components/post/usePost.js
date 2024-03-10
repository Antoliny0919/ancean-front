import { useRouter } from 'next/router';
import * as postAPI from '../../api/post';

export default function usePost({ id, accessToken }) {
  const headers = {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  };

  const router = useRouter();

  const changePrivatePost = async () => {
    // switch to private state, preparatory step to modify published post
    const query = `id=${id}`;
    const response = await postAPI.getPost(query);
    const data = response.data;
    // id, title, author, is_finish --> require field to patch post
    // is_finish value change to false --> change private post
    const body = {
      id: data['id'],
      title: data['title'],
      author: data['author'],
      is_finish: false,
    };
    const status = await postAPI
      .savePost({ body, headers })
      .then((res) => {
        return res.status;
      })
      .catch((err) => {
        return err.response.status;
      });

    return status;
  };

  const patchPost = async () => {
    // save the postId to localStorage and navigate to the writing page
    // prepare to modify the page according to the useEffect logic on the writing page.
    const status = await changePrivatePost(id);
    if (status == 200) {
      localStorage.setItem('patchPostId', id);
      router.push('/posts/newpost');
    } else {
      alert('포스트를 수정할 수 있는 권한이 존재하지 않습니다.');
    }
  };

  const deletePost = (
    confirmFollowUp = () => {},
    confirmFollowUpProps = {},
  ) => {
    let confirmState = confirm('정말 삭제하시겠습니까?');
    if (confirmState) {
      postAPI
        .deletePost({ id, headers })
        .then(() => {
          confirmFollowUp(confirmFollowUpProps);
        })
        .catch(() => {
          alert('포스트를 삭제할 수 있는 권한이 존재하지 않습니다.');
        });
    }
  };

  return [changePrivatePost, patchPost, deletePost];
}
