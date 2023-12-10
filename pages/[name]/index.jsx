// import styled from 'styled-components';
import client from '../../api/client';
import UserPageHeader from '../../components/user/UserPageHeader';
import UserPageBody from '../../components/user/UserPageBody';
// import CardSection from '../../components/common/card/CardSection';
// import CardSwiper from '../../components/common/card/CardSwiper';

export default function Index({ data, name }) {
  return (
    <>
      <UserPageHeader name={name} />
      <UserPageBody data={data} />
      {/* <CardSwiper data={data}></CardSwiper>
      <PaddingBottom></PaddingBottom> */}
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { name } = context.query;
  // get user posts
  const response = await client.get(`http://api-local:8000/api/${name}/posts/`);
  const data = await response.data;
  return { props: { data, name } };
};
