import { useDispatch, useSelector } from 'react-redux';
import { reverseAllState } from '../../common/sign/modules/toggle';
import SignRadioInput from '../items/SignRadioInput';

export default function AllAgreeToggleContainer() {
  const dispatch = useDispatch();

  const agreementState = useSelector(({ toggle }) => toggle);

  const disagreeCnt = Object.keys(agreementState).filter(
    (item) => agreementState[item] === false,
  ).length;
  const onChecked = !disagreeCnt;

  const changeAllAgreeState = () =>
    dispatch(reverseAllState({ disagreeCnt: disagreeCnt }));
  return (
    <SignRadioInput
      onChecked={onChecked}
      changeState={changeAllAgreeState}
      data={{ name: null, label: '전체 약관 동의' }}
    ></SignRadioInput>
  );
}
