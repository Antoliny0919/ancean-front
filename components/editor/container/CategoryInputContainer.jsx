import styled from 'styled-components';
import { useState, useEffect, useMemo, useCallback } from 'react';
import EntireBlockInput from '../../input/EntireBlockInput';
import CategoryButton from '../../button/CategoryButton';

const StyledEditorCategoryArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function CategoryInputContainer({ placeholder, categories }) {
  const categoriesName = useMemo(() => {
    return categories.map((item) => item.name);
  }, []);

  const onClickCategory = useCallback(() => {
    setSelectedCategoryState(true);
  }, []);

  const [value, setValue] = useState('');

  const [categoryButton, setCategoryButton] = useState('');

  const [selectedCategoryState, setSelectedCategoryState] = useState(false);

  useEffect(() => {
    if (categoriesName.includes(value.toUpperCase())) {
      setCategoryButton(value.toUpperCase());
    } else {
      setCategoryButton('');
    }
  }, [value]);

  return (
    <StyledEditorCategoryArea>
      {selectedCategoryState ? (
        <>
          <span>카테고리: </span>
          <span>
            <CategoryButton categoryName={categoryButton} />
          </span>
          <button>카테고리 다시 선택하기</button>
        </>
      ) : (
        <>
          <EntireBlockInput
            placeholder={placeholder}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          {categoryButton && (
            <CategoryButton
              categoryName={categoryButton}
              props={{ onClick: onClickCategory }}
            />
          )}
        </>
      )}
    </StyledEditorCategoryArea>
  );
}
