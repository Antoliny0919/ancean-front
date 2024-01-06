import { noneClient } from '../../api/client';
import CategoryPageHeader from '../../components/category/page/CategoryPageHeader';

export default function Name(props) {
  const { posts, name, postCnt } = props;

  console.log(posts);

  return <CategoryPageHeader name={name} postCnt={postCnt} />;
}

export const getStaticPaths = async () => {
  const response = await noneClient.get('/api/category');
  const categories = response.data;

  const paths = categories.map((category) => {
    let pathName = category.name;
    return { params: { name: pathName.toLowerCase() } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const response = await noneClient.get(
    `api/posts?category__name=${params.name}`,
  );
  const categoryPosts = response.data;
  const postCnt = response.data.length;

  return {
    props: { posts: { ...categoryPosts }, name: params.name, postCnt: postCnt },
  };
};
