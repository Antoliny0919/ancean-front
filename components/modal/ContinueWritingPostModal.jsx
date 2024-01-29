import styled from 'styled-components';
import { FaExclamation } from 'react-icons/fa';
import { FcIdea } from 'react-icons/fc';
import CommonButton from '../button/CommonButton';
import { StyledCommonButton } from '../button/CommonButton';

const StyledContinueWritingPostModal = styled.div`
  @media screen and (min-width: 450px) {
    font-size: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 6px;
  padding: 1em 3em;
  .logo {
    width: 20%;
    height: 20%;
  }
  .header {
    display: flex;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;
    div {
      font-size: inherit;
      font-weight: 900;
    }
    svg {
      color: red;
    }
  }
  .content {
    font-size: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
  }
  .footer {
    button + button {
      margin-left: 1.5em;
    }
  }
  ${StyledCommonButton} {
    font-size: inherit;
    padding: 0.5em 1em;
    min-width: 5em;
  }
`;

export default function ContinueWritingPostModal({ trueLogic, falseLogic }) {
  return (
    <StyledContinueWritingPostModal>
      <FcIdea className="logo" />
      <div className="header">
        <div>이전에 작성중이던 포스트가 존재합니다</div>
        <FaExclamation />
      </div>
      <div className="content">
        <span>계속해서 작성을 이어가시려면 &#39;예&#39;를 클릭해주세요.</span>
        <span>
          &#39;아니오&#39;를 클릭할시 새로운 포스트를 작성하게 됩니다.
        </span>
      </div>
      <div className="footer">
        <CommonButton props={{ onClick: trueLogic }}>예</CommonButton>
        <CommonButton props={{ onClick: falseLogic }}>아니오</CommonButton>
      </div>
    </StyledContinueWritingPostModal>
  );
}
