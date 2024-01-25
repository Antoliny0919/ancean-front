import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --ancean-signature: #155B82;
    --background-shallow: rgba(55, 122, 178, 0.4);
    --shadow-logo-color: #67ABDB;
    --shadow-outline-deep-dark: #273237;
    --shadow-outline-shallow-dark: #39484F;
    --shadow-outline-latest-post: #6A6FC8;
  }  
  html, body {
    padding: 0;
    margin: 0;
    line-height: 1.6;
    font-size: 16px;
    background-color: #fff;
    max-width: 2048px;
    min-width: 280px;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (min-width: 280px) {
    font-size: 30px;
    h1 {
      font-size: 500px;
    }
    h5 {
      font-size: 12px;
    }
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
  
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: -20px;
  }

  .swiper-3d .swiper-slide-shadow {
    border-radius: 10px;
  }

  .swiper-3d .swiper-slide-shadow-left {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  .swiper-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  // coverflow-stretch-post

  .swiper-button-next, .swiper-rtl .swiper-button-prev {
      right: var(--swiper-navigation-sides-offset, 0px);
      left: auto;
  }
  .swiper-button-prev, .swiper-button-next {
      position: absolute;
      top: var(--swiper-navigation-top-offset, 50%);
      width: calc(var(--swiper-navigation-size) / 44 * 27);
      height: var(--swiper-navigation-size);
      margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
      z-index: 10;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  .swiper-button-next {
    right: 5vw;
  }
  .swiper-button-prev {
    left: 5vw;
  }

  .swiper-button-next:after {
    content: ''
  }
  .swiper-button-prev:after {
    content: ''
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
    font-family: 'SUIT-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
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



  // editor js

  .ce-toolbar__content {
    max-width: 768px;
  }

  .ce-paragraph {
    font-family: 'Pretendard-Light';
    font-size: 16px;
    line-height: 1.6em;
    outline: none;
  }
  .cdx-block {
    padding: 0.3em 0;
    font-family: 'Pretendard-Light';
  }

  .ce-block__content .ce-header {
    font-family: 'Pretendard-Bold';
    padding: 0.3em 0 0.3em;
    margin-bottom: 3px;
    margin-top: 0;
    line-height: 1.25em;
    outline: none;
  }

  .ce-block__content {
    position: relative;
    max-width: 768px;
    margin: 0 auto;
    -webkit-transition: background-color .15s ease;
    transition: background-color .15s ease;
  } 

  .ce-block__content > .ce-code {
    margin: 1.5rem 0;
  }

  .ce-block__content > .cdx-quote {
    font-family: 'Pretendard-Bold';
    margin: 1.5rem 0;
    font-size: 20px;
    padding: 0.7rem 0.7rem 0.7rem 1.5rem;
    border-left: solid ${({ theme }) => theme.colors.post.deep} 4px;
    background-color: ${({ theme }) => theme.colors.post.shallow};
  }

  .cdx-quote .cdx-quote__text {
    padding: 0;
    border: none;
    webkit-box-shadow: none;
    box-shadow: none;
    min-height: 0;
    margin-bottom: 0;
  }
  
  .cdx-block > a {
    color: rgba(66, 124, 190, 0.7);
    transition: color 0.7s;
    text-decoration: underline;
    font-weight: 900;
  }

  .cdx-block > a:hover {
    color: rgba(66, 124, 190, 1);
  }

  .cdx-block > .cdx-marker {
    background-color: rgba(66, 124, 190, 0.2);
  }
  
  .cdx-block > .inline-code {
    background: rgba(66, 177, 190, 0.2);
    color: rgba(66, 177, 190, 1);
    padding: 3px 4px;
    border-radius: 5px;
    margin: 0 1px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .3px;
  }

  code {
    font-size: 14px;
  }

  .cdx-quote__caption {
    display: none;
  }

  // editorJS(Warning Block)

  .ce-block__content > .cdx-warning {
    margin: 1.5rem 0;
    padding: 0;
  }
  .ce-block__content > .cdx-warning::before {
    background-image: none;
  }

  .cdx-warning__title {
    font-family: 'Pretendard-Bold';
    font-size: 20px;
    color: #EE801A;
    background-color: white;
    padding: 10px 12px;
  }
  .cdx-warning > .cdx-warning__title {
    margin-bottom: 0;
    border: none;
    border-radius: 0;
    border: solid #EE801A 1px;
    border-left: solid #EE801A 4px;
  }

  .cdx-warning__message {
    background-color: rgba(255, 219, 40, 0.1);
    transition: background-color 0.7s;
  }

  .cdx-warning > .cdx-warning__message {
    border: none;
    border-radius: 0;
    padding: 14px 16px;
  }

  .cdx-warning__message:hover {
    background-color: rgba(255, 219, 40, 0.3);
  }

  // editorJS(Image Block)

  .image-tool {
    --bg-color: #cdd1e0;
    --front-color: #388ae5;
    --border-color: #e8e8eb;
  }

  .image-tool__image {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .image-tool__caption {
    display: none;
  }

  .image-tool__image-picture {
    max-width: 100%;
    vertical-align: bottom;
    display: block;
  }


`;
