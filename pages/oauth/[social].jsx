import nProgress from 'nprogress';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { oauthSignin } from '@/components/common/sign/modules/signinAuth';

export default function Social() {
  nProgress.start();

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
        // client github accounts may not have email set up
        // go to the page that recommends email settings
        if (res.payload.email === null) {
          router.push('/oauth/error');
          return;
        }
        // oauth login success but client does not register yet
        router.push('/member/signup');
        sessionStorage.setItem('oauth', res.payload.email);
      }
    });
  }, [social]);

  return <></>;
}
