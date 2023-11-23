import styled from 'styled-components';
import Annotation from '../../common/sign/Annotation';
import InputContainer from '@/components/common/sign/containers/InputContainer';
import Button from '@/components/common/Button';

const StyledField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export default function Field({
  step,
  inputData,
  inputWidth = 20,
  annotation,
  button,
  ...rest
}) {
  return (
    <>
      <StyledField>
        <InputContainer
          step={step}
          inputData={inputData}
          width={inputWidth}
          {...rest}
        />
        {button && (
          <Button buttonLogic={button.buttonLogic} width={button.buttonWidth}>
            {button.buttonTitle}
          </Button>
        )}
      </StyledField>
      <Annotation state={rest.$classState}>{annotation}</Annotation>
    </>
  );
}
