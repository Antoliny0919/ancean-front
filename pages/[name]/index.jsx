import client from '../../api/client';

export default function Index({ data }) {
  console.log(data);

  return <div></div>;
}

export const getServerSideProps = async (context) => {
  const { name } = context.query;
  // get user posts
  const response = await client.get(`/api/${name}/posts/`);
  const data = await response.data;
  return { props: { data } };
};
