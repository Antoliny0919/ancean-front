import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { SiKakao } from 'react-icons/si';

export const SOCIAL_LOGIN_DATA = [
  {
    logo: <FcGoogle />,
    href: `https://accounts.google.com/o/oauth2/auth?client_id=346589268566-me1msok46osgr6bs12eqph77tn2bh33l.apps.googleusercontent.com&redirect_uri=http://localhost:5050/api/oauth/google&response_type=code&scope=openid email profile`,
    className: 'google',
    title: '구글로 로그인하기',
  },
  {
    logo: <BsGithub />,
    href: `https://github.com/login/oauth/authorize?client_id=75128cffd7b6ba5f26b4&redirect_uri=http://localhost:5050/api/oauth/github`,
    className: 'github',
    title: '깃허브로 로그인하기',
  },
  {
    logo: <SiKakao />,
    href: 'https://kauth.kakao.com/oauth/authorize?client_id=22c13075453c19d0d6a1d8e303df37c2&redirect_uri=http://localhost:3030/oauth/kakao&response_type=code',
    className: 'kakao',
    title: '카카오로 로그인하기',
  },
];

export const FIELD_DATA = [
  {
    placeholder: '이메일',
    type: 'text',
    name: 'email',
  },
  {
    placeholder: '비밀번호',
    type: 'password',
    name: 'password',
  },
];
