import styled from 'styled-components';
import { server } from '../api/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards } from 'swiper/modules';
import PostCard from '../components/minipost/PostCard';
import { flexBox } from '../styles/variable';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const StyledCategoryPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 15vh;
  background: ${(props) => props.background};
  transition: background 1s;
  .swiper-cards {
    width: 280px;
  }
  .swiper-cards .swiper-slide {
    overflow: visible;
  }
  .swiper-coverflow-single-category {
    .swiper-wrapper {
      height: 60vh;
    }
  }
  .swiper-controller {
    margin-top: 13vh;
    height: 7vh;
    margin-bottom: 5vh;
    ${flexBox.flex('row', 'space-between')}
  }
  // extra ------------------------------------
  .swiper-pagination {
    display: flex;
    z-index: 0;
    width: 100%;
  }
  .swiper-pagination-bullet {
    flex: 1 0 0;
    width: var(
      --swiper-pagination-bullet-width,
      var(--swiper-pagination-bullet-size, 8px)
    );
    height: var(
      --swiper-pagination-bullet-height,
      var(--swiper-pagination-bullet-size, 4px)
    );
    display: inline-block;
    border-radius: 3px;
    background: var(--swiper-pagination-bullet-inactive-color, #000);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
  }
  .swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: var(--swiper-pagination-color, #388fbf);
  }
  // extra ----------------------------------------
`;

export default function Test({ posts }) {
  const pagination = {
    clickable: true,
    renderBullet: function (className) {
      return '<span class="' + className + '">' + '</span>';
    },
  };

  console.log(posts);

  return (
    <StyledCategoryPage>
      <Swiper
        pagination={pagination}
        grabCursor={true}
        modules={[Pagination, EffectCards]}
        className="post-cards-effect"
        effect={'cards'}
        cardsEffect={{
          perSlideOffset: 10,
          perSlideRotate: 5,
        }}
      >
        {posts.map((post, index) => {
          return (
            <SwiperSlide key={index}>
              <PostCard post={post} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledCategoryPage>
  );
}

export const getServerSideProps = async () => {
  const response = await server.get(
    '/api/posts/?category__name=PYTHON&limit=5',
  );
  const { results } = response.data;

  return { props: { posts: results } };
};
