import styled from 'styled-components';
import PaginationPost from '@/components/post/pagination/PaginationPost';

const StyledMostBigWavePostArea = styled.section`
  text-align: center;
  padding: 3rem;
  font-family: 'NanumBarunGothic';
  .section-title {
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainColor[8]};
    margin-bottom: 1rem;
  }
`;

export default function MostBigWavePost() {
  return (
    <StyledMostBigWavePostArea>
      <h1 className="section-title">가장 큰 파도를 만든 포스트</h1>
      <h4>최근 가장 많은 WAVE지수를 얻은 포스트들 입니다.</h4>
      <PaginationPost></PaginationPost>
    </StyledMostBigWavePostArea>
  );
}
