import axios from 'axios';
import { useRouter } from 'next/router';
// import { getSocialDataGithub, getSocialDataKakao } from '../../api/auth';

export default function social() {
  const router = useRouter();

  if (!router.isReady) return;

  const code = router.query.code;
  const test = () =>
    axios.post('http://localhost:5050/api/oauth/kakao', { code });

  test();
  // getSocialDataKakao({ code });
}
