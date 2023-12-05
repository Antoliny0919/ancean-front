import styled from 'styled-components';
import PaginationPost from '@/components/post/pagination/PaginationPost';

const StyledMostBigWavePostArea = styled.section`
  text-align: center;
  padding: 3rem;
  font-family: 'GmarketSansMedium';
  .section-title {
    font-size: 50px;
    font-family: 'NanumBarunGothic';
    color: ${({ theme }) => theme.colors.mainColor[8]};
    margin-bottom: 2rem;
  }
`;

export default function MostBigWavePost() {
  return (
    <StyledMostBigWavePostArea>
      <h1 className="section-title">가장 큰 파도를 만든 포스트</h1>
      <PaginationPost></PaginationPost>
    </StyledMostBigWavePostArea>
  );
}
