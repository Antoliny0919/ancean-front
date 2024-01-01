import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { changeValue, forcedChangeValue } from '../modules/editor';
import EntireBlockInput from '../../input/EntireBlockInput';
import CategoryButton from '../../button/CategoryButton';
import CommonButton from '../../button/CommonButton';
import { CATEGORY_LOGO } from '../../category/categoryLogo';

const StyledEditorCategoryArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: solid ${({ theme }) => theme.colors.mainColor[4]} 2px;
  width: 100%;
  background-color: white;
`;

const StyledSelectedCategoryArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
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

  const dispatch = useDispatch();

  const { fieldCategory, selectedCategory } = useSelector(
    ({ editor }) => editor,
  );

  const [categoryButton, setCategoryButton] = useState('');

  const categoryColor = useMemo(() => {
    if (CATEGORY_LOGO[selectedCategory]) {
      return CATEGORY_LOGO[selectedCategory]['color'];
    } else if (CATEGORY_LOGO[categoryButton]) {
      return CATEGORY_LOGO[categoryButton]['color'];
    }
  }, [selectedCategory, categoryButton]);

  const onClickCategory = useCallback(() => {
    dispatch(
      forcedChangeValue({ name: 'selectedCategory', value: categoryButton }),
    );
  }, [categoryButton]);

  const onChange = useCallback((e) => {
    dispatch(changeValue(e));
  }, []);

  const resetCategory = useCallback(() => {
    dispatch(forcedChangeValue({ name: 'selectedCategory', value: '' }));
    dispatch(forcedChangeValue({ name: 'fieldCategory', value: '' }));
    setCategoryButton('');
  }, []);

  const categoryFieldProps = {
    placeholder: placeholder,
    onChange: onChange,
    name: 'fieldCategory',
    value: fieldCategory,
  };

  useEffect(() => {
    if (categoriesName.includes(fieldCategory.toUpperCase())) {
      setCategoryButton(fieldCategory.toUpperCase());
    } else {
      setCategoryButton('');
    }
  }, [fieldCategory]);

  return (
    <StyledEditorCategoryArea>
      {selectedCategory ? (
        <StyledSelectedCategoryArea>
          <div>
            <span className="title">카테고리: </span>
            <span className="category">
              <CategoryButton props={{ $categoryColor: categoryColor }}>
                {selectedCategory}
              </CategoryButton>
            </span>
          </div>
          <CommonButton props={{ onClick: resetCategory }}>
            카테고리 다시 선택
          </CommonButton>
        </StyledSelectedCategoryArea>
      ) : (
        <>
          <EntireBlockInput
            props={categoryFieldProps}
            styleProps={{ height: '100%' }}
          />
          {categoryButton && (
            <CategoryButton
              props={{
                onClick: onClickCategory,
                $categoryColor: categoryColor,
              }}
            >
              {categoryButton}
            </CategoryButton>
          )}
        </>
      )}
    </StyledEditorCategoryArea>
  );
}
