import { useRouter } from 'next/router';
import { server } from '../../api/client';
import PostContent from '../../components/post/PostContent';
import PostHeader from '../../components/post/PostHeader';

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div></div>;
  }

  const { title, updated_at, author, category, content } = post[0];

  return (
    <>
      <PostHeader
        title={title}
        updated_at={updated_at}
        author={author}
        category={category}
      ></PostHeader>
      <PostContent content={content}></PostContent>
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await server.get(`/api/posts?is_finish=true`);
  const posts = response.data;

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const response = await server.get(
    `/api/posts?id=${params.id}&is_finish=true`,
  );
  const post = response.data;

  if (post.length === 0) {
    return {
      notFound: true,
    };
  }

  return { props: { post } };
};
