import { noneClient } from '../../api/client';
import CategoryPage from '../../components/category/CategoryPage';

export default function Name(props) {
  const {
    posts: { results, next },
    name,
  } = props;

  const nextPost = next.replace('http://api-local:8000', '');

  return (
    <>
      <CategoryPage posts={results} name={name} nextPost={nextPost} />
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await noneClient.get('/api/category');
  const categories = response.data;

  const paths = categories.map((category) => {
    let pathName = category.name;
    return { params: { name: pathName.toLowerCase() } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const response = await noneClient.get(
    `api/posts?category__name=${params.name}`,
  );
  const categoryPosts = response.data;

  return {
    props: { posts: { ...categoryPosts }, name: params.name },
  };
};
