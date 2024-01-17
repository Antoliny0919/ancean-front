import { client, server } from '../../api/client';
import CategoryNamePageContainer from '../../components/category/container/CategoryNamePageContainer';

export default function Name(props) {
  const {
    posts: { results, next },
    name,
  } = props;

  const nextPost =
    next && next.replace(server.defaults.baseURL, client.defaults.baseURL);

  return (
    <>
      <CategoryNamePageContainer
        posts={results}
        name={name}
        nextPost={nextPost}
      />
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await server.get('/api/category/');
  const categories = response.data;

  const paths = categories.map((category) => {
    let pathName = category.name;
    return { params: { name: pathName.toLowerCase() } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const response = await server.get(
    `api/posts?category__name=${params.name}&limit=3`,
  );

  const categoryPosts = response.data;

  return {
    props: { posts: { ...categoryPosts }, name: params.name },
  };
};
