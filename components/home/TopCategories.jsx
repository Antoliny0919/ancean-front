import styled from 'styled-components';
import SwiperCategoryMain from '@/components/category/swiper/SwiperCategoryMain';
import SectionHeader from './items/SectionHeader';

const StyledTopCategoriesArea = styled.div`
  margin-top: 3rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
  background-color: ${({ theme }) => theme.colors.mainColor[1]};
  display: flex;
  flex-direction: column;
`;

export default function TopCategories({ categories }) {
  return (
    <StyledTopCategoriesArea>
      <SectionHeader
        mainTitle={'Top Categories'}
        subTitle={'최근 가장 많은 게시글이 있는 카테고리 입니다.'}
        color={'hsl(181, 81%, 40%)'}
        shadow={
          '1px 1px hsl(181, 81%, 37%), \
      2px 2px hsl(181, 81%, 34%), \
      3px 3px hsl(181, 81%, 31%), \
      4px 4px hsl(181, 81%, 28%), \
      5px 5px hsl(181, 81%, 25%), \
      6px 6px hsl(181, 81%, 22%), \
      7px 7px hsl(181, 81%, 19%), \
      8px 8px hsl(181, 81%, 16%), \
      9px 9px hsl(181, 81%, 13%), \
      10px 10px 30px rgba(0,0,0,.7)'
        }
      />
      <SwiperCategoryMain categories={categories} />
    </StyledTopCategoriesArea>
  );
}
