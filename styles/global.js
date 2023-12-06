import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    line-height: 1.6;
    font-size: 16px;
    background-color: #fff;
  }

  main {
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
  // IntersectionObserver
  .fade-in-slide-down-suspend {
    opacity: 0;
    transform: translateY(-100px);
    transition: all 1s;
  }

  // swiper
  .swiper-slide {
    transform: translateZ(0);
    backface-visibility: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .post-cards-effect {
    width: 30vw;
    height: 35vw;
    margin-left: 0;
    margin-right: 0;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }

  .swiper-category {
    width: 100%;
  }

  .swiper-cards {
    overflow: visible;
  }

  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: -20px;
  }

  .post-cards-effect .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }

  .post-cards-effect .swiper-pagination {
    display: flex;
    z-index: 0;
    width: 100%;
  }

  .post-cards-effect .swiper-pagination-bullet {
    flex: 1 0 0;
    width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));
    height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,4px));
    display: inline-block;
    border-radius: 3px;
    background: var(--swiper-pagination-bullet-inactive-color,#000);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, .2);
  }

  .post-cards-effect .swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: var(--swiper-pagination-color, #388FBF);
  }

  .swiper-3d .swiper-slide-shadow {
    border-radius: 10px;
  }

  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Light';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
}
`;
