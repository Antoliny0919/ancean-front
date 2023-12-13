import styled from 'styled-components';
import SwiperCategoryMain from '@/components/category/swiper/SwiperCategoryMain';
import SectionHeader from './items/SectionHeader';

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

export default function MostRepresentativeCategory({ data }) {
  return (
    <StyledMostRepresentativeCategoryArea>
      <SectionHeader
        mainTitle={'Top Categories'}
        subTitle={'최근 가장 많은 게시글이 있는 카테고리 입니다.'}
        color={'hsl(202, 84%, 45%)'}
        shadow={
          '1px 1px hsl(202, 84%, 42%), \
      2px 2px hsl(202, 84%, 39%), \
      3px 3px hsl(202, 84%, 36%), \
      4px 4px hsl(202, 84%, 33%), \
      5px 5px hsl(202, 84%, 30%), \
      6px 6px hsl(202, 84%, 27%), \
      7px 7px hsl(202, 84%, 24%), \
      8px 8px hsl(202, 84%, 21%), \
      9px 9px hsl(202, 84%, 18%), \
      10px 10px 30px rgba(0,0,0,.7)'
        }
      />
      <SwiperCategoryMain data={data} />
    </StyledMostRepresentativeCategoryArea>
  );
}
