import { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import PostShortIntroduce from '../version2/PostShortIntroduce';

const StyledPost = styled.div`
  display: relative;
  background-image: url(${(props) => props.$imgUrl});
  background-size: 30vw 35vw;
  border-radius: 10px;
  width: 30vw;
  height: 35vw;
  /* &:hover {
    opacity: 0.5;
  } */
`;

const StyledBigWavePostsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export default function PaginationPost() {
  const [introduceNumber, setIntroduceNumber] = useState(0);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  };

  const posts = [
    {
      image: 'http://localhost:5050/media/call-back-hell.jpeg',
      title: '콜백헬은 지옥이다.',
      content:
        'Promise가 등장하기 이전에는 주로 콜백함수를 통해 비동기를 구현했다.\
      비동기 함수가 서버와의 응답을 끝냈을때의 후속 처리를 할 함수를 인자로 받는 형식이다.\
      만약 독자들의 블로그 DB에서 포스트 목록을 가져온다고 생각해 보자.\
      테스트를 진행하기 위해서 필자가 getUserRepository함수를 만들었으며 해당 함수는\
      success와 fail 콜백 함수를 받는 일반적인 콜백 패턴의 비동기 함수이다.\
      (※ HTTP Response 응답 상태코드에 따른 후속 처리)',
    },
    {
      image: 'http://localhost:5050/media/js-log.png',
      title: '테스트 한 번 해보자!',
      content:
        "만약 HTTP Response의 상태코드가 200이라면\
      Response의 body객체(JSON)를 역직렬화해 JS객체로 만든 뒤 success매개변수에 전달한 console.log함수를 통해\
      해당 객체를 console에 출력할 것이고 만약 200 이외의 코드를 응답받으면\
      'FAIL!'이라는 문자열을 console.warn을 통해 console에 경고 메시지를 출력할 것이다.\
      테스트를 위한 글자들",
    },
    {
      image: 'http://localhost:5050/media/microtaskqueue.gif',
      title: '움직이는 gif이미지 입니다.',
      content:
        'min-width는 요소의 너비가 특정 값 이하로 작아지는 걸 방지한다.\
      그렇기 때문에 종횡비와 min-XXX 혹은 max-XXX 지정을 같이 하면 예상치 못한 결과가 나올 수 있다.\
      아래 예시는 종횡비 3/1, 너비는 100px로 지정하여 너비 100px, 높이 33.33px이 되는 게 목적이었다.\
      하지만 높이에 대해 min-height를 지정했기 때문에, min-height 기준으로 계산되어 너비 150px, 높이 50px이 된다.',
    },
  ];

  const onShortIntroduceChange = (activePostNum) => {
    setIntroduceNumber(activePostNum);
  };

  return (
    <StyledBigWavePostsArea>
      <Swiper
        pagination={pagination}
        grabCursor={true}
        modules={[Pagination, EffectCards]}
        className="post-cards-effect"
        effect={'cards'}
        cardsEffect={{
          perSlideOffset: 10,
          perSlideRotate: 1,
        }}
        onSlideChange={(e) => onShortIntroduceChange(e.activeIndex)}
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <StyledPost $imgUrl={post.image}></StyledPost>
          </SwiperSlide>
        ))}
      </Swiper>
      <PostShortIntroduce data={posts[introduceNumber]}></PostShortIntroduce>
    </StyledBigWavePostsArea>
  );
}
