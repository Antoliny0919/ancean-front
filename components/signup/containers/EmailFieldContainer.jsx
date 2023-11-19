import { useDispatch, useSelector } from 'react-redux';
import {
  authcodeAuthFail,
  authcodeAuthSuccess,
  getAuthcode,
  clearAuthState,
} from '@/components/common/sign/modules/signupAuth';
import {
  clearAuthcodeInput,
  changeAnnotation,
} from '../../common/sign/modules/field';
import AuthField from '../items/AuthField';
import { EMAIL_FIELD_DATA, AUTHCODE_FIELD_DATA } from '../data';

export default function EmailFieldContainer() {
  const STEP = 'signup';
  const FORM = 'form';
  const ANNOTATION = 'annotation';

  const dispatch = useDispatch();

  const {
    emailInput,
    authcodeInput,
    authcode,
    isAuthed,
    emailAnnotation,
    authcodeAnnotation,
  } = useSelector(({ field, signupAuth }) => {
    return {
      emailInput: field[STEP][FORM]['email'],
      authcodeInput: field[STEP][FORM]['authcode'],
      authcode: signupAuth.authcode,
      isAuthed: signupAuth.auth,
      emailAnnotation: field[STEP][ANNOTATION]['email'],
      authcodeAnnotation: field[STEP][ANNOTATION]['authcode'],
    };
  });

  const loadGetAuthcode = (e) => {
    e.preventDefault();
    dispatch(getAuthcode({ email: emailInput }));
  };

  const reAuthEmail = (e) => {
    e.preventDefault();
    dispatch(clearAuthState());
  };

  const authcodeConfirm = (e) => {
    e.preventDefault();
    let now = new Date().getTime();
    // authcode is valid time
    if (now < authcode.valid_time) {
      if (authcode.code == authcodeInput) {
        dispatch(authcodeAuthSuccess('인증성공!'));
        dispatch(
          changeAnnotation({
            step: STEP,
            name: 'email',
            value: '인증성공!',
          }),
        );
        dispatch(clearAuthcodeInput());
        return;
      } else {
        dispatch(authcodeAuthFail('인증번호가 일치하지 않습니다.'));
      }
    } else {
      dispatch(
        authcodeAuthFail('인증번호의 유효기간이 지났습니다. 재발급 해주세요.'),
      );
    }
  };

  // console.log(emailInput, authcode);

  return (
    <>
      {
        <AuthField
          step={STEP}
          inputData={EMAIL_FIELD_DATA.inputData}
          inputWidth={EMAIL_FIELD_DATA.width}
          annotation={emailAnnotation}
          buttonWidth={10}
          buttonTitle={
            isAuthed
              ? EMAIL_FIELD_DATA.isAuthedButtonTitle
              : EMAIL_FIELD_DATA.buttonTitle
          }
          buttonLogic={isAuthed ? reAuthEmail : loadGetAuthcode}
          readOnly={isAuthed}
          $isAuthed={isAuthed}
        ></AuthField>
      }
      {!isAuthed && (
        <AuthField
          step={STEP}
          inputData={AUTHCODE_FIELD_DATA.inputData}
          inputWidth={AUTHCODE_FIELD_DATA.width}
          annotation={authcodeAnnotation}
          buttonWidth={10}
          buttonTitle={AUTHCODE_FIELD_DATA.buttonTitle}
          buttonLogic={authcodeConfirm}
        ></AuthField>
      )}
    </>
  );
}
