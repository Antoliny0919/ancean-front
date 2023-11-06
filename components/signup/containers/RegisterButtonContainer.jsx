import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../../common/Button';

const StyledRegisterButtonLayout = styled.div`
  margin-top: 3rem;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function RegisterButtonContainer({ children }) {
  const agreementState = useSelector(({ toggle }) => toggle);

  const agreeCnt = Object.keys(agreementState).filter(
    (item) => agreementState[item] === true,
  ).length;

  const isAllAgreed =
    agreeCnt === Object.keys(agreementState).length ? true : false;

  return (
    <StyledRegisterButtonLayout>
      {isAllAgreed ? (
        <Button width={15}>{children}</Button>
      ) : (
        <Button width={15} disabled={true}>
          {children}
        </Button>
      )}
    </StyledRegisterButtonLayout>
  );
}
