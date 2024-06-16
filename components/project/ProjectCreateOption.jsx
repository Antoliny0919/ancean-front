import { useSelector, useDispatch } from 'react-redux';
import LabelSlideInput from '../input/LabelSlideInput';
import { changeInputValue } from './modules/project';
import { CREATE_OPTION_INPUT_DATA } from './data';

export default function ProjectCreateOption() {
  const dispatch = useDispatch();

  const creator = useSelector(({ auth }) => auth.user.info.name);

  const inputValue = {
    ...useSelector(({ project }) => project.createForm),
    creator: creator,
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
              onChange: (e) =>
                dispatch(
                  changeInputValue({
                    option: 'createForm',
                    name: inputProps.name,
                    value: e.target.value,
                  }),
                ),
            }}
          />
        );
      })}
    </>
  );
}
