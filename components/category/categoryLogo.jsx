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
  REACT: { logo: <FaReact />, color: '#7cc5d9' },
  DOCKER: { logo: <SiDocker />, color: '#0db7ed' },
  RUST: { logo: <FaRust />, color: '#242424' },
  PYTHON: {
    logo: <FaPython />,
    color: 'linear-gradient(to right, #306998 50%, #FFD43B 50%)',
  },
  DJANGO: { logo: <SiDjango />, color: '#092e20' },
  SPRING: { logo: <SiSpring />, color: '#7CBB5D' },
  KUBERNETES: { logo: <SiKubernetes />, color: '#3970e4' },
  MONGODB: {
    logo: <SiMongodb />,
    color: 'linear-gradient(to right, #00ED64 50%, #00684A 50%)',
  },
  JAVASCRIPT: { logo: <SiJavascript />, color: '#F0DB4F' },
  'NEXT.JS': { logo: <SiNextdotjs />, color: '#242424' },
};
