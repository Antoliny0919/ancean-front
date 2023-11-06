import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../common/sign/modules/auth';
import SignInBody from '../SignInBody';

export default function SignInContainer() {
  const dispatch = useDispatch();

  const { form, auth } = useSelector(({ sign, auth }) => ({
    form: sign['signin']['form'],
    auth: auth.signIn,
  }));

  const onLogin = (e) => {
    e.preventDefault();
    const { id, password } = form;
    dispatch(signIn({ id, password }));
  };

  return <SignInBody onLogin={onLogin} authError={auth.authError} />;
}
