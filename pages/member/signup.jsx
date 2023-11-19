import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fillOauthEmail } from '@/components/common/sign/modules/field';
import { authcodeAuthSuccess } from '@/components/common/sign/modules/signupAuth';
import SignUpMain from '@/components/signup/SignUpMain';

export default function SignUp() {
  const dispatch = useDispatch();

  const isAuthed = useSelector(({ signupAuth }) => signupAuth.auth);
  console.log(isAuthed);

  useEffect(() => {
    const oauthEmail = sessionStorage.getItem('oauth');
    if (oauthEmail) {
      dispatch(fillOauthEmail(oauthEmail));
      dispatch(authcodeAuthSuccess('인증성공'));
    }
  }, []);

  return <SignUpMain />;
}
