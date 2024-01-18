import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { FaRegImage } from 'react-icons/fa6';
import CategoryText from '../category/CategoryText';
import { flexBox, post } from '../../styles/variable';

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
  label {
    ${flexBox.flex('column')}
    width: 300px;
    aspect-ratio: 1.4 / 1;
    background-color: rgba(40, 80, 100, 0.3);
    font-size: 16px;
    border-radius: 10px;
    color: black;
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

export default function PostFinalPublicationModal({ modalState }) {
  const { title, selectedCategory } = useSelector(({ editor }) => editor);

  return (
    <StyledPostFinalPublicationModal className={modalState && 'on'}>
      <div className="content-area">
        <StyledTopArea>
          <div>
            <label htmlFor="file-input">
              <FaRegImage />
              <div>대표이미지 추가</div>
            </label>
            <input
              type="file"
              style={{ display: 'none' }}
              id="file-input"
            ></input>
          </div>
          <div className="post-info">
            {selectedCategory && (
              <CategoryText
                name={selectedCategory}
                style={{ 'font-size': '40px' }}
              ></CategoryText>
            )}
            <h3>{title}하하ㅏ하 테스트 진행</h3>
            <textarea placeholder="포스트 썸네일에 들어갈 내용입니다. 포스트에 대한 간단한 설명을 입력해주세요!"></textarea>
          </div>
        </StyledTopArea>
        <div className="divide-line"></div>
      </div>
    </StyledPostFinalPublicationModal>
  );
}
