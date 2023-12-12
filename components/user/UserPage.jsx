import styled from 'styled-components';
// import UserPageHeader from './UserPageHeader';
// import UserPageBody from './UserPageBody';
import UserPageBody2 from './UserPageBody2';

// const StyledUserPageArea = styled.div`
//   padding: 5rem;
//   font-family: 'GmarketSansMedium';
// `;

const StyledUserPageArea = styled.section`
  /* padding: 5rem; */
`;

export default function UserPage({ posts }) {
  return (
    // <StyledUserPageArea>
    //   <UserPageHeader name={name} />
    //   <UserPageBody posts={posts} name={name} />
    // </StyledUserPageArea>
    <StyledUserPageArea>
      {/* <UserPageHeader name={name} /> */}
      <UserPageBody2 posts={posts}></UserPageBody2>
    </StyledUserPageArea>
  );
}
