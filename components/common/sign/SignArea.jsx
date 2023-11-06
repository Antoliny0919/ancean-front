import Styled from 'styled-components';
import CenterTemplate from '@/components/common/CenterTemplate';
import SignHeader from './SignHeader';

const StyledSignUpMain = Styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 35rem;
  padding: 2rem 2.5rem;
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 0.17rem;
  border-radius: 2%;
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 1px 1px,
    rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px,
    rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

export default function SignArea({ type, children }) {
  return (
    <CenterTemplate>
      <StyledSignUpMain>
        <SignHeader type={type} />
        {children}
      </StyledSignUpMain>
    </CenterTemplate>
  );
}
