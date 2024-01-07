import { FaReact, FaRust, FaPython } from 'react-icons/fa';
import {
  SiDocker,
  SiDjango,
  SiSpring,
  SiKubernetes,
  SiMongodb,
  SiJavascript,
  SiNextdotjs,
} from 'react-icons/si';

export const CATEGORY_LOGO = {
  REACT: {
    logo: <FaReact />,
    color: '#7cc5d9',
    textShadow:
      '1px 1px hsl(193, 43%, 60%), \
  2px 2px hsl(193, 43%, 55%), \
  3px 3px hsl(193, 43%, 50%), \
  4px 4px hsl(193, 43%, 45%), \
  5px 5px hsl(193, 43%, 40%), \
  6px 6px hsl(193, 43%, 35%), \
  7px 7px hsl(193, 43%, 30%), \
  8px 8px hsl(193, 43%, 25%), \
  9px 9px hsl(193, 43%, 20%), \
  10px 10px 30px rgba(0, 0, 0, 0.7);',
  },
  DOCKER: {
    logo: <SiDocker />,
    color: '#0db7ed',
    textShadow:
      '1px 1px hsl(194, 95%, 45%), \
  2px 2px hsl(194, 95%, 42%), \
  3px 3px hsl(194, 95%, 39%), \
  4px 4px hsl(194, 95%, 36%), \
  5px 5px hsl(194, 95%, 33%), \
  6px 6px hsl(194, 95%, 30%), \
  7px 7px hsl(194, 95%, 27%), \
  8px 8px hsl(194, 95%, 24%), \
  9px 9px hsl(194, 95%, 21%), \
  10px 10px 30px rgba(0, 0, 0, 0.7);',
  },
  RUST: {
    logo: <FaRust />,
    color: '#242424',
    textShadow:
      '1px 1px hsl(0, 0%, 16%), \
  2px 2px hsl(0, 0%, 18%), \
  3px 3px hsl(0, 0%, 20%), \
  4px 4px hsl(0, 0%, 22%), \
  5px 5px hsl(0, 0%, 24%), \
  6px 6px hsl(0, 0%, 26%), \
  7px 7px hsl(0, 0%, 28%), \
  8px 8px hsl(0, 0%, 30%), \
  9px 9px hsl(0, 0%, 32%), \
  10px 10px 30px rgba(0, 0, 0, 0.3);',
  },
  PYTHON: {
    logo: <FaPython />,
    color: 'linear-gradient(to right, #306998 50%, #FFD43B 50%)',
    textShadow:
      '1px 1px hsl(207, 68%, 36%), \
    2px 2px hsl(207, 68%, 30%), \
    3px 3px hsl(207, 68%, 27%), \
    4px 4px hsl(207, 68%, 24%), \
    5px 5px hsl(207, 68%, 21%), \
    6px 6px hsl(47, 77%, 50%), \
    7px 7px hsl(47, 77%, 45%), \
    8px 8px hsl(47, 77%, 40%), \
    9px 9px hsl(47, 77%, 35%), \
    10px 10px 30px rgba(0, 0, 0, 0.7);',
  },
  DJANGO: {
    logo: <SiDjango />,
    color: '#092e20',
    textShadow:
      '1px 1px hsl(157, 80%, 13%), \
  2px 2px hsl(157, 80%, 16%), \
  3px 3px hsl(157, 80%, 19%), \
  4px 4px hsl(157, 80%, 22%), \
  5px 5px hsl(157, 80%, 25%), \
  6px 6px hsl(157, 80%, 28%), \
  7px 7px hsl(157, 80%, 31%), \
  8px 8px hsl(157, 80%, 34%), \
  9px 9px hsl(157, 80%, 37%), \
  10px 10px 30px rgba(0, 0, 0, 0.7);',
  },
  SPRING: {
    logo: <SiSpring />,
    color: '#7CBB5D',
    textShadow:
      '1px 1px hsl(100, 50%, 50%), \
  2px 2px hsl(100, 50%, 47%), \
  3px 3px hsl(100, 50%, 44%), \
  4px 4px hsl(100, 50%, 41%), \
  5px 5px hsl(100, 50%, 38%), \
  6px 6px hsl(100, 50%, 35%), \
  7px 7px hsl(100, 50%, 32%), \
  8px 8px hsl(100, 50%, 29%), \
  9px 9px hsl(100, 50%, 26%), \
  10px 10px 30px rgba(0, 0, 0, 0.7);',
  },
  KUBERNETES: {
    logo: <SiKubernetes />,
    color: '#3970e4',
    textShadow:
      '1px 1px hsl(221, 75%, 52%), \
  2px 2px hsl(221, 75%, 48%), \
  3px 3px hsl(221, 75%, 44%), \
  4px 4px hsl(221, 75%, 40%), \
  5px 5px hsl(221, 75%, 36%), \
  6px 6px hsl(221, 75%, 33%), \
  7px 7px hsl(221, 75%, 30%), \
  8px 8px hsl(221, 75%, 27%), \
  9px 9px hsl(221, 75%, 24%), \
  10px 10px 30px rgba(0, 0, 0, 0.7);',
  },
  MONGODB: {
    logo: <SiMongodb />,
    color: 'linear-gradient(to right, #00ED64 50%, #00684A 50%)',
    textShadow:
      '1px 1px hsl(145, 100%, 42%), \
    2px 2px hsl(145, 100%, 39%), \
    3px 3px hsl(145, 100%, 36%), \
    4px 4px hsl(145, 100%, 33%), \
    5px 5px hsl(145, 100%, 30%), \
    6px 6px hsl(163, 100%, 18%), \
    7px 7px hsl(163, 100%, 16%), \
    8px 8px hsl(163, 100%, 14%), \
    9px 9px hsl(163, 100%, 12%), \
    10px 10px 30px rgba(0, 0, 0, 0.7);',
  },
  JAVASCRIPT: {
    logo: <SiJavascript />,
    color: '#F0DB4F',
    textShadow:
      '1px 1px hsl(52, 67%, 59%), \
  2px 2px hsl(52, 67%, 55%), \
  3px 3px hsl(52, 67%, 51%), \
  4px 4px hsl(52, 67%, 47%), \
  5px 5px hsl(52, 67%, 44%), \
  6px 6px hsl(52, 67%, 40%), \
  7px 7px hsl(52, 67%, 36%), \
  8px 8px hsl(52, 67%, 32%), \
  9px 9px hsl(52, 67%, 28%), \
  10px 10px 30px rgba(0, 0, 0, 0.7);',
  },
  'NEXT.JS': {
    logo: <SiNextdotjs />,
    color: '#242424',
    textShadow:
      '1px 1px hsl(0, 0%, 16%), \
  2px 2px hsl(0, 0%, 18%), \
  3px 3px hsl(0, 0%, 20%), \
  4px 4px hsl(0, 0%, 22%), \
  5px 5px hsl(0, 0%, 24%), \
  6px 6px hsl(0, 0%, 26%), \
  7px 7px hsl(0, 0%, 28%), \
  8px 8px hsl(0, 0%, 30%), \
  9px 9px hsl(0, 0%, 32%), \
  10px 10px 30px rgba(0, 0, 0, 0.3);',
  },
};
