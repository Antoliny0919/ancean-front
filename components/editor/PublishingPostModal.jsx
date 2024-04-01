import { useDispatch, useSelector } from 'react-redux';
import { uploadHeaderImage } from './modules/editor';
import Top from './\bpublishing-post-modal/Top';
import Bottom from './\bpublishing-post-modal/Bottom';
import styled from 'styled-components';

const StyledPublishingPostModal = styled.div`
  position: absolute;
  font-family: 'NanumBarunGothic';
  background-color: ${({ theme }) => theme.colors.white};
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  transform: translateY(100vh);
  transition: transform 1s;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  overflow: scroll;
  &.on {
    transform: translateY(0vh);
  }
  .content-area {
    @media screen and (min-width: 450px) {
      font-size: 12px;
    }
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
    width: 768px;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    .divide-line {
      width: 100%;
      margin: 15px 0;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.mainColor[4]};
    }
  }
`;

export default function PublishingPostModal({ state, close }) {
  const dispatch = useDispatch();

  const { headerImage, headerImagePath } = useSelector(({ editor }) => editor);

  const accessToken = useSelector(({ auth }) => auth.user.token.access);

  const headers = { Authorization: `Bearer ${accessToken}` };

  const onSelectedImageFile = (e) => {
    // when client select a haeder image file, the image is upload
    const postId = localStorage.getItem('beingWrittenPostId');
    let selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('id', postId);
    dispatch(uploadHeaderImage({ formData, headers }));
  };

  return (
    <StyledPublishingPostModal className={state && 'on'}>
      <div className="content-area">
        <Top
          headerImage={headerImage}
          headerImagePath={headerImagePath}
          onSelectedImageFile={onSelectedImageFile}
        />
        <div className="divide-line"></div>
        <Bottom close={close} />
      </div>
    </StyledPublishingPostModal>
  );
}
