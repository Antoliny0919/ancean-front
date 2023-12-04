// import Image from 'next/image';
import styled from 'styled-components';
// import TestImage from '@/public/call-back-hell.jpeg';
import PaginationPost from '@/components/post/pagination/PaginationPost';

const StyledJoinSectionArea = styled.section`
  text-align: center;
  padding: 5rem;
  font-family: 'GmarketSansMedium';
  .section-title {
    font-size: 50px;
    margin: 0;
  }
`;

// const StyledJoinSectionPost = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   align-items: center;
//   img {
//     position: relative;
//     width: 30rem;
//     opacity: 0.5;
//   }
//   .content {
//     position: absolute;
//   }
// `

export default function JoinSectionMain() {
  return (
    <StyledJoinSectionArea>
      <h1 className="section-title">이런저런 타이틀</h1>
      <PaginationPost></PaginationPost>
    </StyledJoinSectionArea>
  );
}
