import styled from 'styled-components';
import Annotation from '../../common/sign/Annotation';
import InputContainer from '@/components/common/sign/containers/InputContainer';
import AuthButtonContainer from '../containers/AuthButtonContainer';

const StyledField = styled.div`
  & + & {
    margin-top: 2rem;
  }
`;

const StyledAuthField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function AuthField({
  step,
  inputData,
  inputWidth,
  annotation,
  buttonWidth,
  buttonLogic,
  buttonTitle,
  ...rest
}) {
  return (
    <StyledField>
      <StyledAuthField>
        <InputContainer
          step={step}
          inputData={inputData}
          width={inputWidth}
          {...rest}
        />
        <AuthButtonContainer buttonLogic={buttonLogic} width={buttonWidth}>
          {buttonTitle}
        </AuthButtonContainer>
      </StyledAuthField>
      <Annotation>{annotation}</Annotation>
    </StyledField>
  );
}
