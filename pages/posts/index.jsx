import { server } from '../../api/client';

export default function index() {
  return <div>posts 페이지</div>;
}

export const getServerSideProps = async () => {
  const response = await server.get('/api/posts/');
  const categories = response.data;

  return { props: { categories: categories } };
};
