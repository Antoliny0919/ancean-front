import { useSelector, useDispatch } from 'react-redux';
import { loadSignup } from '@/components/common/sign/modules/signupAuth';
import Form from '../items/Form';
import EmailFieldContainer from '../containers/EmailFieldContainer';
import FadeInEffect from '../../common/FadeInEffect';
import NoneAuthFieldContainer from './NoneAuthFieldContainer';
import AgreeFieldArea from '../AgreeFieldArea';
import { changeAnnotation } from '@/components/common/sign/modules/field';
import RegisterButtonContainer from '../containers/RegisterButtonContainer';

export default function SignupFormContainer() {
  const dispatch = useDispatch();

  const authState = useSelector(({ signupAuth }) => signupAuth.auth);

  const formData = useSelector(({ field }) => field['signup']['form']);

  const createUser = (e) => {
    e.preventDefault();
    // authcode used previous loadSignup
    delete formData.authcode;
    dispatch(loadSignup(formData)).then((res) => {
      if (res.error) {
        const error_messages = res.payload.data;
        Object.keys(error_messages).map((key) =>
          dispatch(
            changeAnnotation({
              step: 'signup',
              name: key,
              value: error_messages[key][0],
            }),
          ),
        );
      }
    });
  };

  return (
    <Form onSubmit={createUser}>
      <EmailFieldContainer></EmailFieldContainer>
      <FadeInEffect $fadeIn={authState}>
        <NoneAuthFieldContainer />
        <AgreeFieldArea />
        <RegisterButtonContainer>회원가입</RegisterButtonContainer>
      </FadeInEffect>
    </Form>
  );
}
