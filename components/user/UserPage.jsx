import styled from 'styled-components';
import UserPageHeader from './UserPageHeader';
import UserPageBody from './UserPageBody';

const StyledUserPageArea = styled.div`
  padding: 5rem;
  font-family: 'GmarketSansMedium';
`;

export default function UserPage({ posts, name }) {
  return (
    <StyledUserPageArea>
      <UserPageHeader name={name} />
      <UserPageBody posts={posts} name={name} />
    </StyledUserPageArea>
  );
}
