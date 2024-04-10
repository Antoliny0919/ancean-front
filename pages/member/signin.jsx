import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import LabelSlideInput from '../../components/input/LabelSlideInput';
import CommonButton from '../../components/button/CommonButton';
import { signin } from '../../components/auth/modules/auth';
import { flex } from '../../styles/variable';

const StyledSignInLayout = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledSignIn = styled.form`
  ${flex('column', 'center', 'center')};
  font-size: 20px;
`;

export default function SignIn() {
  const INPUTS_DATA = [
    {
      labelProps: {
        children: '이메일',
        htmlFor: 'email',
      },
      inputProps: {
        name: 'email',
        type: 'text',
        id: 'email',
      },
    },
    {
      labelProps: {
        children: '비밀번호',
        htmlFor: 'password',
      },
      inputProps: {
        name: 'password',
        type: 'password',
        id: 'password',
      },
    },
  ];

  const router = useRouter();

  const dispatch = useDispatch();

  const { email, password, message } = useSelector(({ auth }) => auth.signin);

  const loadSignin = () => {
    dispatch(signin({ email, password })).then(({ meta }) => {
      if (meta.requestStatus === 'fulfilled') {
        router.push('/');
      }
    });
  };

  return (
    <StyledSignInLayout>
      <StyledSignIn>
        {INPUTS_DATA.map(({ labelProps, inputProps }, index) => {
          return (
            <LabelSlideInput
              key={index}
              labelProps={labelProps}
              inputProps={inputProps}
            />
          );
        })}

        {/* <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => dispatch(changeValue(e))}
        ></input>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => dispatch(changeValue(e))}
        ></input> */}
        <div>{message}</div>
        <CommonButton props={{ onClick: loadSignin }}>로그인</CommonButton>
      </StyledSignIn>
    </StyledSignInLayout>
  );
}
