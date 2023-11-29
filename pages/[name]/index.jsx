import styled from 'styled-components';
import client from '../../api/client';
// import PostMain from '../../components/common/post/PostMain';
import CardSection from '../../components/common/card/CardSection';

// const TestMainPage = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   justify-content: space-evenly;
//   flex-wrap: nowrap;
// `;

const PaddingBottom = styled.div`
  padding: 10rem;
`;

export default function Index({ data }) {
  console.log(data);

  return (
    // <TestMainPage>
    //   {data.map((item, key) => {
    //     return <PostMain {...item} key={key} />;
    //   })}
    // </TestMainPage>
    <>
      <CardSection></CardSection>
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
