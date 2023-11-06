import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SignArea from '../SignArea';
import { resetInput } from '../modules/sign';
import { resetProcess } from '@/components/signup/modules/process';

export default function SignContainer({ type, children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // reset Input and Process data
    dispatch(resetInput());
    dispatch(resetProcess());
  }, []);

  return <SignArea type={type}>{children}</SignArea>;
}
