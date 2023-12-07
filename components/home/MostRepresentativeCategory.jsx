import styled from 'styled-components';
import SwiperCategoryMain from '@/components/category/swiper/SwiperCategoryMain';
import { REPRESENTATIVE_CATEGORY } from '@/components/category/category';
import { BsSignpostFill } from 'react-icons/bs';

const StyledMostRepresentativeCategoryArea = styled.section`
  margin-top: 3rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  h4 {
    margin-bottom: 2rem;
  }
`;

const StyleSectionTitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'NanumBarunGothic';
  width: 100%;
  h1 {
    color: ${({ theme }) => theme.colors.mainColor[8]};
    font-size: 50px;
    margin: 0;
    margin-right: 1rem;
  }
  svg {
    width: 5%;
    height: 5%;
    color: #745633;
    margin-bottom: 1rem;
  }
`;

export default function MostRepresentativeCategory() {
  return (
    <StyledMostRepresentativeCategoryArea>
      <StyleSectionTitleArea className="fade-in-slide-down-suspend">
        <h1>큰 파도와 함께한 카테고리</h1>
        <BsSignpostFill />
      </StyleSectionTitleArea>
      <h4 className="fade-in-slide-down-suspend">
        최근 가장 많은 게시글이 있는 카테고리 입니다.
      </h4>
      <SwiperCategoryMain category={REPRESENTATIVE_CATEGORY} />
    </StyledMostRepresentativeCategoryArea>
  );
}
