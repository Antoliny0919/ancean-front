import { server } from '../../api/client';
import CategoryPage from '../../components/category/page/CategoryPage';

export default function Index({ categories, categoryPosts }) {
  return <CategoryPage categories={categories} categoryPosts={categoryPosts} />;
}

export const getStaticProps = async () => {
  const response = await server.get('/api/category/');
  const categories = response.data;

  let categoryPosts = {};

  for (const category of categories) {
    const response = await server.get(
      `/api/posts?category__name=${category.name}&limit=5`,
    );
    const { results } = response.data;
    categoryPosts = {
      ...categoryPosts,
      [category.name]: [{ name: category.name }, ...results],
    };
  }

  return { props: { categories, categoryPosts } };
};
