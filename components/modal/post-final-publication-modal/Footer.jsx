import styled from 'styled-components';
import SavePostContainer from '../../editor/container/SavePostContainer';
import FontButton from '../../button/FontButton';
import CommonButton from '../../button/CommonButton';

const StyledFooterArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem 1.5rem;
  & > * {
    margin-left: 2rem;
  }
`;

export default function Footer({ closeModal }) {
  return (
    <StyledFooterArea>
      <SavePostContainer is_finish={true} buttonComponent={CommonButton}>
        출간하기
      </SavePostContainer>
      <FontButton props={{ onClick: closeModal }}>취소</FontButton>
    </StyledFooterArea>
  );
}
