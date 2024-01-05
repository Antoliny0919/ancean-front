import { noneClient } from '../../api/client';
import PostContent from '../../components/post/PostContent';
import PostHeader from '../../components/post/PostHeader';

export default function Post({ post }) {
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
  const response = await noneClient.get(`/api/posts/`);
  const posts = response.data;

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const response = await noneClient.get(`/api/posts?id=${params.id}`);
  const post = response.data;

  return { props: { post } };
};
