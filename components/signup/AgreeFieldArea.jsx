import styled from 'styled-components';
import AllAgreeToggleContainer from './containers/AllAgreeToggleContainer';
import AgreeToggleContainer from './containers/AgreeToggleContainer';
import { AGREEMENT_FIELD_DATA } from './data';

const StyledAgreeFieldArea = styled.div`
  margin-top: 2rem;
  width: 70%;
`;

export default function AgreeFieldArea() {
  return (
    <StyledAgreeFieldArea>
      <AllAgreeToggleContainer />
      {AGREEMENT_FIELD_DATA.map((data, index) => {
        return (
          <AgreeToggleContainer data={data} key={index}></AgreeToggleContainer>
        );
      })}
    </StyledAgreeFieldArea>
  );
}
