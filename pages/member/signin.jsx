import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LabelSlideInput from '../../components/input/LabelSlideInput';
import useSignin from '../../components/auth/useSignin';
import CommonButton, {
  StyledCommonButton,
} from '../../components/button/CommonButton';
import Logo, { StyledLogo } from '../../components/common/Logo';
import { flex } from '../../styles/variable';

const StyledSignInLayout = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledSignInForm = styled.form`
  ${flex('column', 'center', 'center')};
  font-family: 'SUIT-Regular';
  font-size: 20px;
  ${StyledLogo} {
    margin-bottom: 0.8em;
    font-size: 60px;
  }
  ${StyledCommonButton} {
    width: 100%;
    margin-top: 0.5em;
  }
  .error {
    color: ${({ theme }) => theme.colors.state.fail};
    height: 1.5em;
    font-size: 0.8em;
    margin-top: 1em;
  }
`;

export default function SignIn() {
  const { email, password, message } = useSelector(({ auth }) => auth.signin);

  const { changeInputValue, onSubmit } = useSignin();

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
        value: email,
        onChange: changeInputValue,
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
        value: password,
        onChange: changeInputValue,
      },
    },
  ];

  return (
    <StyledSignInLayout>
      <StyledSignInForm onSubmit={onSubmit}>
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
        <div className="error">{message}</div>
        <CommonButton>로그인</CommonButton>
      </StyledSignInForm>
    </StyledSignInLayout>
  );
}
