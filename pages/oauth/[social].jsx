import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { oauthSignin } from '@/components/common/sign/modules/signinAuth';

export default function Social() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { social, code } = router.query;

  useEffect(() => {
    if (!social && !code) return;
    dispatch(oauthSignin({ social, code })).then((res) => {
      // oauth login success and client already register
      console.log(res);
      if (!res.error && res.payload.user) {
        router.push('/');
      } else {
        // oauth login success but client does not register yet
        router.push('/member/signup');
        sessionStorage.setItem('oauth', res.payload.email);
      }
    });
  }, [social]);

  return <></>;
}
