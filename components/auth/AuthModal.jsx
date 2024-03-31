import { useDispatch, useSelector } from 'react-redux';
import { changeModalState } from './modules/auth';
import ModalBase from '../modal/ModalBase';

export default function AuthModal() {
  const dispatch = useDispatch();

  const { state } = useSelector(({ auth }) => auth.modal);

  const close = () => {
    dispatch(changeModalState(false));
  };

  return (
    <ModalBase disable={state} controlModalState={close}>
      <div>hello</div>
    </ModalBase>
  );
}
