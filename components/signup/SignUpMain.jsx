import CenterTemplate from '../common/CenterTemplate';
import SignupFormContainer from './containers/SignupFormContainer';

export default function SignUpMain() {
  return (
    <CenterTemplate>
      <h1>회원가입</h1>
      <SignupFormContainer />
    </CenterTemplate>
  );
}
