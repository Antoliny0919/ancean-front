import styled from 'styled-components';
import client from '../../api/client';
import CardSection from '../../components/common/card/CardSection';

const PaddingBottom = styled.div`
  padding: 10rem;
`;

export default function Index({ data }) {
  return (
    <>
      <CardSection data={data}></CardSection>
      <PaddingBottom></PaddingBottom>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { name } = context.query;
  // get user posts
  const response = await client.get(`http://api-local:8000/api/${name}/posts/`);
  const data = await response.data;
  return { props: { data } };
};
