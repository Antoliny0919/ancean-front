import AboutMe from './AboutMe';
import PopularWriting from './PopularWriting';
import TopCategories from './TopCategories';
import LatestPosts from './LatestPosts';

export const HOME_SECTION_DATA = {
  aboutMe: {
    component: AboutMe,
    headerProps: {
      mainTitle: 'About Me',
      subTitle: '프로그래밍 개발과 희로애락을 함께하는 이시현, Antoliny입니다.',
      colorHSL: { hue: 190, saturation: 48, lightness: 59 },
    },
  },
  popularWriting: {
    component: PopularWriting,
    headerProps: {
      mainTitle: 'Popular Writing',
      subTitle: '가장 많은 WAVE를 획득한 포스트입니다.',
      colorHSL: { hue: 215, saturation: 58, lightness: 59 },
    },
  },
  topCategories: {
    component: TopCategories,
  },
  latestPosts: {
    component: LatestPosts,
    headerProps: {
      mainTitle: 'Latest Posts',
      subTitle: '',
      colorHSL: { hue: 237, saturation: 46, lightness: 56 },
      style: { 'align-items': 'flex-start' },
    },
  },
};

export const BANNER_SECTION_BUTTON_DATA = {
  aboutMe: {
    name: 'About Me',
    rgb: {
      red: 100,
      green: 184,
      blue: 201,
    },
    waveOption: {
      height: 5,
      amplitude: 10,
      speed: 0.3,
      points: 2,
    },
  },
  popularWriting: {
    name: 'Popular Writing',
    rgb: {
      red: 90,
      green: 140,
      blue: 211,
    },
    waveOption: {
      height: 15,
      amplitude: 3,
      speed: 0.5,
      points: 2,
    },
  },
  topCategories: {
    name: 'Top Categories',
    rgb: {
      red: 19,
      green: 181,
      blue: 185,
    },
    waveOption: {
      height: 7,
      amplitude: 5,
      speed: 0.3,
      points: 2,
    },
  },
  latestPosts: {
    name: 'Latest Posts',
    rgb: {
      red: 104,
      green: 111,
      blue: 200,
    },
    waveOption: {
      height: 15,
      amplitude: 1,
      speed: 0.8,
      points: 2,
    },
  },
};
