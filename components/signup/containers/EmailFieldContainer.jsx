import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  authFail,
  authcodeAuthSuccess,
  getAuthcode,
  clearAuthState,
} from '@/components/common/sign/modules/signupAuth';
import {
  clearAuthcodeInput,
  changeAnnotation,
} from '../../common/sign/modules/field';
import FadeInEffect from '@/components/common/FadeInEffect';
import Field from '../items/Field';
import { EMAIL_FIELD_DATA, AUTHCODE_FIELD_DATA } from '../data';

export default function EmailFieldContainer() {
  const STEP = 'signup';
  const FORM = 'form';
  const ANNOTATION = 'annotation';

  const dispatch = useDispatch();

  const [buttonTitle, setButtonTitle] = useState(EMAIL_FIELD_DATA.buttonTitle);

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
      authcodeAnnotation: signupAuth.message,
    };
  });

  const loadGetAuthcode = (e) => {
    e.preventDefault();
    dispatch(getAuthcode({ email: emailInput })).then((res) => {
      // rejected
      if (res.error) {
        const value = res.payload.data.email;
        dispatch(authFail());
        // error response is list type, when multiple errors response --> choose first error
        dispatch(
          changeAnnotation({ step: STEP, name: 'email', value: value[0] }),
        );
      } else {
        // fulfilled
        dispatch(
          changeAnnotation({
            step: STEP,
            name: 'email',
            value: '사용 가능한 이메일입니다.',
          }),
        );
        setButtonTitle(EMAIL_FIELD_DATA.isSendedButtonTitle);
      }
    });
  };

  const reAuthEmail = (e) => {
    e.preventDefault();
    dispatch(clearAuthState());
    dispatch(changeAnnotation({ step: STEP, name: 'email', value: '' }));
    setButtonTitle(EMAIL_FIELD_DATA.buttonTitle);
  };

  const authcodeConfirm = (e) => {
    e.preventDefault();
    let now = new Date().getTime();
    console.log(now, authcode.validTime);
    // authcode is valid time
    if (now < authcode.validTime) {
      if (authcode.value == Number(authcodeInput)) {
        dispatch(authcodeAuthSuccess());
        dispatch(
          changeAnnotation({
            step: STEP,
            name: 'email',
            value: '인증성공!',
          }),
        );
        dispatch(clearAuthcodeInput());
        setButtonTitle(EMAIL_FIELD_DATA.isAuthedButtonTitle);
        return;
      } else {
        dispatch(authFail('인증번호가 일치하지 않습니다.'));
      }
    } else {
      dispatch(authFail('인증번호의 유효기간이 지났습니다. 재발급 해주세요.'));
    }
  };

  function stateToClassName(state) {
    var className = '';
    switch (state) {
      case true:
        className = 'success';
        break;
      case false:
        className = 'fail';
        break;
      default:
        className = 'warning';
        break;
    }
    return className;
  }

  return (
    <>
      {
        <Field
          step={STEP}
          inputData={EMAIL_FIELD_DATA.inputData}
          button={{
            buttonWidth: 10,
            buttonTitle: buttonTitle,
            buttonLogic: isAuthed ? reAuthEmail : loadGetAuthcode,
          }}
          annotation={emailAnnotation}
          readOnly={isAuthed}
          $classState={stateToClassName(isAuthed)}
        ></Field>
      }
      {!isAuthed && authcode && (
        <FadeInEffect $fadeIn={!isAuthed}>
          <Field
            step={STEP}
            inputData={AUTHCODE_FIELD_DATA.inputData}
            inputWidth={AUTHCODE_FIELD_DATA.width}
            annotation={authcodeAnnotation}
            button={{
              buttonWidth: 10,
              buttonTitle: AUTHCODE_FIELD_DATA.buttonTitle,
              buttonLogic: authcodeConfirm,
            }}
            $classState={stateToClassName(isAuthed)}
          ></Field>
        </FadeInEffect>
      )}
    </>
  );
}
