import { useDispatch, useSelector } from 'react-redux';
import { reverseState } from '../../common/sign/modules/toggle';
import Toggle from '../items/Toggle';

export default function AgreeToggleContainer({ data }) {
  const agreementState = useSelector(({ toggle }) => toggle);
  const dispatch = useDispatch();

  const onChecked = agreementState[data.name] ? true : false;

  const changeAgreeState = (e) => {
    dispatch(reverseState({ event: e.target }));
  };

  return (
    <Toggle
      changeState={changeAgreeState}
      onChecked={onChecked}
      data={data}
    ></Toggle>
  );
}
