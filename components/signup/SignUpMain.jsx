import { useSelector, useDispatch } from 'react-redux';
import { changeState } from '../common/sign/modules/signupAuth';
import { usePRouter } from '@/hooks/usePRouter';
import CenterTemplate from '../common/CenterTemplate';
import Modal from '../common/modal/modal';
import SignupFormContainer from './containers/SignupFormContainer';
import GivenratTestImage from '@/public/signup/givenrat_logo.png';

export default function SignUpMain() {
  const dispatch = useDispatch();

  const router = usePRouter();

  const ModalState = useSelector(({ signupAuth }) => signupAuth.state);

  const goHomePage = (e) => {
    e.preventDefault();
    // changestate --> changeModalState
    dispatch(changeState());
    router.push('/');
  };

  return (
    <>
      <Modal
        disable={ModalState}
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
