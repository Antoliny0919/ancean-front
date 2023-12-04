// import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards } from 'swiper/modules';
import Post from '../version2/Post';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

export default function PaginationPost() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      console.log(className);
      return '<span class="' + className + '">' + '</span>';
    },
  };

  const posts = [
    {
      image: 'http://localhost:5050/media/call-back-hell.jpeg',
      title: '콜백헬은 지옥이다.',
    },
    {
      image: 'http://localhost:5050/media/js-log.png',
      title: '테스트 한 번 해보자!',
    },
    {
      image: 'http://localhost:5050/media/microtaskqueue.gif',
      title: '움직이는 gif이미지 입니다.',
    },
  ];

  return (
    <>
      <Swiper
        pagination={pagination}
        grabCursor={true}
        modules={[Pagination, EffectCards]}
        className="post-cards-effect"
        effect={'cards'}
        cardsEffect={{
          perSlideOffset: 7,
          perSlideRotate: 1,
        }}
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <Post data={post}></Post>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
