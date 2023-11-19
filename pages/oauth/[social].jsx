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
      if (!res.error) {
        router.push('/member/signup');
      }
    });
  }, [social]);

  return (
    <>
      <div>hello</div>
    </>
  );
}
