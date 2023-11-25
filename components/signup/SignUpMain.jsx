import { usePRouter } from '@/hooks/usePRouter';
import CenterTemplate from '../common/CenterTemplate';
import Modal from '../common/modal/modal';
import SignupFormContainer from './containers/SignupFormContainer';
import GivenratTestImage from '@/public/signup/givenrat_logo.png';

export default function SignUpMain() {
  const router = usePRouter();

  const goHomePage = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <>
      <Modal
        image={GivenratTestImage}
        title="회원가입 성공"
        buttonTitle="확인"
        buttonLogic={goHomePage}
      ></Modal>
      <CenterTemplate>
        <h1>회원가입</h1>
        <SignupFormContainer />
      </CenterTemplate>
    </>
  );
}
