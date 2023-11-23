export const EMAIL_FIELD_DATA = {
  inputData: {
    placeholder: '이메일',
    type: 'text',
    name: 'email',
  },
  buttonTitle: '인증번호 발송',
  isSendedButtonTitle: '재발송',
  isAuthedButtonTitle: '다른 이메일 사용',
};

export const AUTHCODE_FIELD_DATA = {
  inputData: {
    placeholder: '인증번호',
    type: 'text',
    name: 'authcode',
  },
  width: 10,
  buttonTitle: '인증번호 확인',
  maxLength: 6,
};

export const AUTH_FIELD_DATA = [
  {
    inputData: {
      placeholder: '이메일',
      type: 'text',
      name: 'email',
    },
    width: 20,
    buttonTitle: '인증번호 발송',
  },
  {
    inputData: {
      placeholder: '인증번호',
      type: 'text',
      name: 'authcode',
    },
    width: 10,
    buttonTitle: '인증번호 확인',
  },
];

export const NONE_AUTH_FIELD_DATA = [
  {
    placeholder: '비밀번호',
    type: 'password',
    name: 'password1',
  },
  {
    placeholder: '비밀번호 확인',
    type: 'password',
    name: 'password2',
  },
  {
    placeholder: '소개',
    type: 'text',
    name: 'introduce',
  },
];

export const AGREEMENT_FIELD_DATA = [
  {
    label: '[필수] 그루 이용 약관에 동의',
    name: 'tos',
  },
  {
    label: '[필수] 개인정보 수집 및 이용 동의',
    name: 'privacy',
  },
  {
    label: '[선택] 마케팅 정보 수신 및 선택적 개인정보 제공',
    name: 'marketing',
  },
];
