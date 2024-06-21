import { useSelector, useDispatch } from 'react-redux';
import LabelSlideInput from '../input/LabelSlideInput';
import SimpleTextarea from '../input/SimpleTextarea';
import { changeInputValue } from './modules/project';
import BoxDateInput from '../input/BoxDateInput';
import { CREATE_OPTION_INPUT_DATA, CREATE_OPTION_TEXTAREA_DATA } from './data';

export default function ProjectCreateOption() {
  const dispatch = useDispatch();

  const creator = useSelector(({ auth }) => auth.user.info.name);

  const inputValue = {
    ...useSelector(({ project }) => project.createForm),
    creator: creator,
  };

  const onChangeValue = (e, name) => {
    dispatch(
      changeInputValue({
        option: 'createForm',
        name: name,
        value: e.target.value,
      }),
    );
  };

  const descriptionName = CREATE_OPTION_TEXTAREA_DATA.textareaProps.name;

  const descriptionData = {
    ...CREATE_OPTION_TEXTAREA_DATA,
    textareaProps: {
      ...CREATE_OPTION_TEXTAREA_DATA.textareaProps,
      value: inputValue[descriptionName],
      onChange: (e) => onChangeValue(e, descriptionName),
    },
  };

  return (
    <>
      {CREATE_OPTION_INPUT_DATA.map(({ labelProps, inputProps }, index) => {
        return (
          <LabelSlideInput
            key={index}
            labelProps={labelProps}
            inputProps={{
              ...inputProps,
              value: inputValue[inputProps.name],
              onChange: (e) => onChangeValue(e, inputProps.name),
            }}
          />
        );
      })}
      <SimpleTextarea {...descriptionData} />
      <BoxDateInput />
    </>
  );
}
