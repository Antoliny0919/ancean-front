import { useSelector } from 'react-redux';
import Field from '../items/Field';
import { NONE_AUTH_FIELD_DATA } from '../data';

export default function NoneAuthFieldContainer() {
  const annotation = useSelector(({ field }) => field['signup']['annotation']);

  return (
    <>
      {NONE_AUTH_FIELD_DATA.map((data, index) => {
        return (
          <Field
            step="signup"
            inputData={data}
            key={index}
            annotation={annotation[data.name]}
            button={false}
            $classState="fail"
          ></Field>
        );
      })}
    </>
  );
}
