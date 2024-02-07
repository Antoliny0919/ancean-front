import Image from '../../common/Image';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { FaRegImage } from 'react-icons/fa6';
import { resetHeaderImageState } from '../../editor/modules/editor';
import { EditorContext } from '../../editor/MarkdownEditor';
import CategorySelectContainer from '../../editor/container/CategorySelectContainer';
import CategoryText from '../../category/CategoryText';
import { changeValue } from '../../editor/modules/editor';
import { flexBox, post } from '../../../styles/variable';

const StyledTopArea = styled.div`
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h3 {
    margin: 10px;
  }
  .image-block {
    ${flexBox.flex('column')}
    width: 300px;
    aspect-ratio: 1.4 / 1;
    ${(props) =>
      props.$haveHeaderImage
        ? css`
            background-color: white;
          `
        : css`
            background-color: rgba(40, 80, 100, 0.3);
          `}
    font-size: 16px;
    border-radius: 10px;
    color: black;
    img {
      width: inherit;
      height: inherit;
    }
    svg {
      width: 100px;
      height: 100px;
      color: ${({ theme }) => theme.colors.mainColor[4]};
    }
  }
  .post-info {
    width: 60%;
    display: flex;
    flex-direction: column;
    padding-left: 2em;

    .post-category-select {
      @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-around;
        padding: 0.5em 0;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1em 0;
    }
    h3 {
      margin: 10px 0px;
      width: 100%;
      ${post.titleEllipsis()};
    }
    textarea {
      min-height: 100px;
      border: none;
      outline: none;
      resize: none;
    }
  }
`;

const StyledTopImageSideBar = styled.div`
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1em 1em 0 1em;
  font-size: inherit;
  & > * {
    margin-right: 1rem;
    vertical-align: center;
  }
  button {
    border: solid 1.5px ${({ theme }) => theme.colors.mainColor[4]};
    border-radius: 5px;
    background-color: #f8f8f8;
    color: ${({ theme }) => theme.colors.mainColor[4]};
    transition:
      background-color 0.7s,
      color 0.7s;
  }
  button:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.mainColor[8]};
    background-color: white;
  }
`;

export default function Top({
  headerImage,
  headerImagePath,
  onSelectedImageFile,
}) {
  const dispatch = useDispatch();

  const onChangeIntroduce = (e) => {
    dispatch(changeValue(e));
  };

  const categories = useContext(EditorContext).categories;

  const { title, selectedCategory, introduce } = useSelector(
    ({ editor }) => editor,
  );

  return (
    <>
      <StyledTopArea $haveHeaderImage={headerImagePath}>
        <div>
          {headerImagePath ? (
            <>
              <div className="image-block">
                <Image src={headerImagePath}></Image>
              </div>
            </>
          ) : (
            <>
              <label htmlFor="file-input" className="image-block">
                <FaRegImage />
                <div>대표이미지 추가</div>
              </label>
              <input
                type="file"
                style={{ display: 'none' }}
                id="file-input"
                onChange={onSelectedImageFile}
              ></input>
            </>
          )}
        </div>
        <div className="post-info">
          <div className="post-category-select">
            {selectedCategory && (
              <CategoryText
                name={selectedCategory}
                style={{ fontSize: '30px' }}
              ></CategoryText>
            )}
            <CategorySelectContainer
              categories={categories}
            ></CategorySelectContainer>
          </div>
          <h3>{title}</h3>
          <textarea
            placeholder="포스트 썸네일에 들어갈 내용입니다. 포스트에 대해 간단한 설명을 입력해주세요!"
            value={introduce}
            onChange={onChangeIntroduce}
          ></textarea>
        </div>
      </StyledTopArea>
      {headerImagePath && (
        <StyledTopImageSideBar>
          <div>선택된 이미지: {headerImage}</div>
          <button onClick={() => dispatch(resetHeaderImageState())}>
            이미지 다시 선택
          </button>
        </StyledTopImageSideBar>
      )}
    </>
  );
}
