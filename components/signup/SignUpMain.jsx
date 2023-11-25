import CenterTemplate from '../common/CenterTemplate';
import Modal from '../common/modal/modal';
import SignupFormContainer from './containers/SignupFormContainer';
import GivenratTestImage from '@/public/signup/givenrat_logo.png';

export default function SignUpMain() {
  return (
    <>
      <Modal
        image={GivenratTestImage}
        title="회원가입 성공"
        buttonTitle="확인"
      ></Modal>
      <CenterTemplate>
        <h1>회원가입</h1>
        <SignupFormContainer />
      </CenterTemplate>
    </>
  );
}
