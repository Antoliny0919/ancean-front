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
    dispatch(oauthSignin({ social, code }));
    console.log(social, code);
  }, [social]);

  return (
    <>
      <div>hello</div>
      {/* <button onClick={loadOauth}>오어스 테스트</button> */}
    </>
  );
}
