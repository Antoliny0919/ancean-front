import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import LabelSlideInput from '../../components/input/LabelSlideInput';
import CommonButton, {
  StyledCommonButton,
} from '../../components/button/CommonButton';
import Logo, { StyledLogo } from '../../components/common/Logo';
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
  ${StyledLogo} {
    margin-bottom: 0.8em;
  }
  ${StyledCommonButton} {
    width: 100%;
    margin-top: 2.5em;
  }
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
        required: true,
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
        required: true,
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
        <Logo />
        {INPUTS_DATA.map(({ labelProps, inputProps }, index) => {
          return (
            <LabelSlideInput
              key={index}
              labelProps={labelProps}
              inputProps={inputProps}
            />
          );
        })}
        <div>{message}</div>
        <CommonButton props={{ onClick: loadSignin }}>로그인</CommonButton>
      </StyledSignIn>
    </StyledSignInLayout>
  );
}
