import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import CommonButton from '../../components/button/CommonButton';
import { signin, changeValue } from '../../components/auth/modules/auth';
import { flex } from '../../styles/variable';

const StyledSignInLayout = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledSignIn = styled.div`
  ${flex('column', 'center', 'center')};
`;

export default function SignIn() {
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
        <input
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
        ></input>
        <div>{message}</div>
        <CommonButton props={{ onClick: loadSignin }}>로그인</CommonButton>
      </StyledSignIn>
    </StyledSignInLayout>
  );
}
