import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { SiKakao } from 'react-icons/si';

export const SOCIAL_LOGIN_DATA = [
  {
    logo: <FcGoogle />,
    href: `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL}/google&response_type=code&scope=openid email profile`,
    className: 'google',
    title: '구글로 로그인하기',
  },
  {
    logo: <BsGithub />,
    href: `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL}/github`,
    className: 'github',
    title: '깃허브로 로그인하기',
  },
  {
    logo: <SiKakao />,
    href: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URL}/kakao&response_type=code`,
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
