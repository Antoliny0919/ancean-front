import styled from 'styled-components';
import { useState, useEffect, useMemo, useCallback } from 'react';
import EntireBlockInput from '../../input/EntireBlockInput';
import CategoryButton from '../../button/CategoryButton';
import CommonButton from '../../button/CommonButton';

const StyledEditorCategoryArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: solid ${({ theme }) => theme.colors.mainColor[4]} 2px;
  width: 100%;
`;

const StyledSelectedCategoryArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 1rem;
  div {
    display: flex;
    align-items: center;
    .title {
      font-size: 20px;
      font-family: 'NanumBarunGothic';
      margin-right: 0.7rem;
    }
    .category {
      margin-bottom: 0.2rem;
    }
  }
`;

export default function CategoryInputContainer({ placeholder, categories }) {
  const categoriesName = useMemo(() => {
    return categories.map((item) => item.name);
  }, []);

  const onClickCategory = useCallback(() => {
    setSelectedCategoryState(true);
  }, []);

  const resetCategory = useCallback(() => {
    setSelectedCategoryState(false);
    setCategoryButton('');
    setValue('');
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
        <StyledSelectedCategoryArea>
          <div>
            <span className="title">카테고리: </span>
            <span className="category">
              <CategoryButton categoryName={categoryButton} />
            </span>
          </div>
          <CommonButton props={{ onClick: resetCategory }}>
            카테고리 다시 선택
          </CommonButton>
        </StyledSelectedCategoryArea>
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
