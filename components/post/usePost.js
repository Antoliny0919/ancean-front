import { useRouter } from 'next/router';
import * as postAPI from '../../api/post';

export default function usePost() {
  const router = useRouter();

  const changePrivatePost = async (id) => {
    // switch to private state, preparatory step to modify published post
    const response = await postAPI.getSinglePost(id);
    const data = response.data;
    // id, title, author, is_finish --> require field to patch post
    // is_finish value change to false --> change private post
    const body = {
      id: data['id'],
      title: data['title'],
      author: data['author'],
      is_finish: false,
    };
    postAPI.savePost(body);

    return data;
  };

  const patchPost = async (id) => {
    // save the postId to localStorage and navigate to the writing page
    // prepare to modify the page according to the useEffect logic on the writing page.
    changePrivatePost(id);
    localStorage.setItem('patchPostId', id);
    router.push('/posts/newpost');
  };

  const deletePost = (
    id,
    confirmFollowUp = () => {},
    confirmFollowUpProps = {},
  ) => {
    let confirmState = confirm('정말 삭제하시겠습니까?');
    if (confirmState) {
      postAPI.deletePost(id);
      confirmFollowUp(confirmFollowUpProps);
    }
  };

  return [changePrivatePost, patchPost, deletePost];
}
