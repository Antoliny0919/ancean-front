import { useDispatch, useSelector } from 'react-redux';
import { reverseState } from '../../common/sign/modules/toggle';
import SignRadioInput from '../items/SignRadioInput';

export default function AgreeToggleContainer({ data }) {
  const agreementState = useSelector(({ toggle }) => toggle);
  const dispatch = useDispatch();

  const onChecked = agreementState[data.name] ? true : false;

  const changeAgreeState = (e) => {
    dispatch(reverseState({ event: e.target }));
  };

  return (
    <SignRadioInput
      changeState={changeAgreeState}
      onChecked={onChecked}
      data={data}
    ></SignRadioInput>
  );
}
