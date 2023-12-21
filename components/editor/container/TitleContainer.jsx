import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from '../modules/editor';
import EntireBlockInput from '../../input/EntireBlockInput';

export default function TitleContainer() {
  const value = useSelector(({ editor }) => editor.title);

  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeValue(e));
  };

  const titleProps = {
    placeholder: '제목을 입력해주세요..',
    name: 'title',
    value: value,
    onChange: onChange,
  };

  return <EntireBlockInput props={titleProps} />;
}
