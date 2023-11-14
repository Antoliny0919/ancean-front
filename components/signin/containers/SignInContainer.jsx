import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../common/sign/modules/signinAuth';
import InputContainer from '../../common/sign/containers/InputContainer';
import Button from '../../common/Button';
import Annotation from '../../common/sign/Annotation';
import { FIELD_DATA } from '../data';

export default function SignInContainer() {
  const dispatch = useDispatch();

  const { form, message } = useSelector(({ field, signinAuth }) => ({
    form: field['signin']['form'],
    message: signinAuth.authError,
  }));

  const onLogin = (e) => {
    e.preventDefault();
    const { email, password } = form;
    dispatch(signin({ email, password }));
  };

  return (
    <>
      {FIELD_DATA.map((data, index) => {
        return (
          <InputContainer
            key={index}
            step="signin"
            inputData={data}
            width={25}
          ></InputContainer>
        );
      })}
      <Annotation state="fail">{message}</Annotation>
      <Button onClick={onLogin} fontSize={18}>
        로그인
      </Button>
    </>
  );
}
