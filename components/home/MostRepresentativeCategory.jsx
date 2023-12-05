import styled from 'styled-components';
import SwiperCategoryMain from '@/components/category/swiper/SwiperCategoryMain';

const StyledMostRepresentativeCategoryArea = styled.div`
  padding-top: 10rem;
  padding-bottom: 10rem;
`;

export default function MostRepresentativeCategory() {
  return (
    <StyledMostRepresentativeCategoryArea>
      <SwiperCategoryMain />
    </StyledMostRepresentativeCategoryArea>
  );
}
