import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { FaRegImage } from 'react-icons/fa6';
import { resetHeaderImageState } from '../../editor/modules/editor';
import CategoryText from '../../category/CategoryText';
import { flexBox, post } from '../../../styles/variable';

const StyledTopArea = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
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
      width: 100%;
      height: 100%;
    }
    svg {
      width: 100px;
      height: 100px;
      color: ${({ theme }) => theme.colors.mainColor[4]};
    }
  }
  .post-info {
    padding-left: 2rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    h3 {
      margin: 10px 0px;
      width: 100%;
      ${post.titleEllipsis()};
    }
    textarea {
      height: 50%;
      border: none;
      outline: none;
      resize: none;
    }
  }
`;

const StyledTopImageSideBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 1rem 0 1rem;
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

  const { title, selectedCategory } = useSelector(({ editor }) => editor);

  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <>
      <StyledTopArea $haveHeaderImage={headerImagePath}>
        <div>
          {headerImagePath ? (
            <>
              <div className="image-block">
                <Image
                  src={headerImagePath}
                  loader={myLoader}
                  alt="no-img"
                  width={0}
                  height={0}
                ></Image>
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
          {selectedCategory ? (
            <CategoryText
              name={selectedCategory}
              style={{ fontSize: '40px' }}
            ></CategoryText>
          ) : (
            <div>no-category</div>
          )}
          <h3>{title}</h3>
          <textarea placeholder="포스트 썸네일에 들어갈 내용입니다. 포스트에 대해 간단한 설명을 입력해주세요!"></textarea>
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
