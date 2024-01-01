import styled from 'styled-components';
import { FaExclamation } from 'react-icons/fa';
import { FcIdea } from 'react-icons/fc';
import CommonButton from '../button/CommonButton';

const StyledContinueWritingPostModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    width: 20%;
    height: 20%;
  }
  .header {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    div {
      font-size: 18px;
      font-weight: 900;
    }
    svg {
      color: red;
    }
  }
  .content {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }
  .footer {
    button + button {
      margin-left: 1.5rem;
    }
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
        <CommonButton
          styleProps={{ width: '5rem' }}
          props={{ onClick: trueLogic }}
        >
          예
        </CommonButton>
        <CommonButton
          styleProps={{ width: '5rem' }}
          props={{ onClick: falseLogic }}
        >
          아니오
        </CommonButton>
      </div>
    </StyledContinueWritingPostModal>
  );
}
