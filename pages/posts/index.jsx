import { server, client } from '../../api/client';
import PostIndexContainer from '../../components/postindex/container/PostIndexContainer';

export default function index({ posts }) {
  const { results, next } = posts;

  const nextPost =
    next && next.replace(server.defaults.baseURL, client.defaults.baseURL);

  return <PostIndexContainer posts={results} nextPost={nextPost} />;
}

export const getServerSideProps = async () => {
  const response = await server.get(
    '/api/posts?ordering=-created-at&limit=3&is_finish=true',
  );
  const posts = response.data;

  return { props: { posts: posts } };
};
