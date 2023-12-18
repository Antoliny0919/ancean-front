import client from '@/api/client';
import MarkdownEditor from '@/components/editor/MarkdownEditor';

export default function newpost({ categories }) {
  return <MarkdownEditor categories={categories} />;
}

export const getServerSideProps = async () => {
  const response = await client.get('http://api-local:8000/api/category');
  const categories = response.data;

  return { props: { categories: categories } };
};
