import { server } from '../../api/client';
import CategoryPage from '../../components/category/page/CategoryPage';

export default function Index({ categories }) {
  return <CategoryPage categories={categories} />;
}

export const getStaticProps = async () => {
  const response = await server.get('/api/category/');
  const categories = response.data;

  return { props: { categories } };
};
