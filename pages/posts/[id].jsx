import { server } from '../../api/client';
import PostContent from '../../components/post/PostContent';
import PostHeader from '../../components/post/PostHeader';
import AuthGateway from '../../components/auth/AuthGateway';
import UserGateway from '../../components/auth/UserGateway';

export default function Post({ post }) {
  // list with single data answered because id data exists in query(getStaticProps)
  const { id, title, updated_at, author, category, content } = post;

  return (
    <AuthGateway>
      <UserGateway>
        <PostHeader
          id={id}
          title={title}
          updated_at={updated_at}
          author={author}
          category={category}
        ></PostHeader>
        <PostContent content={content}></PostContent>
      </UserGateway>
    </AuthGateway>
  );
}

export const getStaticPaths = async () => {
  const response = await server.get(`/api/posts/?is_finish=True`);
  const posts = response.data;

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
  try {
    const response = await server.get(
      `/api/posts/${params.id}/?is_finish=True`,
    );
    const post = response.data;
    return { props: { post }, revalidate: 10 };
  } catch (e) {
    return { notFound: true };
  }
};
