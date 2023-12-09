import styled from 'styled-components';
import PaginationPost from '@/components/post/pagination/PaginationPost';
import { FaCrown } from 'react-icons/fa6';

const StyledMostBigWavePostArea = styled.section`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 3rem;
  font-family: 'NanumBarunGothic';
  transition: opacity 1s;
  h4 {
    margin-bottom: 2rem;
  }
`;

const StyledSectionTitleArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainColor[8]};
    margin: 0;
    margin-right: 1rem;
  }
  svg {
    width: 5%;
    height: 5%;
    margin-bottom: 1rem;
    color: #dfdf22;
  }
`;

function MostBigWavePost() {
  return (
    <StyledMostBigWavePostArea>
      <StyledSectionTitleArea className="fade-in-slide-down-suspend">
        <h1>가장 큰 파도를 만든 포스트</h1>
        {/* <FaCrown /> */}
        <FaCrown />
      </StyledSectionTitleArea>
      <h4 className="fade-in-slide-down-suspend">
        최근 가장 많은 WAVE지수를 얻은 포스트들 입니다.
      </h4>
      <PaginationPost></PaginationPost>
    </StyledMostBigWavePostArea>
  );
}

export default MostBigWavePost;
