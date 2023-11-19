import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { signin, changeMessage } from '../../common/sign/modules/signinAuth';
import InputContainer from '../../common/sign/containers/InputContainer';
import Button from '../../common/Button';
import Annotation from '../../common/sign/Annotation';
import { FIELD_DATA } from '../data';

export default function SignInContainer() {
  const router = useRouter();

  const dispatch = useDispatch();

  const form = useSelector(({ field }) => field['signin']['form']);

  const message = useSelector(({ signinAuth }) => signinAuth.authError);

  // const { form, message } = useSelector(({ field, signinAuth }) => ({
  //   form: field['signin']['form'],
  //   message: signinAuth.authError,
  // }));

  const toKorean = {
    email: '이메일',
    password: '비밀번호',
  };

  const onLogin = (e) => {
    e.preventDefault();
    const { email, password } = form;
    for (const field of Object.keys(form)) {
      // if filed value is blank show error message and focus input
      if (!form[field]) {
        dispatch(changeMessage(`${toKorean[field]}을/를 입력해 주세요.`));
        return;
      }
    }
    // if signin success redirect homepage
    dispatch(signin({ email, password })).then((res) => {
      if (!res.error) {
        router.push('/');
      }
    });
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
