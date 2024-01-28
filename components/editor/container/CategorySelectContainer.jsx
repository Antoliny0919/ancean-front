import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { forcedChangeValue } from '../modules/editor';
import CategorySelect from '../../category/CategorySelect';

export default function CategorySelectContainer({ categories }) {
  const [selectState, setSelectState] = useState(false);

  const onSelectBlock = () => {
    setSelectState(!selectState);
  };

  const dispatch = useDispatch();

  const { selectedCategory } = useSelector(({ editor }) => editor);

  const onSelectCategory = (e) => {
    let selectedCategoryName = e.target.innerHTML;
    dispatch(
      forcedChangeValue({
        name: 'selectedCategory',
        value: selectedCategoryName,
      }),
    );
    onSelectBlock();
  };

  return (
    <CategorySelect
      categories={categories}
      selectedCategory={selectedCategory}
      defaultData={'카테고리를 선택해주세요'}
      optionProps={{ onClick: onSelectCategory }}
      selectState={selectState}
      setSelectState={onSelectBlock}
    ></CategorySelect>
  );
}
