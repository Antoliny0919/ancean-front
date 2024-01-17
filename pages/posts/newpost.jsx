import { server } from '@/api/client';
import MarkdownEditor from '@/components/editor/MarkdownEditor';

export default function newpost({ categories }) {
  return <MarkdownEditor categories={categories} />;
}

export const getServerSideProps = async () => {
  const response = await server.get('/api/category/');
  const categories = response.data;

  return { props: { categories: categories } };
};
