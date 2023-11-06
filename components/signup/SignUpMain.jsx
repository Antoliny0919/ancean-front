import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FadeInEffect from '../common/FadeInEffect';
import CenterTemplate from '../common/CenterTemplate';
import EmailFieldContainer from './containers/EmailFieldContainer';
import NoneAuthFieldArea from './NoneAuthFieldArea';
import AgreeFieldArea from './AgreeFieldArea';
import RegisterButtonContainer from './containers/RegisterButtonContainer';

const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  &:last-child {
    margin-top: 2rem;
  }
`;

export default function SignUpMain() {
  const authState = useSelector(({ signupAuth }) => signupAuth.auth);

  return (
    <CenterTemplate>
      <h1>회원가입</h1>
      <StyledSignUpForm>
        <EmailFieldContainer></EmailFieldContainer>
        <FadeInEffect $fadeIn={authState}>
          <NoneAuthFieldArea />
          <AgreeFieldArea />
          <RegisterButtonContainer>회원가입</RegisterButtonContainer>
        </FadeInEffect>
      </StyledSignUpForm>
    </CenterTemplate>
  );
}
