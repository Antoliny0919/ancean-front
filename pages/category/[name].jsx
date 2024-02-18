import styled from 'styled-components';
import usePoster from '../../components/poster/usePoster';
import CategoryPoster from '../../components/category/CategoryPoster';
import CategoryText, {
  StyledCategoryText,
} from '../../components/category/CategoryText';
import OceanWaveButton, {
  StyledOceanWaveButton,
} from '../../components/button/OceanWaveButton';
import { client, server } from '../../api/client';
import { CATEGORY_POSTER_SORT_BUTTON_PROPS } from '../../components/poster/data';
import { flex } from '../../styles/variable';

const StyledCategoryPageArea = styled.div`
  @media screen and (min-width: 768px) {
    padding: 3em 5em;
  }
  padding: 0;
`;

const StyledCategoryPageHeader = styled.div`
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    flex-direction: row;
  }
  ${flex('column', 'center', 'center')};
  font-family: 'Pretendard-Bold';
  .logo {
    width: 15%;
    height: 15%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .post-sort-button {
    @media screen and (min-width: 768px) {
      margin: 0;
    }
    display: flex;
    margin: 0 0 2em 0;
  }
  ${StyledCategoryText} {
    @media screen and (min-width: 768px) {
      font-size: 74px;
      letter-spacing: 10px;
      margin: 0.5em 0.5em 0.5em 0;
    }
    @media screen and (min-width: 1024px) {
      font-size: 100px;
      letter-spacing: 15px;
    }
    font-size: 50px;
    letter-spacing: 7px;
    margin: 0.5em 0;
  }
  ${StyledOceanWaveButton} {
    @media screen and (min-width: 768px) {
      font-size: 12px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
    margin-right: 30px;
    color: ${({ theme }) => theme.colors.lightBlack};
    font-size: 10px;
  }
`;

export default function Name(props) {
  const {
    posts: { results, next },
    categoryName,
  } = props;

  // change the url host server to client
  // after the screen is created, api calls from the client
  const nextPoster =
    next && next.replace(server.defaults.baseURL, client.defaults.baseURL);

  // poster --> a set of posts
  const [poster, lastPostTarget, sortPoster] = usePoster({
    initialPoster: results,
    initialNextPoster: nextPoster,
  });

  return (
    <StyledCategoryPageArea>
      <StyledCategoryPageHeader>
        <CategoryText name={categoryName} />
        <div className="post-sort-button">
          {CATEGORY_POSTER_SORT_BUTTON_PROPS.map((props, index) => {
            return (
              <OceanWaveButton
                key={index}
                {...props.priorityProps}
                props={{ onClick: () => sortPoster(props.query(categoryName)) }}
              >
                {props.name}
              </OceanWaveButton>
            );
          })}
        </div>
      </StyledCategoryPageHeader>
      <CategoryPoster
        poster={poster}
        categoryName={categoryName}
        target={lastPostTarget}
      ></CategoryPoster>
    </StyledCategoryPageArea>
  );
}

export const getStaticPaths = async () => {
  const response = await server.get('/api/category/');
  const categories = response.data;

  const paths = categories.map((category) => {
    let pathName = category.name;
    return { params: { name: pathName.toLowerCase() } };
  });

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
  try {
    if (params.length === 0) {
      return { notFound: true };
    }
    // get posts three(limit=3) at a time and only published(is_finish=true) posts
    const response = await server.get(
      `api/posts/category/${params.name}?is_finish=true&limit=3`,
    );

    const categoryPosts = response.data;

    return {
      props: {
        posts: { ...categoryPosts },
        categoryName: params.name.toUpperCase(),
      },
      revalidate: 10,
    };
  } catch (err) {
    return { notFound: true };
  }
};
