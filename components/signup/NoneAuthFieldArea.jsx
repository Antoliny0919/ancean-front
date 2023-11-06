import styled from 'styled-components';
import InputContainer from '../common/sign/containers/InputContainer';
import { NONE_AUTH_FIELD_DATA } from './data';

const StyledNoneAuthFieldArea = styled.div`
  margin-top: 4rem;
`;

export default function NoneAuthFieldArea() {
  return (
    <StyledNoneAuthFieldArea>
      {NONE_AUTH_FIELD_DATA.map((data, index) => {
        return (
          <InputContainer
            step="signup"
            inputData={data}
            width={20}
            key={index}
          ></InputContainer>
        );
      })}
    </StyledNoneAuthFieldArea>
  );
}
