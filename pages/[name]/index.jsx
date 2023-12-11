// import styled from 'styled-components';
import client from '../../api/client';
import UserPageHeader from '../../components/user/UserPageHeader';
import UserPageBody from '../../components/user/UserPageBody';
// import CardSection from '../../components/common/card/CardSection';
// import CardSwiper from '../../components/common/card/CardSwiper';

export default function Index({ name, posts }) {
  console.log(posts);
  return (
    <>
      <UserPageHeader name={name} />
      <UserPageBody data={posts} />
      {/* <CardSwiper data={data}></CardSwiper>
      <PaddingBottom></PaddingBottom> */}
    </>
  );
}

export const getServerSideProps = async (context) => {
  // Section to be displayed on the user page data filtering fields
  const queries = {
    popularPost: 'ordering=-wave',
    latestPost: 'ordering=-created_at',
  };
  const { name } = context.query;

  let posts = {};

  for (const [section, query] of Object.entries(queries)) {
    const response = await client.get(
      `http://api-local:8000/api/${name}/posts/?${query}`,
    );
    const data = response.data;
    // only get 10posts
    posts = { ...posts, [section]: data.slice(0, 10) };
  }

  return { props: { name, posts } };
};
