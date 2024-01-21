import styled from 'styled-components';
import PostFinalPublicationModalContainer from './container/PostFinalPublicationModalContainer';

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

export default function PostFinalPublicationModal({ modalState, closeModal }) {
  return (
    <StyledPostFinalPublicationModal className={modalState && 'on'}>
      <div className="content-area">
        <PostFinalPublicationModalContainer closeModal={closeModal} />
      </div>
    </StyledPostFinalPublicationModal>
  );
}
