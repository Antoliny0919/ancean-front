import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../common/sign/modules/signinAuth';
import Button from '../../common/Button';

export default function SignInContainer() {
  const dispatch = useDispatch();

  const { form } = useSelector(({ field }) => ({
    form: field['signin']['form'],
  }));

  const onLogin = (e) => {
    e.preventDefault();
    const { email, password } = form;
    dispatch(signin({ email, password }));
  };

  return <Button onClick={onLogin} fontSize={18}>로그인</Button>
}
