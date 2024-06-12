import { LuCopyPlus } from 'react-icons/lu';
import { FaPlus } from 'react-icons/fa';

export const PROJECT_HOME_BUTTON_DATA = [
  {
    title: '새로운 프로젝트 생성',
    logo: <FaPlus />,
    buttonProps: {
      rgb: {
        red: 54,
        green: 135,
        blue: 181,
      },
      waveOption: {
        height: 20,
        amplitude: 4,
        speed: 0.5,
        points: 2,
      },
    },
  },
  {
    title: '프로젝트 릴리스 노트 추가',
    logo: <LuCopyPlus />,
    buttonProps: {
      rgb: {
        red: 85,
        green: 195,
        blue: 204,
      },
      waveOption: {
        height: 20,
        amplitude: 4,
        speed: 0.5,
        points: 2,
      },
    },
  },
];
