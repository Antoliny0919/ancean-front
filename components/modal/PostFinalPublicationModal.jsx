import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';
import { client } from '../../api/client';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegImage } from 'react-icons/fa6';
import CategoryText from '../category/CategoryText';
import { flexBox, post } from '../../styles/variable';
import { forcedChangeValue } from '../editor/modules/editor';
import SavePostContainer from '../editor/container/SavePostContainer';
import CommonButton from '../button/CommonButton';
import FontButton from '../button/FontButton';
import css from 'styled-jsx/css';

const StyledPostFinalPublicationModal = styled.div`
  position: absolute;
  font-family: 'NanumBarunGothic';
  background-color: #f8f8f8;
  bottom: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  transform: translateY(100vh);
  transition: transform 1s;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  &.on {
    transform: translateY(0vh);
  }
  .content-area {
    width: 768px;
    display: flex;
    flex-direction: column;
    .divide-line {
      width: 100%;
      margin: 15px 0;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.mainColor[4]};
    }
  }
`;

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

const StyledHeaderImageSideBar = styled.div`
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

const StyledBottomArea = styled.div`
  padding: 0 1rem;
  .bottom-field {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: solid #dedede 1px;
    & > * {
      margin-right: 2rem;
      display: flex;
    }
    .field-name {
      font-size: 18px;
      width: 15%;
    }
    .field-name > div {
      background-color: ${({ theme }) => theme.colors.mainColor[4]};
      color: #fff;
      padding: 0.1em 0.5em;
      border-radius: 10px;
    }
    input[type='radio'] {
      appearance: none;
      width: 1.25em;
      height: 1.25em;
      border-radius: 50%;
      border: max(2px, 0.2em) solid grey;
      transition:
        border 0.5s ease-in-out,
        box-shadow 0.5s;
    }

    input[type='radio']:checked {
      border: 0.4em solid ${({ theme }) => theme.colors.mainColor[4]};
    }
    input[type='radio']:hover {
      box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
      cursor: pointer;
    }

    input[type='radio']:hover + span {
      cursor: pointer;
    }
    input[type='radio']:disabled {
      background-color: lightgray;
      box-shadow: none;
      opacity: 0.7;
    }
    input[type='radio']:disabled + span {
      cursor: default;
      opacity: 0.7;
    }
  }
`;

const StyledFooterArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem 1.5rem;
  & > * {
    margin-left: 2rem;
  }
`;

export default function PostFinalPublicationModal({ modalState, closeModal }) {
  const dispatch = useDispatch();

  const [headerImagePath, setHeaderImagePath] = useState('');

  const { headerImage } = useSelector(({ editor }) => editor);

  const onSelectedImageFile = (e) => {
    let selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', selectedFile);
    upLoadHeaderImage(formData, selectedFile.name);
  };

  const upLoadHeaderImage = async (formData, fileName) => {
    const response = await client.post('/api/uploadImage/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: false,
    });
    const data = response.data;
    if (data.success === 1) {
      setHeaderImagePath(data.file.url);
      console.log();
      dispatch(forcedChangeValue({ name: 'headerImage', value: fileName }));
    }
  };

  const resetHeaderImage = () => {
    setHeaderImagePath('');
    dispatch(forcedChangeValue({ name: 'headerImage', value: '' }));
  };

  const publicationData = new Date();

  const { title, selectedCategory } = useSelector(({ editor }) => editor);

  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <StyledPostFinalPublicationModal className={modalState && 'on'}>
      <div className="content-area">
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
          <StyledHeaderImageSideBar>
            <div>선택된 이미지: {headerImage}</div>
            <button onClick={resetHeaderImage}>이미지 다시 선택</button>
          </StyledHeaderImageSideBar>
        )}
        <div className="divide-line"></div>
        <StyledBottomArea>
          <div className="bottom-field">
            <div className="field-name">
              <div>공개설정</div>
            </div>
            <label htmlFor="radio-input-published">
              <input
                type="radio"
                id="radio-input-published"
                name="contact"
                defaultChecked
              ></input>
              <span>공개</span>
            </label>
            <label htmlFor="radio-input-none-published">
              <input
                type="radio"
                id="radio-input-none-published"
                name="contact"
                disabled
              ></input>
              <span>비공개</span>
            </label>
          </div>
          <div className="bottom-field">
            <div className="field-name">
              <div>출간일</div>
            </div>
            <div>
              {publicationData.getFullYear()}년 {publicationData.getMonth() + 1}
              월 {publicationData.getDate()}일
            </div>
          </div>
          <div className="bottom-field">
            <div className="field-name">
              <div>작성자</div>
            </div>
            <div>Antoliny0919</div>
          </div>
        </StyledBottomArea>
        <StyledFooterArea>
          <SavePostContainer is_finish={true} buttonComponent={CommonButton}>
            출간하기
          </SavePostContainer>
          <FontButton props={{ onClick: closeModal }}>취소</FontButton>
        </StyledFooterArea>
      </div>
    </StyledPostFinalPublicationModal>
  );
}
