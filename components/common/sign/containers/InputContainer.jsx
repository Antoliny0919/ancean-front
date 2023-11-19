import { useDispatch, useSelector } from 'react-redux';
import { changeInput } from '../modules/field';
import Input from '../../../common/sign/Input';

export default function InputContainer({ step, inputData, width, ...rest }) {
  const dispatch = useDispatch();

  const value = useSelector(({ field }) => field[step]['form'][inputData.name]);

  const annotation = useSelector(
    ({ field }) => field[step]['annotation'][inputData.name],
  );

  const changeInputValue = (e) =>
    dispatch(
      changeInput({
        input: e.target,
        step: step,
      }),
    );

  return (
    <Input
      value={value}
      onChange={changeInputValue}
      inputData={inputData}
      width={width}
      annotation={annotation}
      {...rest}
    ></Input>
  );
}
