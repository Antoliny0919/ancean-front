import { SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import styled from 'styled-components';
import { server } from '../../api/client';
import CategoryCardSwiper from '../../components/category/CategoryCardSwiper';
import { StyledCategoryText } from '../../components/category/CategoryText';
import CategorySwiper, {
  StyledSwiperArea,
  StyledSwiperButtonArea,
} from '../../components/category/CategorySwiper';
import { flex } from '../../styles/variable';

const StyledCategoryPage = styled.div`
  ${StyledSwiperArea} {
    display: flex;
    height: 100vh;
    overflow: scroll;
    align-items: center;
    .swiper-wrapper {
      padding: 2rem 0;
    }
    .swiper-controller {
      ${flex('row', 'space-between')}
    }
  }
  ${StyledSwiperButtonArea} {
    @media screen and (min-width: 768px) {
      padding: 1em 2em;
    }
    ${flex('row', 'space-between', 'flex-end')};
    padding: 0;
    ${StyledCategoryText} {
      @media screen and (min-width: 768px) {
        font-size: 45px;
        letter-spacing: 7px;
      }
      @media screen and (min-width: 1024px) {
        font-size: 60px;
        letter-spacing: 10px;
      }
      font-size: 28px;
      letter-spacing: 5px;
    }
  }
`;

export default function Index({ categories, categoryPosts }) {
  return (
    <StyledCategoryPage>
      <CategorySwiper
        swiperProps={{
          modules: [EffectCoverflow],
          slidesPerView: 1,
          effect: 'coverflow',
          speed: 2000,
          spaceBetween: 400,
          coverflowEffect: {
            rotate: 20,
            stretch: 100,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          },
        }}
        categoryCnt={categories.length}
        swiperButton={true}
      >
        {categories.map(({ name }, index) => {
          return (
            <SwiperSlide key={index} data-name={name}>
              <CategoryCardSwiper
                posts={categoryPosts[name]}
              ></CategoryCardSwiper>
            </SwiperSlide>
          );
        })}
      </CategorySwiper>
    </StyledCategoryPage>
  );
}

export const getStaticProps = async () => {
  const response = await server.get('/api/category/');
  const categories = response.data;

  let categoryPosts = {};

  for (const category of categories) {
    const response = await server.get(
      `/api/posts?category__name=${category.name}&limit=5&is_finish=true`,
    );
    const { results } = response.data;
    categoryPosts = {
      ...categoryPosts,
      [category.name]: [{ name: category.name }, ...results],
    };
  }

  return { props: { categories, categoryPosts }, revalidate: 10 };
};
