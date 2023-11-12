import styled from 'styled-components';
import CenterTemplate from '../common/CenterTemplate';
import InputContainer from '../common/sign/containers/InputContainer';
import SignInContainer from './containers/SignInContainer'
import SignInSocial from './SignInSocial';
import { FIELD_DATA } from './data';

const StyledSignInArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 2rem;
  }
`;

const StyledSignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 0.5rem;
    width: 100%;
    height: 3rem;
  }
`;

const StyledDivideSocialLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  .divide-line {
    display: inline-block;
    height: 0.1rem;
    width: 30%;
    background-color: #dcdcdc;
  }
  .divide-text {
    font-size: 16px;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
    color: #8c8c8c;
  }
`;

const StyledInputArea = styled.div`
  margin-bottom: 2rem;
`;

export default function SignInMain() {
  return (
    <CenterTemplate>
      <StyledSignInArea>
        <h1>로그인 페이지</h1>
        <StyledSignInForm>
          <StyledInputArea>
            {FIELD_DATA.map((data, index) => {
              return (
                <InputContainer
                  key={index}
                  step="signin"
                  inputData={data}
                  width={25}
                ></InputContainer>
              );
            })}
          </StyledInputArea>
          <SignInContainer/>
        </StyledSignInForm>
        <StyledDivideSocialLine>
          <span className="divide-line"></span>
          <span className="divide-text"> 또는 </span>
          <span className="divide-line"></span>
        </StyledDivideSocialLine>
        <SignInSocial />
      </StyledSignInArea>
    </CenterTemplate>
  );
}
