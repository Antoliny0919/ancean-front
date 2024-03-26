import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import * as postAPI from '../../api/post';

export default function postContainer() {
  const accessToken = useSelector(({ auth }) => auth.user.token.access);

  const headers = {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  };

  const router = useRouter();

  const changePrivatePost = async (id) => {
    // switch to private state, preparatory step to modify published post
    const query = `id=${id}`;
    const target = await postAPI.getPost({ query });
    const data = target.data;
    // id, title, author, is_finish --> require field to patch post
    // is_finish value change to false --> change private post
    const body = {
      id: data['id'],
      title: data['title'],
      author: data['author'],
      is_finish: false,
    };
    // changePrivate success(authentication) or fail return status code number
    const response = await postAPI
      .savePost({ body, headers })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });

    return response;
  };

  const patchPost = async (id) => {
    // save the postId to localStorage and navigate to the writing page
    // prepare to modify the page according to the useEffect logic on the writing page.
    const response = await changePrivatePost(id);
    if (response.status == 200) {
      localStorage.setItem('patchPostId', id);
      router.push('/posts/newpost');
    } else {
      alert(response.response.data.detail);
    }
  };

  const deletePost = (
    id,
    confirmFollowUp = () => {},
    confirmFollowUpProps = {},
  ) => {
    let confirmState = confirm('정말 삭제하시겠습니까?');
    if (confirmState) {
      postAPI
        .deletePost({ id, headers })
        .then(() => {
          // if request success follow up callback method
          confirmFollowUp(confirmFollowUpProps);
        })
        .catch((err) => {
          alert(err.response.data.detail);
        });
    }
  };

  return { changePrivatePost, patchPost, deletePost };
}
