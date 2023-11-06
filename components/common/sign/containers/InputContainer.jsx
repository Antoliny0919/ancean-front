import { useDispatch, useSelector } from 'react-redux';
import { changeInput } from '../modules/field';
import Input from '../../../common/sign/Input';

export default function InputContainer({ step, inputData, width, ...rest }) {
  const dispatch = useDispatch();

  const { value, annotation } = useSelector(({ field }) => {
    return {
      value: field[step]['form'][inputData.name],
      annotation: field[step]['annotation'][inputData.name],
    };
  });

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
