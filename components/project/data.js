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
      props: {
        name: 'create-project',
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
      props: {
        name: 'add-release',
      },
    },
  },
];

export const PROJECT_HOME_TITLE_DATA = {
  'create-project': {
    children: '새로운 프로젝트 생성',
    colorHSL: {
      hue: 204,
      saturation: 74,
      lightness: 46,
    },
  },
  'add-release': {
    children: '프로젝트 릴리스 추가',
    colorHSL: {
      hue: 164,
      saturation: 90,
      lightness: 38,
    },
  },
};

export const CREATE_OPTION_INPUT_DATA = [
  {
    labelProps: {
      children: '제작자',
      htmlFor: 'creator',
    },
    inputProps: {
      name: 'creator',
      type: 'text',
      id: 'creator',
      required: true,
    },
  },
  {
    labelProps: {
      children: '제목',
      htmlFor: 'title',
    },
    inputProps: {
      name: 'title',
      type: 'text',
      id: 'title',
      required: true,
    },
  },
  // {
  //   labelProps: {
  //     children: '시작일',
  //     htmlFor: 'startDate',
  //   },
  //   inputProps: {
  //     name: 'startDate',
  //     type: 'text',
  //     id: 'startDate',
  //     required: true,
  //   },
  // },
];

export const CREATE_OPTION_TEXTAREA_DATA = {
  labelProps: {
    children: '설명',
    htmlFor: 'description',
  },
  textareaProps: {
    name: 'description',
    id: 'description',
    placeholder: '프로젝트에 대한 간단한 설명을 입력해주세요!',
  },
};
