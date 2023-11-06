import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { SiKakao } from 'react-icons/si';

export const SOCIAL_LOGIN_DATA = [
  {
    logo: <FcGoogle />,
    href: `https://accounts.google.com/o/oauth2/auth?client_id=270600546916-ulpab3p7p82621gout893tbdquu23pu3.apps.googleusercontent.com&redirect_uri=http://localhost:5050/api/oauth/google&response_type=code&scope=openid email profile`,
    className: 'google',
    title: '구글로 로그인하기',
  },
  {
    logo: <BsGithub />,
    href: `https://github.com/login/oauth/authorize?client_id=e1d1aec4be59c8b9ab4f&redirect_uri=http://localhost:5050/api/oauth/github`,
    className: 'github',
    title: '깃허브로 로그인하기',
  },
  {
    logo: <SiKakao />,
    href: 'https://kauth.kakao.com/oauth/authorize?client_id=22c13075453c19d0d6a1d8e303df37c2&redirect_uri=http://localhost:5050/api/oauth/kakao&response_type=code',
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
