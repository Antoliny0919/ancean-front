import styled from 'styled-components';

const StyledUserPageHeaderArea = styled.div`
  padding: 5rem;
  h1 {
    font-size: 100px;
    font-family: 'GmarketSansMedium';
    margin: 0;
  }
  .wave {
    color: ${({ theme }) => theme.colors.mainColor[4]};
  }
`;

export default function UserPageHeader({ name }) {
  return (
    <StyledUserPageHeaderArea>
      <h1>@{name}</h1>
      <h1 className="wave">WAVE</h1>
    </StyledUserPageHeaderArea>
  );
}
