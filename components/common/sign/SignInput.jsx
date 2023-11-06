import styled from 'styled-components';
import InputContainer from './containers/InputContainer';
import Button from '../Button';

const StyledSignInput = styled.div`
  .error {
    height: 2rem;
    font-size: 14px;
    color: red;
    padding-left: 0.5rem;
  }
`;

const StyledInputAndButton = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function SignInput({ step, formKey, inputData, inputWidth }) {
  const { button, buttonName } = inputData;

  return (
    <StyledSignInput>
      <StyledInputAndButton>
        <InputContainer
          step={step}
          formKey={formKey}
          inputData={inputData}
          inputWidth={inputWidth}
        ></InputContainer>
        {button && <Button>{buttonName}</Button>}
        {/* delete span tag */}
      </StyledInputAndButton>
      <div className="error">asdfasdf</div>
    </StyledSignInput>
  );
}
